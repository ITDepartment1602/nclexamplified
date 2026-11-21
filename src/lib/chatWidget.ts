/**
 * The JotForm AI chat launcher ("Bianca"). Its script is heavy — seconds of
 * JavaScript on a low-end phone — so it is injected only once the preloader is
 * gone and the browser is idle, instead of competing with the page load.
 */
const SRC =
  "https://cdn.jotfor.ms/agent/embedjs/0198066199a072e19545b9bec03425cce5dd/embed.js?skipWelcome=1&maximizable=1";

const MOBILE = "(max-width: 768px)";

let requested = false;

/*
 * The agent is set (in JotForm) to open its chat by itself a few seconds after
 * load. On a phone that full-screen panel covers the whole page, and the
 * setting can't be turned off from the embed URL — so on mobile we close any
 * open that the visitor didn't ask for. Opening it by tapping Bianca still
 * works as normal. `html.bianca-user` marks that the visitor has tapped her;
 * index.css hides the unrequested panel until then so it never flashes.
 */
function keepClosedOnMobileUntilTapped() {
  if (!window.matchMedia(MOBILE).matches) return;
  const root = document.documentElement;

  const markUser = (e: Event) => {
    const t = e.target as Element | null;
    if (t?.closest?.(".ai-agent-chat-avatar-container")) root.classList.add("bianca-user");
  };
  document.addEventListener("pointerdown", markUser, true);

  const closeIfUnrequested = () => {
    if (root.classList.contains("bianca-user")) return;
    const box = document.querySelector(".embedded-agent-container");
    if (!box?.classList.contains("opened")) return;
    // the avatar toggles the chat — a programmatic click closes it
    document.querySelector<HTMLElement>(".ai-agent-chat-avatar")?.click();
  };

  const mo = new MutationObserver(closeIfUnrequested);
  mo.observe(document.body, { subtree: true, attributes: true, attributeFilter: ["class"], childList: true });
  // the auto-open only happens shortly after load; stop watching after a while
  window.setTimeout(() => mo.disconnect(), 60_000);
}

export function loadChatWidgetWhenIdle() {
  if (requested) return;
  requested = true;

  const inject = () => {
    keepClosedOnMobileUntilTapped();
    const script = document.createElement("script");
    script.src = SRC;
    script.async = true;
    document.body.appendChild(script);
  };

  if (window.requestIdleCallback) window.requestIdleCallback(inject, { timeout: 3000 });
  else window.setTimeout(inject, 1000);
}
