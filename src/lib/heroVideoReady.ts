/**
 * Lets the Preloader wait for the hero background video, so the page is
 * revealed with the video already able to play smoothly instead of stalling
 * right after the loading screen. Resolves once; later calls are no-ops.
 */
let resolveReady: () => void = () => {};

export const heroVideoReady = new Promise<void>((resolve) => {
  resolveReady = resolve;
});

export const markHeroVideoReady = () => resolveReady();
