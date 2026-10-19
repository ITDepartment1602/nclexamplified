
import React, { useEffect, useState } from "react";
import { heroVideoReady } from "@/lib/heroVideoReady";

const fullText = "NCLEX Amplified";
const TYPING_MS = 150;
// Long enough for the name to finish typing.
const MIN_MS = (fullText.length + 1) * TYPING_MS + 200;
// Never hold a slow connection hostage — the hero poster covers the rest.
const MAX_MS = 5000;
const FADE_MS = 400;

const wait = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms));

const Preloader: React.FC = () => {
  const [phase, setPhase] = useState<"loading" | "ready" | "fading" | "done">("loading");
  const [text, setText] = useState("");
  const [barStarted, setBarStarted] = useState(false);

  useEffect(() => {
    let cancelled = false;

    // Start the bar from 0 on the next frame so its width transition actually runs.
    const frame = requestAnimationFrame(() => setBarStarted(true));

    // On the home page, keep the loading screen up while the hero video buffers.
    const pageReady = window.location.pathname === "/" ? heroVideoReady : Promise.resolve();

    Promise.race([Promise.all([wait(MIN_MS), pageReady]), wait(MAX_MS)])
      .then(() => {
        if (cancelled) return;
        setPhase("ready");
        return wait(250);
      })
      .then(() => {
        if (cancelled) return;
        setPhase("fading");
        return wait(FADE_MS);
      })
      .then(() => {
        if (!cancelled) setPhase("done");
      });

    // Text typing animation
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, TYPING_MS);

    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
      clearInterval(typingInterval);
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div
      className="fixed inset-0 bg-white z-[9999] flex items-center justify-center transition-opacity ease-out"
      style={{ opacity: phase === "fading" ? 0 : 1, transitionDuration: `${FADE_MS}ms` }}
    >
      <div className="flex flex-col items-center">
        <div className="text-3xl font-bold mb-4 font-sans">
          <span className="text-nclex-blue">
            {text.substring(0, 5)}
          </span>
          <span className="text-nclex-red">
            {text.substring(5)}
          </span>
        </div>
        <div className="w-40 h-1.5 bg-gray-200 rounded-full overflow-hidden">
          {/* Eases toward 90% while loading, then completes once the page is ready. */}
          <div
            className="h-full bg-nclex-blue rounded-full"
            style={
              phase === "loading"
                ? { width: barStarted ? "90%" : "0%", transition: `width ${MAX_MS}ms cubic-bezier(0.1, 0.7, 0.3, 1)` }
                : { width: "100%", transition: "width 250ms ease-out" }
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Preloader;
