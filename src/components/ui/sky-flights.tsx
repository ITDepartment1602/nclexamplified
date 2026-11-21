import { useEffect, useRef } from "react";

/*
 * "Your next stop" flight: a minimalist plane flying from the Philippines HQ
 * to the destination the globe is showing.
 *
 * - If the Philippines is on the visible side of the globe, the plane takes
 *   off from its marker. If it's round the back, the plane climbs up from
 *   behind the edge of the globe on the side the Philippines lies, low down by
 *   the stat bar — as if coming over the horizon.
 * - The route bows outward, so the plane flies around the outside of the
 *   globe, and lands on the destination marker with a small pulse.
 * - A dashed trail traces the whole route from take-off; a banner reads
 *   "Your next stop · {label}". After landing everything fades out quickly.
 *
 * Positions come from cobe's per-marker anchor <div>s (and `--cobe-visible-*`
 * flags), so the route stays pinned to the places as the globe moves. Where
 * those aren't available, it falls back to the globe's geometry.
 */

interface SkyFlightsProps {
  /** the element wrapping the globe canvas (a square; the sphere fills ~88%) */
  globeRef: React.RefObject<HTMLElement>;
  className?: string;
  /** every change launches a new flight */
  flightKey: string | number;
  /** destination name for the banner */
  label: string;
  /** cobe marker ids to fly between */
  fromId: string;
  toId: string;
  /** which side of the globe the origin lies on when it's out of view: 1 = right, -1 = left */
  fromSide: 1 | -1;
  /** time in the air, ms */
  duration?: number;
  /** wait this long after a change (the globe turning to the new place) before take-off */
  delay?: number;
}

type Pt = { x: number; y: number };

const FADE_IN_MS = 240;
const FADE_OUT_MS = 380;
const SPHERE = 0.88; // cobe's sphere diameter as a share of the canvas
const TRAIL_STEPS = 56;
const TOP_GAP = 64; // keep the route clear of the heading text above the globe
const LIFT = (24 * Math.PI) / 180; // matches GlobalReach's focusLift — where the destination sits
// top-down airliner silhouette, 24×24, nose pointing straight up
const PLANE_PATH =
  "M12 1.5c.9 0 1.5 1 1.5 2.4V9l8.2 4.6c.3.2.5.5.5.9v1.3l-8.7-2.7V18l2.6 2v1.4L12 20.6l-4.1.8V20l2.6-2v-4.9l-8.7 2.7v-1.3c0-.4.2-.7.5-.9L10.5 9V3.9c0-1.4.6-2.4 1.5-2.4z";

const rand = (a: number, b: number) => a + Math.random() * (b - a);
// gentle take-off and landing, steady cruise in between
const easeInOut = (t: number) => -(Math.cos(Math.PI * t) - 1) / 2;
const bez = (a: Pt, c: Pt, b: Pt, t: number): Pt => ({
  x: (1 - t) * (1 - t) * a.x + 2 * (1 - t) * t * c.x + t * t * b.x,
  y: (1 - t) * (1 - t) * a.y + 2 * (1 - t) * t * c.y + t * t * b.y,
});

export function SkyFlights({
  globeRef,
  className = "",
  flightKey,
  label,
  fromId,
  toId,
  fromSide,
  duration = 4200,
  delay = 1000,
}: SkyFlightsProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const trailRef = useRef<SVGPathElement>(null);
  const planeRef = useRef<SVGGElement>(null);
  const originRef = useRef<SVGCircleElement>(null);
  const pulseRef = useRef<SVGCircleElement>(null);
  const bannerRef = useRef<SVGGElement>(null);
  const bannerBgRef = useRef<SVGRectElement>(null);
  const bannerTextRef = useRef<SVGTextElement>(null);
  const bannerPlaceRef = useRef<SVGTSpanElement>(null);

  // read inside the rAF loop, so prop changes never restart the effect
  const props = useRef({ flightKey, label, fromId, toId, fromSide });
  props.current = { flightKey, label, fromId, toId, fromSide };

  useEffect(() => {
    const svg = svgRef.current;
    const trail = trailRef.current;
    const plane = planeRef.current;
    const origin = originRef.current;
    const pulse = pulseRef.current;
    const banner = bannerRef.current;
    const bannerBg = bannerBgRef.current;
    const bannerText = bannerTextRef.current;
    const bannerPlace = bannerPlaceRef.current;
    if (!svg || !trail || !plane || !origin || !pulse || !banner || !bannerBg || !bannerText || !bannerPlace)
      return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const sizeUp = () =>
      svg.setAttribute("viewBox", `0 0 ${svg.clientWidth || 1} ${svg.clientHeight || 1}`);
    sizeUp();
    const ro = new ResizeObserver(sizeUp);
    ro.observe(svg);

    // ── cobe marker lookups ──
    const anchors = new Map<string, HTMLDivElement>();
    const anchorOf = (id: string) => {
      const cached = anchors.get(id);
      if (cached?.isConnected) return cached;
      const g = globeRef.current;
      if (!g) return null;
      const re = new RegExp(`anchor-name:\\s*--cobe-${id}(;|$)`);
      const found = [...g.querySelectorAll<HTMLDivElement>("div")].find((el) => re.test(el.style.cssText));
      if (found) anchors.set(id, found);
      return found ?? null;
    };
    const isVisible = (id: string) =>
      getComputedStyle(document.documentElement).getPropertyValue(`--cobe-visible-${id}`).trim() !== "";
    const screenOf = (id: string, sr: DOMRect): Pt | null => {
      const a = anchorOf(id);
      if (!a || !isVisible(id)) return null;
      const r = a.getBoundingClientRect();
      return { x: r.left - sr.left, y: r.top - sr.top };
    };
    const geom = (sr: DOMRect) => {
      const gr = globeRef.current?.getBoundingClientRect();
      if (!gr || !gr.width) return null;
      return {
        R: (gr.width * SPHERE) / 2,
        cx: gr.left + gr.width / 2 - sr.left,
        cy: gr.top + gr.height / 2 - sr.top,
        small: gr.width < 420,
      };
    };

    // ── per-flight state ──
    let flownKey: string | number | null = null;
    let start = 0;
    let launched = false;
    let fromAnchor = false; // take off from the HQ marker, or from behind the globe's edge
    let limbAngle = 0;
    let bowFactor = 1;
    let bannerW = 0;

    const setBanner = () => {
      bannerPlace.textContent = props.current.label;
      bannerW = bannerText.getComputedTextLength() + 26;
      bannerBg.setAttribute("width", String(bannerW));
    };

    let raf: number | null = null;
    let onScreen = true;

    const frame = (now: number) => {
      if (!onScreen) {
        raf = null;
        return;
      }
      raf = requestAnimationFrame(frame);
      const p0 = props.current;

      if (p0.flightKey !== flownKey) {
        flownKey = p0.flightKey;
        start = now + delay;
        launched = false;
        setBanner();
      }

      const elapsed = now - start;
      if (elapsed < 0 || elapsed > duration + FADE_OUT_MS) {
        svg.style.opacity = "0";
        return;
      }

      const sr = svg.getBoundingClientRect();
      const g = geom(sr);
      if (!g) return;

      // decide where this flight takes off from, once, at take-off
      if (!launched) {
        launched = true;
        const hq = screenOf(p0.fromId, sr);
        // only use the marker if it's comfortably on the upper, uncovered part
        fromAnchor = !!hq && hq.y < g.cy + g.R * 0.05;
        const low = ((g.small ? rand(6, 16) : rand(2, 9)) * Math.PI) / 180;
        limbAngle = p0.fromSide > 0 ? low : Math.PI - low;
        bowFactor = rand(0.9, 1.15);
      }

      // endpoints (re-read every frame so they stay pinned while the globe drifts)
      const S: Pt =
        (fromAnchor && screenOf(p0.fromId, sr)) || {
          x: g.cx + Math.cos(limbAngle) * g.R * 1.02,
          y: g.cy + Math.sin(limbAngle) * g.R * 1.02,
        };
      const E: Pt = screenOf(p0.toId, sr) || { x: g.cx, y: g.cy - Math.sin(LIFT) * g.R };

      // control point pushed outward from the globe's centre, so the arc
      // swings around the outside of the sphere; capped below the heading
      const mid = { x: (S.x + E.x) / 2, y: (S.y + E.y) / 2 };
      let nx = mid.x - g.cx;
      let ny = mid.y - g.cy;
      const nl = Math.hypot(nx, ny);
      if (nl < 1) {
        nx = 0;
        ny = -1;
      } else {
        nx /= nl;
        ny /= nl;
      }
      if (ny > 0.2) ny = -ny; // never bow down behind the stat bar
      const dist = Math.max(g.R * 2.3 - nl, g.R * 1.3) * bowFactor;
      const C = { x: g.cx + nx * dist, y: g.cy + ny * dist };
      const topGap = g.small ? 40 : TOP_GAP;
      const minCy = 2 * topGap - (S.y + E.y) / 2; // keeps the curve's peak ≥ topGap
      if (C.y < minCy) C.y = minCy;

      const flying = elapsed <= duration;
      const t = flying ? easeInOut(elapsed / duration) : 1;

      // dashed trail: the whole route flown so far
      let d = "";
      for (let i = 0; i <= TRAIL_STEPS; i++) {
        const q = bez(S, C, E, (t * i) / TRAIL_STEPS);
        d += `${i ? "L" : "M"} ${q.x.toFixed(1)} ${q.y.toFixed(1)} `;
      }
      trail.setAttribute("d", d);

      // plane at the head, nose along the direction of travel
      const p = bez(S, C, E, t);
      const ahead = bez(S, C, E, Math.min(1, t + 0.01));
      const behind = bez(S, C, E, Math.max(0, t - 0.01));
      const angle = (Math.atan2(ahead.y - behind.y, ahead.x - behind.x) * 180) / Math.PI;
      const size = g.small ? 20 : 24;
      plane.setAttribute(
        "transform",
        `translate(${p.x} ${p.y}) rotate(${angle + 90}) scale(${size / 24}) translate(-12 -12)`,
      );

      origin.setAttribute("cx", String(S.x));
      origin.setAttribute("cy", String(S.y));

      // landing pulse on the destination
      const land = Math.max(0, (elapsed - duration * 0.9) / (duration * 0.1 + FADE_OUT_MS));
      pulse.setAttribute("cx", String(E.x));
      pulse.setAttribute("cy", String(E.y));
      pulse.setAttribute("r", String(4 + land * 14));
      pulse.style.opacity = land > 0 ? String(0.7 * (1 - land)) : "0";

      // banner: on wide screens it rides above the plane (below it near the
      // top), level and in bounds; on phones there's no room around the plane,
      // so it sits centred just above the stat bar
      const vw = svg.clientWidth || 1;
      let bx: number;
      let by: number;
      if (g.small) {
        bx = g.cx - bannerW / 2;
        by = g.cy + g.R * 0.3 - 4;
      } else {
        bx = Math.max(6, Math.min(vw - bannerW - 6, p.x - bannerW / 2));
        by = p.y < 70 ? p.y + 18 : p.y - 46;
      }
      banner.setAttribute("transform", `translate(${bx} ${by})`);

      svg.style.opacity = flying
        ? String(Math.min(1, elapsed / FADE_IN_MS))
        : String(Math.max(0, 1 - (elapsed - duration) / FADE_OUT_MS));
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        onScreen = entry.isIntersecting;
        if (onScreen && raf === null) {
          // after being scrolled away, re-fly the current leg from the start
          flownKey = null;
          raf = requestAnimationFrame(frame);
        }
      },
      { threshold: 0.01 },
    );
    io.observe(svg);
    raf = requestAnimationFrame(frame);

    return () => {
      io.disconnect();
      ro.disconnect();
      if (raf !== null) cancelAnimationFrame(raf);
    };
  }, [globeRef, duration, delay]);

  return (
    <svg
      ref={svgRef}
      aria-hidden
      className={`pointer-events-none overflow-visible ${className}`}
      style={{ opacity: 0 }}
    >
      <path
        ref={trailRef}
        fill="none"
        stroke="#3e53a0"
        strokeOpacity={0.5}
        strokeWidth={1.25}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="5 6"
      />
      {/* take-off point */}
      <circle ref={originRef} r={3} fill="#fff" stroke="#c04041" strokeOpacity={0.8} strokeWidth={1.25} />
      {/* landing pulse */}
      <circle ref={pulseRef} r={4} fill="none" stroke="#3e53a0" strokeWidth={1.5} style={{ opacity: 0 }} />
      <g ref={planeRef} style={{ filter: "drop-shadow(0 3px 4px rgba(30,41,90,0.28))" }}>
        <path d={PLANE_PATH} fill="#3e53a0" stroke="#fff" strokeWidth={0.9} strokeLinejoin="round" />
      </g>
      {/* "Your next stop · Canada" banner */}
      <g ref={bannerRef} style={{ filter: "drop-shadow(0 6px 10px rgba(30,41,90,0.14))" }}>
        <rect ref={bannerBgRef} x={0} y={0} height={26} rx={13} fill="#fff" stroke="#3e53a0" strokeOpacity={0.18} />
        <circle cx={12} cy={13} r={3} fill="#c04041" />
        <text ref={bannerTextRef} x={20} y={17} fontSize={11} fontFamily="Poppins, sans-serif" fill="#64748b">
          Your next stop ·{" "}
          <tspan ref={bannerPlaceRef} fill="#3e53a0" fontWeight={600} />
        </text>
      </g>
    </svg>
  );
}
