import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useInView } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Facebook,
  GraduationCap,
  Hand,
  RotateCcw,
  Trophy,
} from "lucide-react";

/*
 * "Featured USRNs" — the same passers, in the same flip-card design, as the
 * student dashboard (nclex/includes/dashboard_hero.php + css/dashboard-hero.css
 * in the dashboard project). IT manages the list in Admin IT → Manage Landing
 * Page → "Featured USRNs".
 *
 * Data, in order of preference:
 *   1. the Featured USRNs feed (featured_api.php — read-only, public);
 *   2. the landing testimonials feed (public_api.php), if (1) isn't deployed;
 *   3. a small built-in list, if neither answers.
 */
const DASH = "https://app.nclexamplifiedreviewcenter.com/nclex/admin-it/manage_testimonials";
const FEATURED_API = import.meta.env.VITE_FEATURED_USRNS_API || `${DASH}/featured_api.php`;
const TESTIMONIALS_API = import.meta.env.VITE_TESTIMONIALS_API || `${DASH}/public_api.php`;

interface Passer {
  id: string | number;
  name: string;
  role: string;
  content: string;
  photo: string;
  /** link to the post on the official Facebook page (or another http(s) page) */
  link: string;
  isNew: boolean;
}

const FALLBACK: Passer[] = [
  {
    id: "f1",
    name: "Mikaela Ligacion, CDRN",
    role: "Passed NCLEX 2025",
    content:
      "A special thank you to NCLEX Amplified for providing comprehensive and effective review materials. Your resources were instrumental in my preparation, and I truly believe they played a significant role in my success.",
    photo: "/lovable-uploads/10a61823-e49c-4e4b-8380-798b96419b48.png",
    link: "",
    isNew: false,
  },
  {
    id: "f2",
    name: "Ruark Lim Ritardo, USRN",
    role: "Passed NCLEX 2025",
    content:
      "I can't thank NCLEX Amplified Review Center enough for helping me pass the NCLEX! Their content was exactly what I needed - clear, focused, and incredibly effective.",
    photo: "/lovable-uploads/43e3ca09-5df1-44b1-b654-26b2b96675ee.png",
    link: "",
    isNew: false,
  },
  {
    id: "f3",
    name: "Krystle Kay L. Almoete, USRN",
    role: "Passed NCLEX 2025",
    content:
      "I want to extend my heartfelt gratitude to NCLEX AMPLIFIED for being such an essential part of my NCLEX journey. Your comprehensive review sessions helped me gain the knowledge and test-taking strategies I needed.",
    photo: "/lovable-uploads/ff8b5b12-0727-4776-bd9b-9a8566d45a00.png",
    link: "",
    isNew: false,
  },
];

/** a row as the dashboard APIs send it — fields are checked before use */
type ApiRow = Record<string, unknown>;

const safeLink = (u: unknown) => (typeof u === "string" && /^https?:\/\/[^\s"'<>]+$/i.test(u) ? u : "");

const fetchFeatured = async (): Promise<Passer[]> => {
  const res = await fetch(FEATURED_API, { cache: "no-store" });
  if (!res.ok) throw new Error(`Featured USRNs API responded ${res.status}`);
  const data = await res.json();
  if (!Array.isArray(data.featured)) throw new Error("Featured USRNs API returned no list");
  return data.featured
    .filter((t: ApiRow) => t && t.name && t.content && t.photo)
    .map((t: ApiRow, i: number) => ({
      id: (t.id as string | number | undefined) ?? i,
      name: String(t.name),
      role: String(t.role ?? ""),
      content: String(t.content),
      photo: String(t.photo),
      link: safeLink(t.post_url),
      isNew: !!t.is_new,
    }));
};

const fetchLandingTestimonials = async (): Promise<Passer[]> => {
  const res = await fetch(TESTIMONIALS_API, { cache: "no-store" });
  if (!res.ok) throw new Error(`Testimonials API responded ${res.status}`);
  const data = await res.json();
  if (!Array.isArray(data.testimonials)) throw new Error("Testimonials API returned no list");
  return data.testimonials.map((t: ApiRow) => ({
    id: t.id as string | number,
    name: String(t.name),
    role: String(t.role ?? ""),
    content: String(t.content),
    photo: t.avatar ? String(t.avatar) : "/placeholder.svg",
    link: "",
    isNew: !!t.is_new,
  }));
};

const fetchPassers = async (): Promise<Passer[]> => {
  try {
    return await fetchFeatured();
  } catch {
    return fetchLandingTestimonials();
  }
};

/* cards visible at once: 1 on phones, 2 from 640px, 3 from 1024px (as on the dashboard) */
function usePerView() {
  const get = () =>
    typeof window === "undefined"
      ? 3
      : window.matchMedia("(min-width: 1024px)").matches
        ? 3
        : window.matchMedia("(min-width: 640px)").matches
          ? 2
          : 1;
  const [pv, setPv] = useState(get);
  useEffect(() => {
    const on = () => setPv(get());
    window.addEventListener("resize", on);
    return () => window.removeEventListener("resize", on);
  }, []);
  return pv;
}

/* shrink the message until it fits the card; if it still doesn't, let it scroll */
function FitQuote({ text }: { text: string }) {
  const box = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState(16);
  const [scroll, setScroll] = useState(false);
  useLayoutEffect(() => {
    setSize(16);
    setScroll(false);
  }, [text]);
  useLayoutEffect(() => {
    const el = box.current;
    if (!el || scroll) return;
    if (el.scrollHeight > el.clientHeight + 1) {
      if (size > 13) setSize((s) => s - 1);
      else setScroll(true);
    }
  }, [size, scroll, text]);
  return (
    <div
      ref={box}
      className={`relative min-h-0 flex-1 ${scroll ? "overflow-y-auto overscroll-contain pr-1.5" : "overflow-hidden"}`}
    >
      <blockquote
        className="m-0 whitespace-pre-line leading-[1.625] tracking-[-0.003em] text-slate-700 [overflow-wrap:anywhere]"
        style={{ fontSize: size }}
      >
        {text}
      </blockquote>
    </div>
  );
}

/* ─── flip card: FRONT = the passer photo, BACK = the message ─── */
const FlipCard: React.FC<{
  p: Passer;
  flipped: boolean;
  onFlip: () => void;
  /** a control inside the card got keyboard focus — bring its slide into view */
  onFocusCard: () => void;
}> = ({ p, flipped, onFlip, onFocusCard }) => {
  const face =
    "absolute inset-0 overflow-hidden rounded-[20px] [backface-visibility:hidden] [-webkit-backface-visibility:hidden]";
  const isFb = /(^|\.)(facebook\.com|fb\.com|fb\.watch|fb\.me)$/i.test(
    (() => {
      try {
        return p.link ? new URL(p.link).hostname : "";
      } catch {
        return "";
      }
    })(),
  );

  return (
    <article
      onClick={onFlip}
      onFocus={onFocusCard}
      className="relative aspect-[6/5] cursor-pointer rounded-[20px] [perspective:1800px] max-[380px]:aspect-square"
    >
      <div
        className={`absolute inset-0 transition-transform duration-[850ms] [transform-style:preserve-3d] [transition-timing-function:cubic-bezier(.45,.05,.2,1)] ${
          flipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        {/* FRONT — the whole poster over a blurred copy of itself */}
        <div className={`${face} bg-slate-900`}>
          <span
            aria-hidden
            className="pointer-events-none absolute -inset-[14%] bg-cover bg-center bg-no-repeat [filter:blur(22px)_saturate(1.1)_brightness(.92)]"
            style={{ backgroundImage: `url("${p.photo}")` }}
          />
          <img
            src={p.photo}
            alt={`${p.name}, NCLEX passer`}
            loading="lazy"
            decoding="async"
            className="relative block h-full w-full object-contain"
          />
          {p.isNew && (
            <span
              title="Added in the last 24 hours"
              className="absolute left-3.5 top-3.5 z-[3] inline-flex h-7 items-center gap-[7px] rounded-full border-2 border-white bg-gradient-to-br from-[#F43F5E] to-nclex-red pl-2.5 pr-3 text-[11.5px] font-extrabold tracking-[0.14em] text-white shadow-[0_6px_14px_-6px_rgba(2,6,23,.7)]"
            >
              <span className="relative h-[7px] w-[7px] rounded-full bg-white">
                <span className="absolute inset-0 animate-ping rounded-full bg-white" />
              </span>
              NEW
            </span>
          )}
          {p.link && (
            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              aria-label={`View ${p.name}'s post`}
              className="absolute right-3.5 top-3.5 z-[3] inline-flex h-9 items-center whitespace-nowrap rounded-full bg-white text-[13px] font-bold leading-none text-[#1E3A8A] shadow-[0_6px_16px_-6px_rgba(2,6,23,.6)] focus:outline-none focus-visible:ring-[3px] focus-visible:ring-[#93A5E8]"
            >
              <span className="grid h-9 w-9 place-items-center">
                {isFb ? <Facebook className="h-[15px] w-[15px]" /> : <ExternalLink className="h-[15px] w-[15px]" />}
              </span>
              <span className="-ml-1 pr-3.5">View Post</span>
            </a>
          )}
          {/* keyboard / screen readers: clicking the card turns it */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onFlip();
            }}
            aria-expanded={flipped}
            className="sr-only focus:not-sr-only focus:absolute focus:bottom-3 focus:left-3 focus:z-[3] focus:rounded-full focus:bg-white focus:px-3 focus:py-1.5 focus:text-xs focus:font-semibold focus:text-nclex-blue"
          >
            Read the story of {p.name}
          </button>
        </div>

        {/* BACK — the message, then name and role */}
        <div
          {...(!flipped ? { inert: "" as unknown as boolean } : {})}
          className={`${face} flex flex-col border border-[#E4E8F1] bg-white px-[18px] pb-3.5 pt-[18px] [transform:rotateY(180deg)] sm:px-6 sm:pb-[18px] sm:pt-[22px]`}
        >
          {/* brand line on top + faint wash (as on the dashboard) */}
          <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#F4F6FD] to-transparent" />
          <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-nclex-blue via-[#6366F1] to-nclex-red" />
          <div className="relative mb-2 flex h-9 items-center gap-2.5">
            <span aria-hidden className="h-9 select-none pt-1 font-serif text-[60px] font-bold leading-none text-nclex-blue">
              “
            </span>
            <span className="hidden items-center gap-1.5 rounded-full bg-[#EEF2FF] px-2.5 py-1 text-[11px] font-extrabold uppercase tracking-[0.06em] text-nclex-blue sm:inline-flex">
              <GraduationCap className="h-3.5 w-3.5" />
              Passer&rsquo;s message
            </span>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onFlip();
              }}
              aria-label={`Show the photo of ${p.name}`}
              title="Show photo"
              className="ml-auto grid h-[34px] w-[34px] flex-none place-items-center rounded-full border border-slate-200 bg-white text-slate-600 transition-[background-color,color,border-color,transform] duration-500 hover:-rotate-180 hover:border-nclex-blue hover:bg-nclex-blue hover:text-white focus:outline-none focus-visible:ring-[3px] focus-visible:ring-[#93A5E8]"
            >
              <RotateCcw className="h-[13px] w-[13px]" />
            </button>
          </div>
          <FitQuote text={p.content} />
          <footer className="relative mt-3 flex min-w-0 items-center gap-3 border-t border-[#EEF1F6] pt-3">
            <span className="min-w-0 flex-1">
              <b className="block truncate text-[15px] font-bold leading-[1.3] tracking-[-0.01em] text-slate-900">{p.name}</b>
              {p.role && <span className="mt-0.5 block truncate text-[13px] leading-[1.35] text-slate-500">{p.role}</span>}
            </span>
          </footer>
        </div>
      </div>
    </article>
  );
};

const AUTOPLAY_MS = 6000;

const TestimonialSlider = () => {
  const { data } = useQuery({
    queryKey: ["landing-featured-usrns"],
    queryFn: fetchPassers,
    retry: 1,
    refetchOnWindowFocus: false,
  });
  // Once the dashboard answers, its list is final — even when it is empty.
  const passers = data ?? FALLBACK;

  const pv = usePerView();
  const pages = Math.max(1, passers.length - pv + 1);
  const [idx, setIdx] = useState(0);
  const [flipped, setFlipped] = useState<Set<Passer["id"]>>(new Set());
  const [hover, setHover] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const entered = useInView(sectionRef, { once: true, amount: 0.2 });
  const visible = useInView(sectionRef, { amount: 0.1 });
  const reduced = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    if (idx > pages - 1) setIdx(pages - 1);
  }, [idx, pages]);

  const go = useCallback((i: number) => setIdx(((i % pages) + pages) % pages), [pages]);

  // autoplay pauses off-screen, on hover, and while any card is turned over
  const running = pages > 1 && visible && !hover && flipped.size === 0 && !reduced;
  useEffect(() => {
    if (!running) return;
    const t = window.setTimeout(() => go(idx + 1), AUTOPLAY_MS);
    return () => window.clearTimeout(t);
  }, [running, idx, go]);

  const toggle = (id: Passer["id"]) =>
    setFlipped((s) => {
      const n = new Set(s);
      if (n.has(id)) n.delete(id);
      else n.add(id);
      return n;
    });

  // swipe
  const drag = useRef<{ x: number; y: number } | null>(null);
  const onPointerDown = (e: React.PointerEvent) => (drag.current = { x: e.clientX, y: e.clientY });
  const onPointerUp = (e: React.PointerEvent) => {
    const d = drag.current;
    drag.current = null;
    if (!d) return;
    const dx = e.clientX - d.x;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(e.clientY - d.y)) go(idx + (dx < 0 ? 1 : -1));
  };

  if (!passers.length) return null;

  return (
    <section
      ref={sectionRef}
      aria-labelledby="featured-usrns-title"
      className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-b from-white to-[#F4F6FD] py-14 sm:py-[72px]"
    >
      {/* dotted backdrop faded at the edges + soft indigo glow (as on the dashboard) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(circle at 1px 1px, rgba(62,83,160,.14) 1.2px, transparent 1.7px) 0 0 / 22px 22px",
          maskImage: "radial-gradient(75% 65% at 50% 35%, #000, transparent 78%)",
          WebkitMaskImage: "radial-gradient(75% 65% at 50% 35%, #000, transparent 78%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-[200px] -top-[260px] h-[620px] w-[620px] rounded-full bg-[radial-gradient(closest-side,rgba(99,102,241,.14),transparent)]"
      />

      <div className="container relative z-[1] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-[34px] max-w-[760px] text-center">
          <span className="mb-3.5 inline-flex items-center gap-2 rounded-full border border-[#E0E7FF] bg-white py-1.5 pl-2.5 pr-3.5 text-[11.5px] font-extrabold uppercase tracking-[0.12em] text-[#2C3D7A] shadow-[0_1px_2px_rgba(15,23,42,.05)]">
            <Trophy className="h-3 w-3 text-nclex-red" />
            NCLEX Passers
          </span>
          <h2
            id="featured-usrns-title"
            className="m-0 text-[clamp(1.75rem,3.2vw,2.25rem)] font-extrabold leading-[1.15] tracking-[-0.03em] text-slate-900"
          >
            Featured{" "}
            <em className="bg-[linear-gradient(transparent_66%,#FDE68A_66%)] px-0.5 not-italic text-nclex-blue">USRNs</em>
          </h2>
          <p className="mx-auto mt-2.5 text-[clamp(1.125rem,2.2vw,1.375rem)] font-bold text-slate-600">
            Let&rsquo;s congratulate our newest passers!
          </p>
          <span className="mt-3.5 inline-flex items-center gap-[7px] rounded-full bg-[#EEF2FF] px-[13px] py-1.5 text-[12.5px] font-bold text-nclex-blue">
            <Hand className="h-3 w-3 motion-safe:animate-[tap_2.4s_ease-in-out_infinite]" />
            Tap a card to read their message
          </span>
        </div>

        {/* slider */}
        <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
          <div
            className="-my-5 touch-pan-y overflow-hidden py-5"
            // the browser scrolls a clipped box to show a focused element; the
            // slider moves by transform only, so undo any such scroll
            onScroll={(e) => {
              e.currentTarget.scrollLeft = 0;
            }}
            onPointerDown={onPointerDown}
            onPointerUp={onPointerUp}
            aria-roledescription="carousel"
            aria-label="Featured USRNs"
          >
            <div
              className="flex items-stretch transition-transform duration-[800ms] [transition-timing-function:cubic-bezier(.16,1,.3,1)]"
              style={{ transform: `translateX(-${(idx * 100) / pv}%)` }}
            >
              {passers.map((p, i) => (
                <div
                  key={p.id}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${i + 1} of ${passers.length}`}
                  className="min-w-0 shrink-0 px-[11px] transition-[opacity,transform] duration-[800ms] [transition-timing-function:cubic-bezier(.16,1,.3,1)]"
                  style={{
                    flexBasis: `${100 / pv}%`,
                    opacity: entered ? 1 : 0,
                    transform: entered ? "none" : "translateY(26px)",
                    transitionDelay: entered ? `${i * 110}ms` : "0ms",
                  }}
                >
                  <FlipCard
                    p={p}
                    flipped={flipped.has(p.id)}
                    onFlip={() => toggle(p.id)}
                    onFocusCard={() => {
                      if (i < idx || i >= idx + pv) setIdx(Math.min(i, pages - 1));
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          {pages > 1 && (
            <div className="mt-7 flex items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => go(idx - 1)}
                aria-label="Previous passers"
                className="grid h-11 w-11 place-items-center rounded-full border border-slate-200 bg-white text-slate-900 shadow-[0_1px_2px_rgba(15,23,42,.06),0_8px_18px_-12px_rgba(30,43,88,.5)] transition-colors hover:border-nclex-blue hover:bg-nclex-blue hover:text-white active:scale-[.92] focus:outline-none focus-visible:ring-[3px] focus-visible:ring-[#93A5E8]"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <div className="flex items-center gap-[7px]">
                {Array.from({ length: pages }, (_, i) => {
                  const on = i === idx;
                  return (
                    <button
                      key={i}
                      type="button"
                      onClick={() => go(i)}
                      aria-label={`Go to slide ${i + 1}`}
                      aria-current={on}
                      className={`relative h-2 overflow-hidden rounded-full p-0 transition-[width,background-color] duration-[450ms] focus:outline-none focus-visible:ring-[3px] focus-visible:ring-[#93A5E8] ${
                        on ? "w-[34px] bg-[#C7D2FE]" : "w-2 bg-slate-300 hover:bg-slate-400"
                      }`}
                    >
                      {on && (
                        <span
                          key={`${idx}-${running}`}
                          className="absolute inset-0 origin-left rounded-full bg-nclex-blue"
                          style={
                            running
                              ? { animation: `featured-dot-fill ${AUTOPLAY_MS}ms linear both` }
                              : { transform: "scaleX(1)" }
                          }
                        />
                      )}
                    </button>
                  );
                })}
              </div>
              <button
                type="button"
                onClick={() => go(idx + 1)}
                aria-label="Next passers"
                className="grid h-11 w-11 place-items-center rounded-full border border-slate-200 bg-white text-slate-900 shadow-[0_1px_2px_rgba(15,23,42,.06),0_8px_18px_-12px_rgba(30,43,88,.5)] transition-colors hover:border-nclex-blue hover:bg-nclex-blue hover:text-white active:scale-[.92] focus:outline-none focus-visible:ring-[3px] focus-visible:ring-[#93A5E8]"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
