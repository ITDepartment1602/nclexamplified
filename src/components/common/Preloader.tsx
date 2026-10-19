import React, { useEffect, useRef, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { setPreloaderPhase } from "@/lib/preloader";
import { loadChatWidgetWhenIdle } from "@/lib/chatWidget";
import { createScene } from "./preloader/scene";
import { preloadImage, waitForPageAssets } from "./preloader/assets";
import "./preloader/preloader.css";

const LOGO_SRC = "/images/logo-loader.webp";

/**
 * First-load preloader: a cluster of nursing-tool icons merges into the NCLEX
 * Amplified emblem, then an iris opens onto the page. The page renders and
 * loads its assets (hero video, images, lazy sections) underneath the whole
 * time — the merge only starts once they're ready.
 */
const Preloader: React.FC = () => {
  const [mounted, setMounted] = useState(true);
  const queryClient = useQueryClient();
  const rootRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const shineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const html = document.documentElement;
    html.classList.add("preloading");

    // The scrollbar stays visible during loading (so the layout doesn't jump
    // when the page is revealed); scrolling itself is blocked instead.
    const SCROLL_KEYS = new Set([" ", "PageUp", "PageDown", "Home", "End", "ArrowUp", "ArrowDown"]);
    const block = (e: Event) => e.preventDefault();
    const blockKeys = (e: KeyboardEvent) => {
      if (SCROLL_KEYS.has(e.key)) e.preventDefault();
    };
    const pinTop = () => {
      if (window.scrollY !== 0) window.scrollTo(0, 0); // e.g. dragging the scrollbar
    };
    window.addEventListener("wheel", block, { passive: false });
    window.addEventListener("touchmove", block, { passive: false });
    window.addEventListener("keydown", blockKeys);
    window.addEventListener("scroll", pinTop);
    const unlockScroll = () => {
      window.removeEventListener("wheel", block);
      window.removeEventListener("touchmove", block);
      window.removeEventListener("keydown", blockKeys);
      window.removeEventListener("scroll", pinTop);
    };

    const scene = createScene(
      {
        root: rootRef.current!,
        canvas: canvasRef.current!,
        logo: logoRef.current!,
        shine: shineRef.current!,
      },
      {
        reducedMotion: window.matchMedia("(prefers-reduced-motion: reduce)").matches,
        onReveal: () => {
          unlockScroll();
          html.classList.remove("preloading");
          setPreloaderPhase("revealing");
        },
        onDone: () => {
          setPreloaderPhase("done");
          loadChatWidgetWhenIdle();
          setMounted(false);
        },
      },
    );

    let cancelled = false;
    waitForPageAssets([preloadImage(LOGO_SRC)], (p) => scene.setProgress(p), queryClient).then(() => {
      if (!cancelled) scene.finish();
    });

    return () => {
      cancelled = true;
      scene.destroy();
      unlockScroll();
      html.classList.remove("preloading");
    };
  }, [queryClient]);

  if (!mounted) return null;

  return (
    <div ref={rootRef} className="narc-preloader" role="status" aria-label="Loading NCLEX Amplified">
      <canvas ref={canvasRef} className="narc-preloader__canvas" aria-hidden="true" />

      <div ref={logoRef} className="narc-preloader__logo">
        <img src={LOGO_SRC} alt="NCLEX Amplified Review Center" draggable={false} />
        <div ref={shineRef} className="narc-preloader__shine" />
      </div>

    </div>
  );
};

export default Preloader;
