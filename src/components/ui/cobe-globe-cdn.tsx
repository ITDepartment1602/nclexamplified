"use client";

import { useEffect, useRef, useCallback, useState } from "react";
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
  speed?: number;
}

const defaultMarkers: CdnMarker[] = [
  {
    id: "cdn-philippines",
    location: [12.8797, 121.774],
    region: "🇵🇭 Philippines",
  },
  { id: "cdn-usa", location: [40.7128, -74.006], region: "🇺🇸 New York" },
  { id: "cdn-canada", location: [43.6629, -79.3957], region: "🇨🇦 Canada" },
  {
    id: "cdn-australia",
    location: [-33.8688, 151.2093],
    region: "🇦🇺 Australia",
  },
  { id: "cdn-uae", location: [25.2048, 55.2708], region: "🇦🇪 UAE" },
  { id: "cdn-uk", location: [51.5074, -0.1278], region: "🇬🇧 United Kingdom" },
  {
    id: "cdn-saudiarabia",
    location: [24.7136, 46.6753],
    region: "🇸🇦 Saudi Arabia",
  },
];

const defaultArcs: CdnArc[] = [
  { id: "cdn-arc-1", from: [12.8797, 121.774], to: [40.7128, -74.006] },
  { id: "cdn-arc-2", from: [12.8797, 121.774], to: [43.6629, -79.3957] },
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
}: GlobeCdnProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<{ x: number; y: number } | null>(null);
  const dragOffset = useRef({ phi: 0, theta: 0 });
  const phiOffsetRef = useRef(0);
  const thetaOffsetRef = useRef(0);
  const isPausedRef = useRef(false);

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
    let phi = 0;
    let lastFrame = 0;

    function init() {
      const width = canvas.offsetWidth;
      if (width === 0 || globe) return;

      globe = createGlobe(canvas, {
        devicePixelRatio: isLiteDevice ? 1 : Math.min(window.devicePixelRatio || 1, isMobile ? 1.5 : 2),
        width,
        height: width,
        phi: 0,
        theta: 0.2,
        dark: 0,
        diffuse: 1.5,
        mapSamples: isLiteDevice ? 6000 : isMobile ? 8000 : 16000,
        mapBrightness: 10,
        baseColor: [0.97, 0.98, 1],
        markerColor: [0.0157, 0.1804, 0.3765],
        glowColor: [1, 1, 1],
        markerElevation: 0.02,
        markers: markers.map((m) => ({
          location: m.location,
          size: m.id === "cdn-philippines" ? 0.016 : 0.012,
          id: m.id,
        })),
        arcs: arcs.map((a) => ({ from: a.from, to: a.to, id: a.id })),
        arcColor: [0, 0, 0],
        arcWidth: 0.5,
        arcHeight: 0.25,
        opacity: 0.7,
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
      if (!isPausedRef.current) phi += speed * frames;
      globe?.update({
        phi: phi + phiOffsetRef.current + dragOffset.current.phi,
        theta: 0.2 + thetaOffsetRef.current + dragOffset.current.theta,
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
            }}
          >
            <span
              style={{
                fontFamily: "monospace",
                fontSize: isPhilippines ? "0.72rem" : "0.55rem",
                fontWeight: isPhilippines ? 700 : 500,
                color: "#fff",
                background: "#042E60",
                padding: isPhilippines ? "4px 8px" : "2px 6px",
                borderRadius: 4,
                letterSpacing: "0.05em",
                whiteSpace: "nowrap" as const,
                boxShadow: "0 2px 8px rgba(0,0,0,0.28)",
                display: "flex",
                alignItems: "center",
                gap: "4px",
              }}
            >
              {isPhilippines ? "📍" : ""}
              {m.region}
            </span>
          </div>
        );
      })}
    </div>
  );
}