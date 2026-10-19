import { iconSvg, ICON_COUNT } from "./icons";

/**
 * The preloader animation, driven imperatively from one rAF loop.
 *
 *   intro    a small cluster of nursing-tool icons pops in around the centre
 *   idle     they float in depth, gathering slightly as loading progresses
 *   merge    once assets are ready: a little anticipation, then a spiral
 *            pull into the centre point with motion-blur trails, shrinking
 *            as a glow builds where they meet
 *   burst    the logo pops up like a bubble from that point, with a flash
 *            and a burst of medical-cross particles, then a shine sweep
 *   exit     the logo pushes toward camera while an iris opens from the
 *            centre and reveals the (already playing) page underneath
 */

const BLUE = "#3e53a0";
const RED = "#c04041";
const SPRITE_PX = 256;

/* timeline (ms) */
const INTRO_MIN = 1300; // earliest the merge may start
const APPEAR_SPREAD = 380;
const APPEAR_DUR = 900;
const FLIGHT = 1050;
const FLIGHT_SPREAD = 200; // extra time for the farthest icons
const STAGGER = 140;
const SWIRL = 1.1; // radians of spin on the way in
const LOGO_IN = 900;
const SHINE_DELAY = 250; // burst → shine starts, right as the bubble pop settles
const SHINE_DUR = 1650; // slow sweep; its tail fades out with the logo on exit
const HOLD = 1500; // burst → exit
const EXIT = 1000;
const IRIS_START = 0.24; // fraction of EXIT before the iris starts opening
const IRIS_FEATHER = 70;

/* ─── easing ─── */
const clamp01 = (v: number) => (v < 0 ? 0 : v > 1 ? 1 : v);
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const outCubic = (t: number) => 1 - (1 - t) ** 3;
const inCubic = (t: number) => t * t * t;
const inOutCubic = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2);
const inOutSine = (t: number) => -(Math.cos(Math.PI * t) - 1) / 2;
const inOutQuart =(t: number) => (t < 0.5 ? 8 * t ** 4 : 1 - (-2 * t + 2) ** 4 / 2);
/** Damped spring 0 → 1 with ~13% overshoot. */
const spring = (t: number) => (t >= 1 ? 1 : 1 - Math.exp(-6.2 * t) * Math.cos(9.6 * t));
/** Bouncier spring 0 → 1 with ~16% overshoot and a quick settle. */
const bubble = (t: number) => (t >= 1 ? 1 : 1 - Math.exp(-7 * t) * Math.cos(12 * t));
const TAU = Math.PI * 2;

type Icon = {
  type: number;
  flip: 1 | -1;
  ox: number; // home offset from the centre, in units of `spread`
  oy: number;
  depth: number; // 0 far … 1 near
  size: number; // css px
  alpha: number;
  appear: number;
  // float
  fx: number; fy: number; fr: number;
  px: number; py: number; pr: number;
  amp: number;
  // merge
  mDelay: number;
  mDur: number;
  cap?: { r0: number; a0: number; rot0: number; size0: number; alpha0: number };
};

type Particle = {
  x: number; y: number; vx: number; vy: number;
  life: number; ttl: number; size: number;
  cross: boolean; color: string; rot: number; spin: number;
};

export type SceneEls = {
  root: HTMLElement;
  canvas: HTMLCanvasElement;
  logo: HTMLElement;
  shine: HTMLElement;
};

export type Scene = {
  setProgress(p: number): void;
  /** Everything is loaded — merge as soon as the intro allows. */
  finish(): void;
  destroy(): void;
};

async function buildSprites(): Promise<HTMLCanvasElement[]> {
  return Promise.all(
    Array.from({ length: ICON_COUNT }, async (_, i) => {
      const img = new Image();
      img.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(iconSvg(i, BLUE));
      await img.decode();
      const c = document.createElement("canvas");
      c.width = c.height = SPRITE_PX;
      c.getContext("2d")!.drawImage(img, 0, 0, SPRITE_PX, SPRITE_PX);
      return c;
    }),
  );
}

export function createScene(
  els: SceneEls,
  opts: { reducedMotion: boolean; onReveal: () => void; onDone: () => void },
): Scene {
  const { root, canvas, logo, shine } = els;
  const ctx = canvas.getContext("2d")!;
  const reduced = opts.reducedMotion;

  let W = 0, H = 0, dpr = 1, cx = 0, cy = 0;
  let L = 0; // logo size
  let spread = 0; // how far the cluster reaches from the centre
  let base = 0; // base icon size

  let sprites: HTMLCanvasElement[] = [];
  let icons: Icon[] = [];
  const particles: Particle[] = [];

  let raf = 0;
  let destroyed = false;
  let clock = 0;
  let last = 0;

  let target = 0; // loading progress reported
  let shown = 0; // smoothed progress
  let ready = false;


  // timeline marks, set when the merge starts
  let mergeT0 = Infinity;
  let burstT = Infinity;
  let exitT0 = Infinity;
  let burstFired = false;
  let revealed = false;

  /* ─── layout ─── */
  function layout() {
    W = window.innerWidth;
    H = window.innerHeight;
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(W * dpr);
    canvas.height = Math.round(H * dpr);
    cx = W / 2;
    cy = H / 2;
    L = Math.round(Math.min(W * 0.36, H * 0.24, 190));
    base = Math.max(34, Math.min(70, Math.min(W, H) * 0.085));
    spread = Math.min(W * 0.3, H * 0.23, 230);
    root.style.setProperty("--logo-size", `${L}px`);
  }

  /* ─── icons: a loose cluster around the centre ─── */
  function spawn() {
    const n = W < 640 ? 7 : 8;
    const step = TAU / n;
    const start = Math.random() * TAU;
    const types = Array.from({ length: n }, (_, i) => i % ICON_COUNT).sort(() => Math.random() - 0.5);

    icons = Array.from({ length: n }, (_, i) => {
      const a = start + i * step + (Math.random() - 0.5) * step * 0.45;
      // alternate inner/outer so the cluster isn't a neat circle
      const r = (i % 2 ? 0.58 : 0.86) + (Math.random() - 0.5) * 0.18;
      const depth = clamp01((i % 2 ? 0.85 : 0.35) + (Math.random() - 0.5) * 0.3);
      const type = types[i];
      return {
        type,
        flip: Math.random() < 0.5 ? 1 : -1,
        ox: Math.cos(a) * r,
        oy: Math.sin(a) * r,
        depth,
        size: base * (0.72 + 0.36 * depth),
        alpha: 0.5 + 0.5 * depth,
        appear: 60 + (i / n) * APPEAR_SPREAD + Math.random() * 80,
        fx: 0.0009 + Math.random() * 0.0007,
        fy: 0.0011 + Math.random() * 0.0008,
        fr: 0.0007 + Math.random() * 0.0006,
        px: Math.random() * TAU,
        py: Math.random() * TAU,
        pr: Math.random() * TAU,
        amp: reduced ? 0 : 5 + 7 * depth,
        mDelay: 0,
        mDur: FLIGHT,
      };
    });
    icons.sort((a, b) => a.depth - b.depth); // far ones drawn first
  }

  /* ─── idle state (intro + float) ─── */
  function idleState(n: Icon, t: number) {
    const g = 1 - 0.12 * outCubic(shown); // draw in a little as loading progresses
    const fx = Math.sin(t * n.fx + n.px) + 0.4 * Math.sin(t * n.fx * 2.3 + n.px * 1.7);
    const fy = Math.sin(t * n.fy + n.py) + 0.35 * Math.sin(t * n.fy * 1.9 + n.py * 2.1);
    const ap = clamp01((t - n.appear) / APPEAR_DUR);
    const x = cx + n.ox * spread * g + fx * n.amp;
    const y = cy + n.oy * spread * g + fy * n.amp * 1.25 + (1 - outCubic(ap)) * 24;
    const rot = Math.sin(t * n.fr + n.pr) * 0.065 + (1 - outCubic(ap)) * 0.25 * n.flip;
    const breathe = 1 + Math.sin(t * n.fr * 1.6 + n.px) * 0.02;
    const s = reduced ? (ap > 0 ? 1 : 0) : spring(ap);
    return {
      x, y, rot,
      size: n.size * s * breathe,
      alpha: n.alpha * outCubic(clamp01(ap * 1.7)),
    };
  }

  function planMerge(t: number) {
    const far = Math.max(1, ...icons.map((n) => Math.hypot(n.ox, n.oy)));
    for (const n of icons) {
      const d = Math.hypot(n.ox, n.oy) / far;
      n.mDelay = (1 - d) * STAGGER + Math.random() * 70; // far ones leave first…
      n.mDur = FLIGHT + d * FLIGHT_SPREAD; // …so everyone meets at once
      n.cap = undefined;
    }
    mergeT0 = t;
    const arrive = t + (icons.length ? Math.max(...icons.map((n) => n.mDelay + n.mDur)) : 0);
    burstT = reduced ? t + 350 : arrive - 70;
    exitT0 = burstT + (reduced ? 1300 : HOLD);
  }

  /* ─── flight state (pure in t, so motion-blur ghosts can sample it) ─── */
  function flightState(n: Icon, t: number) {
    const c = n.cap!;
    const u = clamp01((t - mergeT0 - n.mDelay) / n.mDur);
    const e = inOutCubic(u);
    const anticip = u < 0.3 ? Math.sin((Math.PI * u) / 0.3) * 0.12 : 0;
    const r = lerp(c.r0, 0, e) + c.r0 * anticip;
    const a = c.a0 + SWIRL * inOutCubic(clamp01((u - 0.06) / 0.94));
    const bank = Math.sin(Math.PI * u) * 0.4;
    return {
      u,
      x: cx + Math.cos(a) * r,
      y: cy + Math.sin(a) * r,
      rot: c.rot0 + SWIRL * 0.7 * e + bank,
      size: lerp(c.size0, c.size0 * 0.16, e) * (1 + anticip * 0.6),
      alpha: lerp(c.alpha0, 1, outCubic(u)) * (1 - clamp01((u - 0.82) / 0.18)),
    };
  }

  function capture(n: Icon, t: number) {
    const s = idleState(n, t);
    n.cap = {
      r0: Math.hypot(s.x - cx, s.y - cy),
      a0: Math.atan2(s.y - cy, s.x - cx),
      rot0: s.rot,
      size0: s.size,
      alpha0: s.alpha,
    };
  }

  /* ─── drawing helpers ─── */
  function drawIcon(n: Icon, x: number, y: number, rot: number, size: number, alpha: number) {
    if (alpha <= 0.004 || size < 0.5) return;
    const cos = Math.cos(rot) * dpr, sin = Math.sin(rot) * dpr;
    ctx.globalAlpha = Math.min(1, alpha);
    ctx.setTransform(cos * n.flip, sin * n.flip, -sin, cos, x * dpr, y * dpr);
    ctx.drawImage(sprites[n.type], -size / 2, -size / 2, size, size);
  }

  function radialGlow(r: number, alpha: number) {
    if (alpha <= 0.003) return;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const gr = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
    gr.addColorStop(0, `rgba(62,83,160,${alpha})`);
    gr.addColorStop(1, "rgba(62,83,160,0)");
    ctx.globalAlpha = 1;
    ctx.fillStyle = gr;
    ctx.fillRect(cx - r, cy - r, r * 2, r * 2);
  }

  function burst() {
    const k = L / 300;
    for (let i = 0; i < 46; i++) {
      const a = Math.random() * TAU;
      const r = L * 0.06 * Math.random();
      const v = (0.14 + Math.random() * 0.36) * k; // px per ms
      particles.push({
        x: cx + Math.cos(a) * r,
        y: cy + Math.sin(a) * r,
        vx: Math.cos(a) * v,
        vy: Math.sin(a) * v,
        life: 0,
        ttl: 750 + Math.random() * 650,
        size: (2 + Math.random() * 3) * Math.max(0.8, k),
        cross: Math.random() < 0.38,
        color: Math.random() < 0.2 ? RED : BLUE,
        rot: Math.random() * TAU,
        spin: (Math.random() - 0.5) * 0.008,
      });
    }
  }

  /* ─── frame ─── */
  function frame(now: number) {
    if (destroyed) return;
    const dt = Math.min(now - last, 50); // clamp so a background tab doesn't skip the show
    last = now;
    clock += dt;
    const t = clock;

    const goal = ready ? 1 : Math.min(target, 0.97);
    shown += (goal - shown) * (1 - Math.exp(-dt / (ready ? 160 : 380)));

    if (ready && mergeT0 === Infinity && t >= INTRO_MIN) planMerge(t);
    if (!burstFired && t >= burstT) {
      burstFired = true;
      if (!reduced) burst();
    }

    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const exitE = clamp01((t - exitT0) / EXIT);

    /* glow: builds as the icons converge, flashes on the burst, then settles */
    if (!reduced) {
      const gather = mergeT0 < Infinity ? inCubic(clamp01((t - mergeT0) / (burstT - mergeT0))) : 0;
      const flash = burstFired ? Math.exp(-(t - burstT) / 260) : 0;
      const settle = burstFired ? outCubic(clamp01((t - burstT) / 500)) : 0;
      const pre = burstFired ? 0 : gather;
      radialGlow(L * (0.25 + 0.3 * pre + 0.7 * settle + 0.3 * flash), (0.35 * pre + 0.14 * settle + 0.32 * flash) * (1 - exitE));
    }

    /* icons */
    for (const n of icons) {
      if (t < mergeT0 + n.mDelay) {
        const s = idleState(n, t);
        drawIcon(n, s.x, s.y, s.rot, s.size, s.alpha);
        continue;
      }
      if (reduced) {
        const s = idleState(n, t);
        drawIcon(n, s.x, s.y, s.rot, s.size, s.alpha * (1 - clamp01((t - mergeT0) / 400)));
        continue;
      }
      if (!n.cap) capture(n, mergeT0 + n.mDelay);
      const s = flightState(n, t);
      if (s.u >= 1) continue;

      // motion-blur trail: earlier samples of the same path, fading out
      const w = Math.sin(Math.PI * s.u);
      if (w > 0.15) {
        for (let k = 4; k >= 1; k--) {
          const g = flightState(n, t - k * 16);
          drawIcon(n, g.x, g.y, g.rot, g.size, g.alpha * 0.22 * w * (1 - k / 5));
        }
      }
      drawIcon(n, s.x, s.y, s.rot, s.size, s.alpha);
    }

    /* particles */
    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.life += dt;
      if (p.life >= p.ttl) { particles.splice(i, 1); continue; }
      const drag = Math.exp(-dt / 420);
      p.vx *= drag;
      p.vy = p.vy * drag + 0.00018 * dt; // a touch of gravity
      p.x += p.vx * dt;
      p.y += p.vy * dt;
      p.rot += p.spin * dt;
      const k = p.life / p.ttl;
      ctx.globalAlpha = (1 - k) ** 1.6 * 0.9;
      ctx.fillStyle = p.color;
      const cs = Math.cos(p.rot) * dpr, sn = Math.sin(p.rot) * dpr;
      ctx.setTransform(cs, sn, -sn, cs, p.x * dpr, p.y * dpr);
      const s = p.size * (1 - 0.4 * k);
      if (p.cross) {
        ctx.fillRect(-s, -s * 0.32, s * 2, s * 0.64);
        ctx.fillRect(-s * 0.32, -s, s * 0.64, s * 2);
      } else {
        ctx.beginPath();
        ctx.arc(0, 0, s * 0.6, 0, TAU);
        ctx.fill();
      }
    }

    // the iris waits until the logo has mostly zoomed away
    const diag = Math.hypot(W, H) / 2 + IRIS_FEATHER;
    const iris = inOutQuart(clamp01((exitE - IRIS_START) / (1 - IRIS_START))) * diag;
    ctx.globalAlpha = 1;

    /* DOM layers */
    if (burstFired) {
      const lt = clamp01((t - burstT) / LOGO_IN);
      let sx: number, sy: number, opacity: number;
      if (reduced) {
        sx = sy = 1;
        opacity = outCubic(clamp01((t - burstT) / 500));
      } else {
        // pops up like a bubble out of the point where the icons met:
        // a bouncy overshoot plus a decaying squash-and-stretch wobble
        const grow = bubble(lt) * (1 + 0.6 * inCubic(clamp01(exitE / 0.5)));
        const wobble = 0.09 * Math.exp(-6 * lt) * Math.sin(16 * lt);
        sx = grow * (1 + wobble);
        sy = grow * (1 - wobble);
        opacity = outCubic(clamp01(lt * 4));
      }
      opacity *= 1 - outCubic(clamp01((exitE - 0.06) / 0.4));
      logo.style.opacity = String(opacity);
      logo.style.transform = `translate(-50%, -50%) scale(${sx}, ${sy})`;

      const sh = clamp01((t - burstT - SHINE_DELAY) / SHINE_DUR);
      shine.style.backgroundPosition = `${lerp(160, -60, inOutSine(sh))}% 0`;
      shine.style.opacity = sh > 0 && sh < 1 ? "1" : "0";
    }

    /* exit: iris (or a plain fade with reduced motion) */
    if (exitE > 0) {
      if (!revealed) {
        revealed = true;
        opts.onReveal();
      }
      if (reduced) {
        root.style.opacity = String(1 - outCubic(clamp01(exitE / 0.6)));
      } else {
        // soft edge sits inside the radius, so at radius 0 the overlay is fully opaque
        const mask = `radial-gradient(circle at ${cx}px ${cy}px, transparent ${Math.max(0, iris - IRIS_FEATHER)}px, #000 ${iris}px)`;
        root.style.setProperty("-webkit-mask-image", mask);
        root.style.setProperty("mask-image", mask);
      }
      if (exitE >= 1) {
        destroyed = true;
        opts.onDone();
        return;
      }
    }

    raf = requestAnimationFrame(frame);
  }

  /* ─── wiring ─── */
  layout();
  window.addEventListener("resize", layout);

  buildSprites()
    .catch(() => [] as HTMLCanvasElement[])
    .then((s) => {
      if (destroyed) return;
      sprites = s;
      if (sprites.length) spawn();
      last = performance.now();
      raf = requestAnimationFrame(frame);
    });

  return {
    setProgress(p) {
      target = Math.max(target, p);
    },
    finish() {
      ready = true;
    },
    destroy() {
      destroyed = true;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", layout);
    },
  };
}
