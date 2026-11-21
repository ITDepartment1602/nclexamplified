"use client";

import { useEffect, useRef, useCallback } from "react";
import createGlobe from "cobe";
import { isLiteDevice } from "@/lib/device";
import { whenPreloaderDone } from "@/lib/preloader";

interface CdnMarker {
  id: string;
  location: [number, number];
  region: string;
}

interface CdnArc {
  id: string;
  from: [number, number];
  to: [number, number];
}

interface GlobeCdnProps {
  markers?: CdnMarker[];
  arcs?: CdnArc[];
  className?: string;
  /** idle spin speed (rad/frame) — used only when there is no `focus` */
  speed?: number;
  /**
   * Turn the globe to face this point (smoothly, along the shortest way
   * round) instead of spinning. Changing it "flies" to the new place.
   */
  focus?: { lat: number; lon: number } | null;
  /**
   * Degrees to sit the focused point above the centre of the sphere — for
   * layouts that crop the lower half of the globe.
   */
  focusLift?: number;
  /** marker whose label is highlighted (e.g. the destination being shown) */
  activeId?: string;
}

// No flag emoji here: Windows has no flag glyphs and renders them as bare
// letters ("PH"), so the label shows the region name only.
const defaultMarkers: CdnMarker[] = [
  { id: "cdn-philippines", location: [12.8797, 121.774], region: "Philippines" },
  { id: "cdn-usa", location: [40.7128, -74.006], region: "New York" },
  { id: "cdn-canada", location: [49.2827, -123.1207], region: "Canada" },
  { id: "cdn-australia", location: [-33.8688, 151.2093], region: "Australia" },
  { id: "cdn-uae", location: [25.2048, 55.2708], region: "UAE" },
  { id: "cdn-uk", location: [51.5074, -0.1278], region: "United Kingdom" },
  { id: "cdn-saudiarabia", location: [24.7136, 46.6753], region: "Saudi Arabia" },
];

// brand colours as 0–1 RGB for WebGL
const BRAND_BLUE: [number, number, number] = [0.243, 0.325, 0.627]; // #3e53a0
const BRAND_RED: [number, number, number] = [0.753, 0.251, 0.255]; // #c04041

const defaultArcs: CdnArc[] = [
  { id: "cdn-arc-1", from: [12.8797, 121.774], to: [40.7128, -74.006] },
  { id: "cdn-arc-2", from: [12.8797, 121.774], to: [49.2827, -123.1207] },
  { id: "cdn-arc-3", from: [12.8797, 121.774], to: [-33.8688, 151.2093] },
  { id: "cdn-arc-4", from: [12.8797, 121.774], to: [25.2048, 55.2708] },
  { id: "cdn-arc-6", from: [12.8797, 121.774], to: [51.5074, -0.1278] },
  { id: "cdn-arc-8", from: [12.8797, 121.774], to: [24.7136, 46.6753] },
];

export function GlobeCdn({
  markers = defaultMarkers,
  arcs = defaultArcs,
  className = "",
  speed = 0.003,
  focus = null,
  focusLift = 0,
  activeId,
}: GlobeCdnProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<{ x: number; y: number } | null>(null);
  const dragOffset = useRef({ phi: 0, theta: 0 });
  const phiOffsetRef = useRef(0);
  const thetaOffsetRef = useRef(0);
  const isPausedRef = useRef(false);
  // read by the rAF loop, so changing focus never re-creates the WebGL globe
  const focusRef = useRef(focus);
  const focusLiftRef = useRef(focusLift);
  focusRef.current = focus;
  focusLiftRef.current = focusLift;

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    pointerInteracting.current = { x: e.clientX, y: e.clientY };
    if (canvasRef.current) canvasRef.current.style.cursor = "grabbing";
    isPausedRef.current = true;
  }, []);

  const handlePointerUp = useCallback(() => {
    if (pointerInteracting.current !== null) {
      phiOffsetRef.current += dragOffset.current.phi;
      thetaOffsetRef.current += dragOffset.current.theta;
      dragOffset.current = { phi: 0, theta: 0 };
    }
    pointerInteracting.current = null;
    if (canvasRef.current) canvasRef.current.style.cursor = "grab";
    isPausedRef.current = false;
  }, []);

  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      if (pointerInteracting.current !== null) {
        dragOffset.current = {
          phi: (e.clientX - pointerInteracting.current.x) / 300,
          theta: (e.clientY - pointerInteracting.current.y) / 1000,
        };
      }
    };
    window.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });
    window.addEventListener("pointerup", handlePointerUp, { passive: true });
    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
    };
  }, [handlePointerUp]);

  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    // Lite devices render at 1x and ~30fps — still smooth for a slow spin
    const minFrameMs = isLiteDevice ? 32 : 0;
    let globe: ReturnType<typeof createGlobe> | null = null;
    let animationId: number | null = null;
    let isOnScreen = true;
    // cobe's angles for "this location faces the viewer"
    const toAngles = (f: { lat: number; lon: number }): [number, number] => [
      Math.PI * 1.5 - (f.lon * Math.PI) / 180,
      Math.max(-1.2, Math.min(1.2, ((f.lat - focusLiftRef.current) * Math.PI) / 180)),
    ];
    const first = focusRef.current;
    let [phi, theta] = first ? toAngles(first) : [0, 0.2];
    let lastFrame = 0;

    function init() {
      const width = canvas.offsetWidth;
      if (width === 0 || globe) return;

      globe = createGlobe(canvas, {
        devicePixelRatio: isLiteDevice ? 1 : Math.min(window.devicePixelRatio || 1, isMobile ? 1.5 : 2),
        width,
        height: width,
        phi,
        theta,
        dark: 0,
        diffuse: 1.2,
        mapSamples: isLiteDevice ? 6000 : isMobile ? 8000 : 16000,
        mapBrightness: 8,
        mapBaseBrightness: 0.04,
        baseColor: [1, 1, 1],
        markerColor: BRAND_BLUE,
        glowColor: [0.88, 0.91, 1],
        markerElevation: 0.02,
        markers: markers.map((m) => {
          const isOrigin = m.id === "cdn-philippines";
          return {
            location: m.location,
            size: isOrigin ? 0.05 : 0.03,
            color: isOrigin ? BRAND_RED : BRAND_BLUE,
            id: m.id,
          };
        }),
        arcs: arcs.map((a) => ({ from: a.from, to: a.to, id: a.id })),
        // pale, so the plane's dashed flight path is what the eye follows
        arcColor: [0.72, 0.77, 0.93],
        arcWidth: 0.6,
        arcHeight: 0.28,
        opacity: 0.85,
      });

      animate();
      setTimeout(() => canvas && (canvas.style.opacity = "1"));
    }

    // The rAF loop, kept outside init() so the IntersectionObserver can
    // restart it after it stops itself while off-screen.
    function animate(now: number = performance.now()) {
      if (!isOnScreen) {
        animationId = null;
        return;
      }
      animationId = requestAnimationFrame(animate);
      const elapsed = now - lastFrame;
      if (elapsed < minFrameMs) return;
      // spin by time, not by frame, so 30/60/120Hz all turn at the same speed
      const frames = lastFrame ? Math.min(elapsed, 100) / (1000 / 60) : 1;
      lastFrame = now;
      const target = focusRef.current;
      if (target) {
        // ease toward the focused place; wrap phi so it takes the short way round
        const [tp, tt] = toAngles(target);
        const k = 1 - Math.pow(1 - 0.045, frames);
        const dp = ((((tp - phi + Math.PI) % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI)) - Math.PI;
        phi += dp * k;
        theta += (tt - theta) * k;
        // after a drag, drift back so the tour stays in charge
        if (!isPausedRef.current) {
          const d = Math.pow(1 - 0.03, frames);
          phiOffsetRef.current *= d;
          thetaOffsetRef.current *= d;
        }
      } else if (!isPausedRef.current) {
        phi += speed * frames;
      }
      globe?.update({
        phi: phi + phiOffsetRef.current + dragOffset.current.phi,
        theta: theta + thetaOffsetRef.current + dragOffset.current.theta,
      });
    }

    // Only render while the globe is actually scrolled into view — a WebGL
    // canvas re-rendering 60x/sec off-screen is a top cause of mobile jank.
    const io = new IntersectionObserver(
      ([entry]) => {
        isOnScreen = entry.isIntersecting;
        if (isOnScreen && animationId === null && globe) {
          lastFrame = 0; // don't count the time spent off-screen as spin
          animate();
        }
      },
      { threshold: 0.01 },
    );
    io.observe(canvas);

    let ro: ResizeObserver | null = null;
    function start() {
      if (cancelled || started) return;
      started = true;
      near.disconnect();
      if (canvas.offsetWidth > 0) {
        init();
      } else {
        ro = new ResizeObserver((entries) => {
          if (entries[0]?.contentRect.width > 0) {
            ro?.disconnect();
            init();
          }
        });
        ro.observe(canvas);
      }
    }

    // WebGL setup is one of the heaviest things on the page, and the globe is
    // far below the fold — so it waits until the preloader is gone and the
    // browser is idle, or until it's about to scroll into view, whichever is first.
    let cancelled = false;
    let started = false;
    let idleId: number | undefined;
    const near = new IntersectionObserver(([entry]) => entry.isIntersecting && start(), {
      rootMargin: "400px",
    });
    near.observe(canvas);
    whenPreloaderDone().then(() => {
      if (cancelled) return;
      idleId = window.requestIdleCallback
        ? window.requestIdleCallback(start, { timeout: 1500 })
        : window.setTimeout(start, 300);
    });

    return () => {
      cancelled = true;
      if (idleId !== undefined) {
        if (window.cancelIdleCallback) window.cancelIdleCallback(idleId);
        else clearTimeout(idleId);
      }
      near.disconnect();
      ro?.disconnect();
      io.disconnect();
      if (animationId) cancelAnimationFrame(animationId);
      if (globe) globe.destroy();
    };
  }, [markers, arcs, speed]);


  return (
    <div className={`relative aspect-square select-none ${className}`}>
      <canvas
        ref={canvasRef}
        onPointerDown={handlePointerDown}
        style={{
          width: "100%",
          height: "100%",
          cursor: "grab",
          opacity: 0,
          transition: "opacity 1.2s ease",
          borderRadius: "50%",
          touchAction: "none",
        }}
      />
      {markers.map((m) => {
        const isPhilippines = m.id === "cdn-philippines";
        const isActive = m.id === activeId;
        const filled = isPhilippines || isActive;
        return (
          <div
            key={m.id}
            style={{
              position: "absolute",
              // @ts-expect-error CSS Anchor Positioning
              positionAnchor: `--cobe-${m.id}`,
              bottom: "anchor(top)",
              left: "anchor(center)",
              translate: "-50% 0",
              display: "flex",
              flexDirection: "column" as const,
              alignItems: "center",
              gap: 6,
              pointerEvents: "none" as const,
              opacity: `var(--cobe-visible-${m.id}, 0)`,
              filter: `blur(calc((1 - var(--cobe-visible-${m.id}, 0)) * 8px))`,
              transition: "opacity 0.3s, filter 0.3s",
              zIndex: isActive ? 2 : 1,
            }}
          >
            <span
              style={{
                fontSize: filled ? "0.7rem" : "0.62rem",
                fontWeight: 500,
                lineHeight: 1,
                color: filled ? "#fff" : "#1e293b",
                background: isPhilippines
                  ? "linear-gradient(135deg, #d24a4b, #a8302f)"
                  : isActive
                    ? "linear-gradient(135deg, #4a60b4, #3e53a0)"
                    : "rgba(255,255,255,0.95)",
                border: filled ? "none" : "1px solid rgba(62,83,160,0.18)",
                padding: filled ? "6px 10px" : "4px 8px",
                borderRadius: 999,
                whiteSpace: "nowrap" as const,
                boxShadow: isPhilippines
                  ? "0 6px 16px -4px rgba(192,64,65,0.6)"
                  : isActive
                    ? "0 6px 16px -4px rgba(62,83,160,0.6)"
                    : "0 4px 12px -4px rgba(15,23,42,0.18)",
                transition: "background 0.3s, color 0.3s, padding 0.3s, font-size 0.3s",
                display: "flex",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: 999,
                  background: filled ? "#fff" : "#3e53a0",
                  boxShadow: filled
                    ? "0 0 0 2px rgba(255,255,255,0.3)"
                    : "0 0 0 2px rgba(62,83,160,0.15)",
                }}
              />
              {isPhilippines ? `${m.region} · HQ` : m.region}
            </span>
          </div>
        );
      })}
    </div>
  );
}