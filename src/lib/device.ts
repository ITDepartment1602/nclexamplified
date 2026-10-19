/**
 * "Lite" devices get the same page with the most expensive effects turned
 * off (backdrop blur, looping decorative animations, full-rate WebGL):
 * low core count or memory, data saver, or a reduced-motion preference.
 * main.tsx puts a `lite` class on <html> so CSS can react to it too.
 */
type NavigatorHints = Navigator & {
  deviceMemory?: number;
  connection?: { saveData?: boolean };
};

function detectLite(): boolean {
  if (typeof window === "undefined") return false;
  const nav = navigator as NavigatorHints;
  return (
    (nav.hardwareConcurrency !== undefined && nav.hardwareConcurrency <= 4) ||
    (nav.deviceMemory !== undefined && nav.deviceMemory <= 4) ||
    nav.connection?.saveData === true ||
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export const isLiteDevice = detectLite();
