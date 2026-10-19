import type { QueryClient } from "@tanstack/react-query";
import { whenReady } from "@/lib/preloader";

/** Never hold the visitor longer than this, whatever is still loading. */
const MAX_WAIT_MS = 12000;
/** How long the API-driven sections get to load their data. */
const API_WAIT_MS = 3000;
/** How long the reveal waits on the page's images once the page has rendered. */
const IMAGE_WAIT_MS = 3000;

const nextFrame = () => new Promise<void>((r) => requestAnimationFrame(() => r()));
const sleep = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));

/** Resolves once no react-query request is in flight. */
function whenQueriesIdle(client: QueryClient): Promise<void> {
  return new Promise((resolve) => {
    let unsubscribe = () => {};
    const check = () => {
      if (client.isFetching() > 0) return;
      unsubscribe();
      resolve();
    };
    unsubscribe = client.getQueryCache().subscribe(check);
    check();
  });
}

/** Download + decode an image so it paints instantly once it is on screen. */
export function preloadImage(src: string): Promise<void> {
  return new Promise((resolve) => {
    const img = new Image();
    img.decoding = "async";
    img.onload = () => {
      // decode() can reject for odd formats; the bytes are cached either way
      (img.decode ? img.decode() : Promise.resolve()).catch(() => {}).then(() => resolve());
    };
    img.onerror = () => resolve();
    img.src = src;
  });
}

/**
 * Every image the rendered page will show: <img> tags (including lazy ones
 * that would otherwise wait until scrolled to) and inline background images.
 */
function collectPageImages(): string[] {
  const urls = new Set<string>();
  const root = document.getElementById("root");
  if (!root) return [];

  root.querySelectorAll("img").forEach((img) => {
    const src = img.currentSrc || img.getAttribute("src");
    if (src && !src.startsWith("data:")) urls.add(src);
  });
  root.querySelectorAll<HTMLElement>("[style*='url(']").forEach((el) => {
    for (const m of el.style.backgroundImage.matchAll(/url\(["']?([^"')]+)["']?\)/g)) {
      if (!m[1].startsWith("data:")) urls.add(m[1]);
    }
  });
  return [...urls];
}

/**
 * Resolves once the current page is fully rendered and its assets are ready
 * (or MAX_WAIT_MS passes). `onProgress` gets 0…1 as tasks complete; the task
 * list grows once the page's images are discovered, so smooth it on display.
 */
export function waitForPageAssets(
  extra: Promise<unknown>[],
  onProgress: (p: number) => void,
  queryClient: QueryClient,
): Promise<void> {
  const isLanding = window.location.pathname === "/";
  let total = 0;
  let done = 0;

  const track = (p: Promise<unknown>, weight = 1) => {
    total += weight;
    return p
      .catch(() => {})
      .then(() => {
        done += weight;
        onProgress(done / total);
      });
  };

  // Starts loading every image on the page not already queued.
  const queued = new Set<string>();
  const preloadNewImages = () =>
    Promise.all(
      collectPageImages()
        .filter((src) => !queued.has(src) && queued.add(src))
        .map((src) => track(preloadImage(src))),
    );

  // Images keep loading in the background regardless; the reveal only waits
  // IMAGE_WAIT_MS for them, so a slow device or connection isn't held back
  // by pictures far below the fold.
  const capped = (p: Promise<unknown>) => Promise.race([p, sleep(IMAGE_WAIT_MS)]);

  // Deliberately not waiting on window "load": the third-party chat widget
  // holds it back for seconds without affecting anything on the page.
  const tasks: Promise<unknown>[] = [
    ...extra.map((p) => track(p)),
    track(document.fonts?.ready ?? Promise.resolve()),
    track(whenReady("route"), 2),
  ];

  if (isLanding) {
    // The hero video is the heaviest thing on the page — weight it accordingly.
    tasks.push(track(whenReady("heroVideo"), 8));
    tasks.push(
      track(
        whenReady("sections")
          .then(nextFrame)
          .then(() =>
            capped(
              Promise.all([
                // what's on the page already starts right away…
                preloadNewImages(),
                // …while the API-driven sections (testimonials, calendar) fill in;
                // their images join once the data lands, or after API_WAIT_MS
                Promise.race([whenQueriesIdle(queryClient), sleep(API_WAIT_MS)])
                  .then(nextFrame)
                  .then(nextFrame)
                  .then(preloadNewImages),
              ]),
            ),
          ),
        2,
      ),
    );
  } else {
    tasks.push(
      track(
        whenReady("route")
          .then(nextFrame)
          .then(() => capped(preloadNewImages())),
      ),
    );
  }

  return Promise.race([Promise.all(tasks).then(() => {}), sleep(MAX_WAIT_MS)]);
}
