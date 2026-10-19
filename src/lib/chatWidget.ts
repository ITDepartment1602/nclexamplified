/**
 * The JotForm AI chat launcher ("Bianca"). Its script is heavy — seconds of
 * JavaScript on a low-end phone — so it is injected only once the preloader is
 * gone and the browser is idle, instead of competing with the page load.
 */
const SRC =
  "https://cdn.jotfor.ms/agent/embedjs/0198066199a072e19545b9bec03425cce5dd/embed.js?skipWelcome=1&maximizable=1";

let requested = false;

export function loadChatWidgetWhenIdle() {
  if (requested) return;
  requested = true;

  const inject = () => {
    const script = document.createElement("script");
    script.src = SRC;
    script.async = true;
    document.body.appendChild(script);
  };

  if (window.requestIdleCallback) window.requestIdleCallback(inject, { timeout: 3000 });
  else window.setTimeout(inject, 1000);
}
