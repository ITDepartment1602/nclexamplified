import React from "react";
import { motion } from "framer-motion";
import { Award, BadgeCheck, Compass, Sparkles, Target } from "lucide-react";

/* shown around the seal — different from the stats on the left, so nothing repeats */
const CREDENTIALS = [
  { icon: BadgeCheck, title: "Unlimited Review", sub: "Until you pass", pos: "sm:-left-4 sm:top-[14%]" },
  { icon: Award, title: "Award-winning", sub: "CEO of the Year 2024", pos: "sm:-right-8 sm:top-[72%]" },
  { icon: Sparkles, title: "NGN-ready", sub: "Next Gen NCLEX format", pos: "sm:bottom-[4%] sm:left-0" },
];

const PURPOSE = [
  {
    icon: Target,
    label: "Our Mission",
    text: "To help all Filipino nurses around the world pass the NCLEX and achieve their American dream.",
  },
  {
    icon: Compass,
    label: "Our Vision",
    text: "To remain the most trusted NCLEX review program, providing legit unlimited review with high-quality teaching.",
  },
];

const STATS = [
  { value: "2021", label: "Founded" },
  { value: "20,231+", label: "Nurses passed" },
  { value: "94.7%", label: "Passing rate" },
];

const AboutHero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-white pb-16 pt-28 font-sans lg:pb-20 lg:pt-32">
      {/* soft brand light */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-[70%] bg-gradient-to-b from-[#f3f5fc] to-transparent" />
        <div className="absolute -right-40 top-10 h-[520px] w-[520px] rounded-full bg-[radial-gradient(closest-side,rgba(62,83,160,0.10),transparent)]" />
        <div className="absolute -left-40 bottom-0 h-[420px] w-[420px] rounded-full bg-[radial-gradient(closest-side,rgba(192,64,65,0.05),transparent)]" />
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── intro: text + team photo ── */}
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="text-center lg:text-left">
            <motion.span
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-slate-500 shadow-sm"
            >
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-nclex-blue" />
              About NCLEX Amplified
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.05 }}
              className="mt-5 text-3xl font-bold leading-[1.15] tracking-tight text-slate-900 sm:text-4xl sm:leading-[1.15] lg:text-[3.1rem] lg:leading-[1.12]"
            >
              Empowering Filipino Nurses for{" "}
              <span className="text-nclex-blue">Global Success</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mx-auto mt-5 h-1 w-20 origin-left rounded-full bg-nclex-red lg:mx-0"
            />

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mx-auto mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-[1.05rem] lg:mx-0"
            >
              Founded in 2021, NCLEX Amplified Review Center is the leading NCLEX review center in the
              Philippines. We give nurses the most complete review experience, with{" "}
              <span className="font-semibold text-slate-900">unlimited review until you pass</span>, and
              have helped thousands build careers in the USA, UK, Middle East and Canada.
            </motion.p>

            {/* stats */}
            <motion.dl
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mx-auto mt-9 grid max-w-xl grid-cols-3 divide-x divide-slate-200 rounded-2xl border border-slate-200/80 bg-white/80 py-5 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_16px_32px_-24px_rgba(62,83,160,0.35)] lg:mx-0"
            >
              {STATS.map((s) => (
                <div key={s.label} className="px-3 text-center">
                  <dt className="sr-only">{s.label}</dt>
                  <dd className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">{s.value}</dd>
                  <dd className="mt-1 text-[0.65rem] font-medium uppercase tracking-[0.14em] text-slate-500 sm:text-xs">
                    {s.label}
                  </dd>
                </div>
              ))}
            </motion.dl>
          </div>

          {/* team photo */}
          {/* emblem: the official seal inside concentric rings, a slowly turning
              ring of text, and three credentials around it */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="relative mx-auto aspect-square w-full max-w-[460px] lg:max-w-[520px]"
          >
            {/* soft halo + rings */}
            <div aria-hidden className="absolute inset-0 rounded-full bg-[radial-gradient(closest-side,rgba(62,83,160,0.16),rgba(62,83,160,0.04)_70%,transparent)]" />
            <div aria-hidden className="absolute inset-[4%] rounded-full border border-nclex-blue/10" />
            <div aria-hidden className="absolute inset-[12%] rounded-full border border-dashed border-nclex-blue/20" />

            {/* turning text ring */}
            <svg aria-hidden viewBox="0 0 200 200" className="emblem-spin absolute inset-[12%] h-[76%] w-[76%] text-nclex-blue">
              <defs>
                <path id="emblem-ring" d="M100,100 m-88,0 a88,88 0 1,1 176,0 a88,88 0 1,1 -176,0" />
              </defs>
              <text fontSize="8.2" fontWeight="600" letterSpacing="3.1" fill="currentColor" opacity="0.55">
                <textPath href="#emblem-ring">
                  UNLIMITED REVIEW · UNTIL YOU PASS · EST. 2021 · NCLEX AMPLIFIED ·
                </textPath>
              </text>
            </svg>

            {/* navy disc with the seal */}
            <div className="absolute inset-[22%] rounded-full bg-gradient-to-br from-nclex-blue via-[#2f418a] to-[#1f2b62] p-[7%] shadow-[0_30px_60px_-24px_rgba(34,48,106,0.65)] ring-8 ring-white">
              <div className="flex h-full w-full items-center justify-center rounded-full bg-white p-[6%] shadow-inner">
                <img
                  src="/images/logo-loader.webp"
                  alt="NCLEX Amplified Review Center seal"
                  width={720}
                  height={720}
                  decoding="async"
                  className="h-full w-full object-contain"
                />
              </div>
            </div>

            {/* credentials */}
            {CREDENTIALS.map(({ icon: Icon, title, sub, pos }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.45 + i * 0.12 }}
                className={`hidden items-center gap-2.5 rounded-2xl sm:absolute sm:flex border border-slate-200/80 bg-white/95 py-2 pl-2 pr-3.5 shadow-[0_16px_32px_-16px_rgba(15,23,42,0.35)] sm:gap-3 sm:py-2.5 sm:pl-2.5 sm:pr-4 ${pos}`}
              >
                <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#eef1fa] text-nclex-blue sm:h-9 sm:w-9">
                  <Icon className="h-4 w-4 sm:h-[18px] sm:w-[18px]" strokeWidth={1.9} />
                </span>
                <div className="text-left">
                  <p className="whitespace-nowrap text-xs font-semibold leading-tight text-slate-900 sm:text-sm">{title}</p>
                  <p className="whitespace-nowrap text-[0.65rem] text-slate-500 sm:text-xs">{sub}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* phones: the credentials sit in a row under the seal instead of over it */}
          <ul className="-mt-4 flex flex-wrap justify-center gap-2 sm:hidden">
            {CREDENTIALS.map(({ icon: Icon, title, sub }) => (
              <li
                key={title}
                className="flex items-center gap-2 rounded-xl border border-slate-200/80 bg-white py-1.5 pl-1.5 pr-3 shadow-sm"
              >
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-[#eef1fa] text-nclex-blue">
                  <Icon className="h-3.5 w-3.5" strokeWidth={1.9} />
                </span>
                <span className="text-left">
                  <span className="block text-xs font-semibold leading-tight text-slate-900">{title}</span>
                  <span className="block text-[0.65rem] text-slate-500">{sub}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* ── mission & vision: one light panel, two columns ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative mt-20 overflow-hidden rounded-3xl border border-slate-200/80 bg-white/90 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_24px_48px_-36px_rgba(62,83,160,0.35)] lg:mt-24"
        >
          <div className="grid md:grid-cols-2">
            {PURPOSE.map(({ icon: Icon, label, text }, i) => (
              <div
                key={label}
                className={`relative p-8 sm:p-10 lg:p-12 ${
                  i > 0
                    ? "before:absolute before:inset-x-8 before:top-0 before:h-px before:bg-slate-200/80 md:before:inset-x-auto md:before:inset-y-10 md:before:left-0 md:before:h-auto md:before:w-px"
                    : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#eef1fa] text-nclex-blue">
                    <Icon className="h-[18px] w-[18px]" strokeWidth={1.75} />
                  </span>
                  <span className="text-xs font-medium uppercase tracking-[0.2em] text-nclex-blue">{label}</span>
                </div>
                <p className="mt-6 font-sans text-lg font-normal leading-[1.7] text-slate-700 sm:text-xl sm:leading-[1.65]">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;
