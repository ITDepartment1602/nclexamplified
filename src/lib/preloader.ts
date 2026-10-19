import { useEffect, useSyncExternalStore } from "react";

/**
 * Shared state between the first-load preloader and the page underneath it.
 *
 *   loading   → overlay is up, page renders + loads assets behind it
 *   revealing → overlay is opening; time for the page's entrance animations
 *   done      → overlay is gone
 */
export type PreloaderPhase = "loading" | "revealing" | "done";

let phase: PreloaderPhase = "loading";
const listeners = new Set<() => void>();

export function setPreloaderPhase(next: PreloaderPhase) {
  if (next === phase) return;
  phase = next;
  listeners.forEach((l) => l());
}

const subscribe = (l: () => void) => {
  listeners.add(l);
  return () => listeners.delete(l);
};
const getPhase = () => phase;

export function usePreloaderPhase() {
  return useSyncExternalStore(subscribe, getPhase, getPhase);
}

/** True once the page is being revealed — gate entrance animations on this. */
export function usePageRevealed() {
  return usePreloaderPhase() !== "loading";
}

/* ─── readiness signals ───
 * Components fire these so the preloader knows what has actually rendered:
 *   route     — the lazy page for the current URL has mounted
 *   sections  — every lazy landing-page section has mounted
 *   heroVideo — the hero background video can play through
 */
type Signal = "route" | "sections" | "heroVideo";

const signals = {} as Record<Signal, { promise: Promise<void>; resolve: () => void }>;
for (const name of ["route", "sections", "heroVideo"] as Signal[]) {
  let resolve!: () => void;
  const promise = new Promise<void>((r) => (resolve = r));
  signals[name] = { promise, resolve };
}

export function signalReady(name: Signal) {
  signals[name].resolve();
}

export function whenReady(name: Signal) {
  return signals[name].promise;
}

/**
 * Renders nothing; fires `name` once it mounts. Put it last inside a
 * <Suspense> boundary — it only mounts after every lazy sibling has resolved.
 */
export function ReadySignal({ name }: { name: Signal }) {
  useEffect(() => signalReady(name), [name]);
  return null;
}
