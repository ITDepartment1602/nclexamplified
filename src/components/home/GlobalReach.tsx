import React, { useState, useEffect, useRef } from "react";
import { GlobeCdn } from "../ui/cobe-globe-cdn";
import { SkyFlights } from "../ui/sky-flights";
import { motion, useInView } from "framer-motion";
import {
  GraduationCap,
  Globe2,
  TrendingUp,
  HeartHandshake,
  type LucideIcon,
} from "lucide-react";

/* ─── stat targets ─── */
type Stat = {
  key: string;
  target: number;
  suffix: string;
  label: string;
  /** shorter label for 2-column phone layout so numbers stay aligned */
  shortLabel: string;
  caption: string;
  icon: LucideIcon;
  format?: boolean;
  decimal?: boolean;
};

const STATS: Stat[] = [
  {
    key: "passers",
    target: 20231,
    suffix: "+",
    label: "Global Passers",
    shortLabel: "Passers",
    caption: "Nurses who passed the NCLEX with us",
    icon: GraduationCap,
    format: true,
  },
  {
    key: "countries",
    target: 15,
    suffix: "+",
    label: "Countries Reached",
    shortLabel: "Countries",
    caption: "Where our passers now practice",
    icon: Globe2,
  },
  {
    key: "successRate",
    target: 94.7,
    suffix: "%",
    label: "Success Rate",
    shortLabel: "Success Rate",
    caption: "NCLEX passing rate",
    icon: TrendingUp,
    decimal: true,
  },
  {
    key: "satisfaction",
    target: 100,
    suffix: "%",
    label: "Satisfaction",
    shortLabel: "Satisfaction",
    caption: "Student satisfaction",
    icon: HeartHandshake,
  },
];

/* ─── country data ─── */
const COUNTRIES = [
  {
    id: "usa",
    flag: "🇺🇸",
    name: "New York",
    code: "US",
    markerId: "cdn-usa",
    lat: 40.7128,
    lon: -74.006,
    image: "/images/destinations/New York.webp",
  },
  {
    flag: "🇨🇦",
    name: "Canada",
    code: "CA",
    markerId: "cdn-canada",
    lat: 49.2827,
    lon: -123.1207,
    image: "/images/destinations/Canada.webp",
  },
  {
    flag: "🇦🇺",
    name: "Australia",
    code: "AU",
    markerId: "cdn-australia",
    lat: -33.8688,
    lon: 151.2093,
    image: "/images/destinations/Australia.webp",
  },
  {
    flag: "🇬🇧",
    name: "United Kingdom",
    code: "UK",
    markerId: "cdn-uk",
    lat: 51.5074,
    lon: -0.1278,
    image: "/images/destinations/United Kingdom.webp",
  },
  {
    flag: "🇦🇪",
    name: "UAE",
    code: "AE",
    markerId: "cdn-uae",
    lat: 25.2048,
    lon: 55.2708,
    image: "/images/destinations/UAE.webp",
  },
  {
    flag: "🇸🇦",
    name: "Saudi Arabia",
    code: "SA",
    markerId: "cdn-saudiarabia",
    lat: 24.7136,
    lon: 46.6753,
    image: "/images/destinations/Saudi Arabia.webp",
  },
];

/* ─── easing helper ─── */
function easeOutQuart(t: number) {
  return 1 - Math.pow(1 - t, 4);
}

/* ─── animated counter hook ─── */
function useCounter(target: number, isInView: boolean, decimal = false) {
  const [value, setValue] = useState(0);
  const hasRun = useRef(false);

  useEffect(() => {
    if (!isInView || hasRun.current) return;
    hasRun.current = true;

    const duration = 2200;
    const start = performance.now();

    function tick(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutQuart(progress);

      if (decimal) {
        setValue(parseFloat((target * eased).toFixed(1)));
      } else {
        setValue(Math.floor(target * eased));
      }

      if (progress < 1) requestAnimationFrame(tick);
      else setValue(target);
    }
    requestAnimationFrame(tick);
  }, [isInView, target, decimal]);

  return value;
}

/*
 * Minimal dividers inside the stat bar: short hairlines that fade out at both
 * ends instead of full-height borders. 2×2 grid up to lg (a vertical line
 * between columns, a horizontal one between rows), one row of four from lg.
 */
const V_LINE =
  "pointer-events-none absolute right-0 top-1/2 h-1/2 w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-slate-300/70 to-transparent";
const H_LINE =
  "pointer-events-none absolute bottom-0 left-1/2 h-px w-3/5 -translate-x-1/2 bg-gradient-to-r from-transparent via-slate-300/70 to-transparent lg:hidden";
const CELL_DIVIDERS: { v: string | null; h: boolean }[] = [
  { v: "block", h: true },
  { v: "hidden lg:block", h: true },
  { v: "block", h: false },
  { v: null, h: false },
];

/* ─── stat cell ─── */
const StatCell: React.FC<{
  stat: Stat;
  index: number;
  isInView: boolean;
}> = ({ stat, index, isInView }) => {
  const value = useCounter(stat.target, isInView, stat.decimal);
  const Icon = stat.icon;

  const formattedValue = stat.format
    ? value.toLocaleString()
    : stat.decimal
      ? value.toFixed(1)
      : value.toString();

  return (
    <div
      className="group relative flex flex-col items-center px-2 py-4 text-center transition-colors duration-300 hover:bg-white/50 sm:px-6 sm:py-8 lg:py-10"
    >
      {CELL_DIVIDERS[index].v && <span aria-hidden className={`${V_LINE} ${CELL_DIVIDERS[index].v}`} />}
      {CELL_DIVIDERS[index].h && <span aria-hidden className={H_LINE} />}
      <span className="hidden h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[#4a60b4] to-nclex-blue text-white shadow-[0_8px_18px_-8px_rgba(62,83,160,0.7)] ring-4 ring-white/80 transition-[background-color,box-shadow,transform] duration-300 group-hover:-translate-y-0.5 group-hover:from-[#d24a4b] group-hover:to-nclex-red group-hover:shadow-[0_10px_20px_-8px_rgba(192,64,65,0.7)] sm:inline-flex">
        <Icon className="h-[18px] w-[18px] sm:h-5 sm:w-5" strokeWidth={1.75} />
      </span>

      <p className="text-[1.65rem] font-semibold leading-none tracking-tight text-slate-800 tabular-nums sm:mt-4 sm:text-4xl lg:text-[2.75rem]">
        {formattedValue}
        <span className="font-medium text-nclex-red">{stat.suffix}</span>
      </p>

      <p className="mt-2 text-[0.6rem] font-medium uppercase tracking-[0.16em] text-nclex-blue sm:mt-3 sm:text-[0.68rem] sm:tracking-[0.2em]">
        <span className="sm:hidden">{stat.shortLabel}</span>
        <span className="hidden sm:inline">{stat.label}</span>
      </p>

      <p className="mt-1.5 hidden max-w-[13rem] text-sm leading-snug text-slate-500 sm:block">
        {stat.caption}
      </p>
    </div>
  );
};

/* ─── destination gallery sub-component ─── */
const DestinationGallery: React.FC<{ isInView: boolean }> = React.memo(
  ({ isInView }) => {
    const [activeIdx, setActiveIdx] = useState(0);

    // We only preload the NEXT image to keep memory low
    useEffect(() => {
      const nextIdx = (activeIdx + 1) % COUNTRIES.length;
      const img = new Image();
      img.src = COUNTRIES[nextIdx].image;
    }, [activeIdx]);

    return (
      <div className="mt-8 flex flex-col gap-4">
        {/* FEATURED IMAGE — all stacked in DOM, pure CSS opacity crossfade, zero JS animation */}
        <div className="relative h-[300px] sm:h-[400px] w-full overflow-hidden rounded-2xl shadow-xl bg-slate-900">
          <div
            key={activeIdx}
            className="absolute inset-0 animate-in fade-in duration-700"
          >
            <img
              src={COUNTRIES[activeIdx].image}
              alt=""
              className="h-full w-full object-cover"
              loading="eager"
              decoding="async"
            />
          </div>

          <div className="absolute inset-0 bg-black/50 pointer-events-none z-[11]" />

          {/* Animated Text Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 pointer-events-none z-[12]">
            <motion.div
              key={activeIdx}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex flex-col items-center"
            >
              <span className="text-white/70 text-xs font-semibold uppercase tracking-[0.2em]">
                {COUNTRIES[activeIdx].code} · Destination
              </span>
              <h4 className="px-6 text-center text-3xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)] leading-tight sm:whitespace-nowrap">
                {COUNTRIES[activeIdx].name}
              </h4>
            </motion.div>
          </div>
        </div>

        {/* THUMBNAILS — Dynamic Flex layout for 'expand and squish' effect */}
        <div className="mt-2 flex h-24 sm:h-32 w-full gap-1.5">
          {COUNTRIES.map((country, i) => {
            const active = i === activeIdx;
            return (
              <button
                type="button"
                key={country.name}
                onClick={() => setActiveIdx(i)}
                className={`relative cursor-pointer overflow-hidden rounded-lg focus:outline-none transition-all duration-500 ease-out ${
                  active ? "flex-[2.5]" : "flex-1"
                }`}
              >
                <img
                  src={country.image}
                  alt={country.name}
                  loading="lazy"
                  decoding="async"
                  draggable={false}
                  className={`h-full w-full object-cover transition-all duration-500 ${
                    active
                      ? "grayscale-0 opacity-100"
                      : "grayscale opacity-100 hover:grayscale-0"
                  }`}
                />
                {active && (
                  <span className="pointer-events-none absolute inset-0 rounded-lg ring-2 ring-nclex-blue ring-offset-1" />
                )}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <span className="text-[0.7rem] font-black uppercase tracking-widest text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] lg:text-[0.75rem]">
                    {country.code}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    );
  },
);


/* ─── main component ─── */
const GlobalReach: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  // Destination tour: one globe can only show half the world (New York and
  // Australia are on opposite sides), so it flies to each destination in turn.
  // Picking a country jumps there and restarts the timer.
  const [tourIdx, setTourIdx] = useState(0);
  const [tourTick, setTourTick] = useState(0);
  useEffect(() => {
    if (!isInView) return;
    const id = window.setInterval(
      () => setTourIdx((i) => (i + 1) % COUNTRIES.length),
      // long enough for the plane's whole "next stop" flight
      6200,
    );
    return () => window.clearInterval(id);
  }, [isInView, tourTick]);
  const pickDestination = (i: number) => {
    setTourIdx(i);
    setTourTick((t) => t + 1);
  };
  const dest = COUNTRIES[tourIdx];
  // which side of the globe the Philippines (121.8°E) is on, seen from dest
  const phSide: 1 | -1 = ((((121.774 - dest.lon) % 360) + 540) % 360) - 180 >= 0 ? 1 : -1;
  const globeRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={sectionRef}
      className="relative bg-white py-14 lg:py-20 overflow-hidden"
    >
      {/* ── background: soft brand light (orbit rings sit around the globe below) ── */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {/* top wash in brand blue, fading to white */}
        <div className="absolute inset-x-0 top-0 h-[70%] bg-gradient-to-b from-[#f3f5fc] via-[#f8f9fe] to-transparent" />
        {/* brand glows in the far corners */}
        <div className="absolute -left-40 top-1/4 h-[480px] w-[480px] rounded-full bg-[radial-gradient(closest-side,rgba(62,83,160,0.08),transparent)]" />
        <div className="absolute -right-40 top-[45%] h-[480px] w-[480px] rounded-full bg-[radial-gradient(closest-side,rgba(192,64,65,0.06),transparent)]" />
        {/* fade into the next section */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-white" />
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Header Section */}
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
          <motion.span
            initial={{ opacity: 0, y: 14 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-slate-500"
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-nclex-blue" />
            Global NCLEX Reach
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-5 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900"
          >
            Empowering Nurses{" "}
            <span className="text-nclex-blue">Across the Globe</span>
          </motion.h2>

          {/* same red accent bar the other section headers use */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 h-1 w-20 rounded-full bg-nclex-red"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-500 sm:text-[1.05rem] sm:leading-8"
          >
            From the Philippines to the world — our review center equips nurses
            to pass the NCLEX with confidence and launch careers across global
            destinations.
          </motion.p>
        </div>

        {/* ── GLOBE HORIZON + STAT BAR ── */}
        <div className="relative mt-2 [--g:360px] sm:mt-4 sm:[--g:480px] lg:[--g:600px] xl:[--g:660px]">
          {/* orbit rings centred on the globe (--g = globe width), fading outward */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-[calc(var(--g)/2)] -translate-x-1/2 -translate-y-1/2"
            style={{
              width: "calc(var(--g) * 3.3)",
              height: "calc(var(--g) * 3.3)",
              maskImage: "radial-gradient(closest-side, #000 45%, transparent 100%)",
              WebkitMaskImage: "radial-gradient(closest-side, #000 45%, transparent 100%)",
            }}
          >
            {[1.3, 1.65, 2.05, 2.55].map((k, i) => (
              <div
                key={k}
                className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border ${
                  i % 2 ? "border-dashed border-nclex-blue/[0.13]" : "border-nclex-blue/[0.09]"
                }`}
                style={{ width: `calc(var(--g) * ${k})`, height: `calc(var(--g) * ${k})` }}
              />
            ))}
          </div>

          {/* soft brand halo — outside the masked box so its edge is never clipped */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-[160px] aspect-square w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(62,83,160,0.30),rgba(62,83,160,0.12)_45%,rgba(62,83,160,0.03)_70%,transparent)] sm:top-[220px] sm:w-[820px] lg:top-[270px] lg:w-[1040px]"
          />
          {/* warm horizon light where the globe meets the stat bar */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-[250px] h-[140px] w-[480px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(192,64,65,0.10),transparent)] sm:top-[320px] sm:w-[640px] lg:top-[390px] lg:w-[820px] xl:top-[420px]"
          />

          {/* globe rising over a horizon: bottom of the sphere fades into the page */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.15, ease: "easeOut" }}
            className="relative mx-auto h-[300px] sm:h-[360px] lg:h-[440px] xl:h-[470px]"
            style={{
              // fade starts low enough that the globe still runs behind the
              // top of the glass bar, so the bar has something to blur
              maskImage: "linear-gradient(to bottom, #000 68%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to bottom, #000 68%, transparent 100%)",
            }}
          >
            <div ref={globeRef} className="absolute left-1/2 top-0 -translate-x-1/2">
              <GlobeCdn
                className="w-[360px] sm:w-[480px] lg:w-[600px] xl:w-[660px]"
                focus={{ lat: dest.lat, lon: dest.lon }}
                // the lower half is cropped, so sit the place above centre
                focusLift={24}
                activeId={dest.markerId}
              />
            </div>
          </motion.div>

          {/* plane taking off around the outside of the globe — above the globe,
              below the glass bar */}
          <SkyFlights
            globeRef={globeRef}
            // each destination (or a tap on one) flies a plane from the
            // Philippines HQ to it, under a "Your next stop · {country}" banner
            flightKey={`${tourIdx}:${tourTick}`}
            label={dest.name}
            fromId="cdn-philippines"
            toId={dest.markerId}
            fromSide={phSide}
            className="absolute inset-x-0 -top-8 bottom-0 z-[5] h-[calc(100%+2rem)] w-full"
          />

          {/* stat bar overlapping the horizon */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
            className="relative z-10 mx-auto -mt-12 max-w-3xl sm:-mt-24 lg:-mt-28 lg:max-w-5xl"
          >
            {/* frosted "liquid glass" bar — lite devices lose the blur (see index.css), so they get a solid fill */}
            <div className="relative overflow-hidden rounded-3xl border border-white/80 bg-gradient-to-b from-white/60 to-white/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.95),inset_0_0_0_1px_rgba(255,255,255,0.35),0_0_0_1px_rgba(15,23,42,0.06),0_30px_60px_-30px_rgba(62,83,160,0.35)] backdrop-blur-md backdrop-saturate-150 [html.lite_&]:bg-white/95">
              {/* specular sheen across the top half */}
              <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/70 via-white/20 to-transparent" />
              <div className="grid grid-cols-2 lg:grid-cols-4">
                {STATS.map((stat, i) => (
                  <StatCell key={stat.key} stat={stat} index={i} isInView={isInView} />
                ))}
              </div>
            </div>
          </motion.div>

          {/* destinations */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mx-auto mt-8 flex max-w-3xl flex-col items-center sm:mt-10"
          >
            <p className="text-[0.65rem] font-medium uppercase tracking-[0.22em] text-slate-400">
              Where our nurses work <span className="normal-case tracking-normal text-slate-400/80">· tap to explore</span>
            </p>
            <ul className="mt-3 flex flex-wrap justify-center gap-2">
              {COUNTRIES.map((c, i) => {
                const active = i === tourIdx;
                return (
                  <li key={c.code}>
                    <button
                      type="button"
                      onClick={() => pickDestination(i)}
                      aria-pressed={active}
                      className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-xs font-medium transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-nclex-blue/40 ${
                        active
                          ? "border-nclex-blue bg-nclex-blue text-white shadow-[0_6px_16px_-6px_rgba(62,83,160,0.7)]"
                          : "border-slate-200 bg-white text-slate-700 hover:border-nclex-blue/40 hover:text-nclex-blue"
                      }`}
                    >
                      <span className={`h-1.5 w-1.5 rounded-full transition-colors ${active ? "bg-white" : "bg-nclex-blue"}`} />
                      {c.name}
                    </button>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        </div>

        {/* ── KEY DESTINATIONS PANEL ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mx-auto mt-20 max-w-4xl"
        >
          <div
            className="relative overflow-hidden rounded-3xl border border-slate-200/70 bg-white p-8 sm:p-10
                        shadow-[0_4px_24px_rgba(0,0,0,0.04)]"
          >
            {/* decorative top-left corner accent */}
            <div
              className="pointer-events-none absolute -left-12 -top-12 h-32 w-32 rounded-full opacity-[0.06]"
              style={{ background: "#3e53a0" }}
            />

            {/* Header row */}
            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                Our Nurses Work Worldwide
              </h3>
              <p className="mt-1.5 max-w-md text-sm leading-6 text-slate-500">
                Filipino nursing talent deployed and thriving in world-class
                healthcare systems.
              </p>
            </div>

            {/* Divider */}
            <div className="my-6 h-px w-full bg-slate-100" />

            {/* ── GALLERY LAYOUT ── */}
            <DestinationGallery isInView={isInView} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GlobalReach;
