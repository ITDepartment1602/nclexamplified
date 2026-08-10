import React, { useState, useEffect, useRef } from "react";
import { GlobeCdn } from "../ui/cobe-globe-cdn";
import { motion, useInView } from "framer-motion";

/* ─── stat targets ─── */
const STATS = [
  {
    key: "passers",
    target: 20231,
    suffix: "+",
    label: "Global Passers",
    format: true,
    decimal: false,
  },
  {
    key: "countries",
    target: 15,
    suffix: "+",
    label: "Countries Reached",
    format: false,
    decimal: false,
  },
  {
    key: "successRate",
    target: 94.7,
    suffix: "%",
    label: "Success Rate",
    format: false,
    decimal: true,
  },
  {
    key: "satisfaction",
    target: 100,
    suffix: "%",
    label: "Satisfaction",
    format: false,
    decimal: false,
  },
] as const;

/* ─── country data ─── */
const COUNTRIES = [
  {
    id: "usa",
    flag: "🇺🇸",
    name: "New York",
    code: "US",
    image: "/images/destinations/New York.webp",
  },
  {
    flag: "🇨🇦",
    name: "Canada",
    code: "CA",
    image: "/images/destinations/Canada.webp",
  },
  {
    flag: "🇦🇺",
    name: "Australia",
    code: "AU",
    image: "/images/destinations/Australia.webp",
  },
  {
    flag: "🇬🇧",
    name: "United Kingdom",
    code: "UK",
    image: "/images/destinations/United Kingdom.webp",
  },
  {
    flag: "🇦🇪",
    name: "UAE",
    code: "AE",
    image: "/images/destinations/UAE.webp",
  },
  {
    flag: "🇸🇦",
    name: "Saudi Arabia",
    code: "SA",
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

/* ─── stat card ─── */
const StatCard: React.FC<{
  stat: (typeof STATS)[number];
  index: number;
  isInView: boolean;
}> = ({ stat, index, isInView }) => {
  const value = useCounter(stat.target, isInView, stat.decimal);

  const formattedValue = stat.format
    ? value.toLocaleString()
    : stat.decimal
      ? value.toFixed(1)
      : value.toString();

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.15 * index, ease: "easeOut" }}
      className="group relative"
    >
      <div
        className="relative overflow-hidden rounded-2xl border border-slate-200/70 bg-white p-6
                    shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-all duration-300
                    hover:shadow-[0_8px_30px_rgba(62,83,160,0.10)] hover:border-nclex-blue/20"
      >
        {/* subtle accent line at top */}
        <div
          className="absolute inset-x-0 top-0 h-[2px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background:
              "linear-gradient(90deg, transparent, var(--nclex-blue), transparent)",
          }}
        />

        <p className="text-[2.25rem] font-bold leading-none tracking-tight text-slate-900">
          {formattedValue}
          <span className="text-nclex-blue">{stat.suffix}</span>
        </p>
        <p className="mt-3 text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-slate-400">
          {stat.label}
        </p>
      </div>
    </motion.div>
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
                {COUNTRIES[activeIdx].flag} Destination
              </span>
              <h4 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)] whitespace-nowrap">
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

  return (
    <section
      ref={sectionRef}
      className="relative bg-white py-14 lg:py-16 overflow-hidden"
    >
      {/* subtle radial glow behind the globe area */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/3
                    h-[700px] w-[700px] rounded-full opacity-[0.07]"
        style={{
          background: "radial-gradient(circle, #3e53a0 0%, transparent 70%)",
        }}
      />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center mb-10 lg:mb-12">
          <motion.span
            initial={{ opacity: 0, y: 14 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-slate-500"
          >
            <span
              className="inline-block h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: "#3e53a0" }}
            />
            Global NCLEX Reach
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-5 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900"
          >
            Empowering Nurses{" "}
            <span style={{ color: "#3e53a0" }}>Across the Globe</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-500 sm:text-[1.05rem] sm:leading-8"
          >
            From the Philippines to the world — our review center equips nurses
            to pass the NCLEX with confidence and launch careers across global
            destinations.
          </motion.p>
        </div>

        {/* ── GLOBE + STATS ── */}
        <div className="relative mt-16 lg:mt-20">
          {/* Stats grid wraps around the globe */}
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_auto_1fr] lg:gap-0">
            {/* Left stats */}
            <div className="flex flex-col gap-5 sm:grid sm:grid-cols-2 lg:flex lg:flex-col lg:gap-6 lg:pr-10">
              {STATS.slice(0, 2).map((stat, i) => (
                <StatCard
                  key={stat.key}
                  stat={stat}
                  index={i}
                  isInView={isInView}
                />
              ))}
            </div>

            {/* Center globe */}
            <motion.div
              initial={{ opacity: 0, scale: 0.88 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
              className="relative mx-auto flex items-center justify-center"
            >
              {/* decorative ring */}
              <div
                className="pointer-events-none absolute inset-0 m-auto rounded-full border border-dashed border-slate-200/60"
                style={{
                  width: "108%",
                  height: "108%",
                  top: "-4%",
                  left: "-4%",
                }}
              />
              <GlobeCdn
                className="w-[320px] sm:w-[400px] lg:w-[460px]"
                speed={0.0012}
              />
            </motion.div>

            {/* Right stats */}
            <div className="flex flex-col gap-5 sm:grid sm:grid-cols-2 lg:flex lg:flex-col lg:gap-6 lg:pl-10">
              {STATS.slice(2).map((stat, i) => (
                <StatCard
                  key={stat.key}
                  stat={stat}
                  index={i + 2}
                  isInView={isInView}
                />
              ))}
            </div>
          </div>
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
