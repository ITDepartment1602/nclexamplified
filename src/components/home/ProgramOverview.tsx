import React from "react";
import { motion } from "framer-motion";
import {
  CalendarDays,
  BookCheck,
  CheckCircle2,
  BookOpen,
  Video,
  FileText,
  Infinity,
  Clock,
} from "lucide-react";
import SectionHeader from "@/components/common/SectionHeader";

const features = [
  {
    icon: BookCheck,
    label: "Concept Mastery",
    detail: "32 Key Topics · 160 Hours",
  },
  {
    icon: CheckCircle2,
    label: "Question Drills",
    detail: "21 Sessions · 840 Questionnaires",
  },
  {
    icon: FileText,
    label: "Mock Exams",
    detail: "6 Full-Length Exams · 420 Questionnaires",
  },
  {
    icon: Video,
    label: "Final Coaching",
    detail: "9 Sessions · 72 Hours",
  },
  {
    icon: BookOpen,
    label: "NCLEX Secrets",
    detail: "Exclusive high-yield questionnaires",
  },
  {
    icon: CalendarDays,
    label: "Smart Calendar",
    detail: "Tailored to your schedule",
  },
  {
    icon: Infinity,
    label: "Unlimited Access to Recorded Videos",
    detail: "Watch every session anytime, anywhere — until you pass",
    isWide: true,
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const ProgramOverview: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Program Overview"
          title={
            <>
              NCLEX Comprehensive{" "}
              <span className="text-nclex-blue">Review Program</span>
            </>
          }
          description="An intensive and structured review program tailored to help aspiring nurses successfully pass the NCLEX-RN on their first attempt."
        />

        {/* Duration — single centered stat card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-4xl mb-14 flex justify-center"
        >
          <div className="flex items-center gap-4 px-7 py-4 rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 ring-1 ring-inset ring-blue-100 shrink-0">
              <Clock className="h-5 w-5 text-nclex-blue" />
            </div>
            <div>
              <p className="text-slate-400 text-[0.65rem] uppercase tracking-widest font-semibold mb-0.5">
                Program Duration
              </p>
              <p className="text-slate-900 text-lg font-extrabold tracking-tight">
                1 Cycle = 4 Months
              </p>
            </div>
          </div>
        </motion.div>

        {/* Watermark + grid wrapper — overflow-hidden clips the watermark only here */}
        <div className="relative mx-auto max-w-5xl py-10 overflow-hidden">
          {/* Watermark — lg and up only, two stacked lines, z-0 */}
          <div
            aria-hidden="true"
            className="hidden lg:flex pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 flex-col items-center justify-center select-none"
            style={{ zIndex: 0 }}
          >
            {/* YOU'RE — slides in from left, then breathes */}
            <motion.span
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="block font-black uppercase leading-[0.9] text-nclex-blue/50"
              style={{
                fontSize: "clamp(8rem, 16vw, 15rem)",
                letterSpacing: "-0.04em",
              }}
            >
              <motion.span
                animate={{ scale: [1, 1.015, 1], opacity: [0.3, 0.38, 0.3] }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                style={{ display: "inline-block" }}
              >
                YOU'RE
              </motion.span>
            </motion.span>

            {/* NEXT! — slides in from right, offset delay, then breathes out of phase */}
            <motion.span
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
              className="block font-black uppercase leading-[0.9] text-nclex-red/50"
              style={{
                fontSize: "clamp(8rem, 16vw, 15rem)",
                letterSpacing: "-0.04em",
              }}
            >
              <motion.span
                animate={{ scale: [1, 1.015, 1], opacity: [0.3, 0.38, 0.3] }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 2,
                }}
                style={{ display: "inline-block" }}
              >
                NEXT!
              </motion.span>
            </motion.span>
          </div>

          {/* Label */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative text-center text-xs uppercase tracking-widest font-semibold text-slate-400 mb-6"
            style={{ zIndex: 1 }}
          >
            What You'll Get
          </motion.p>

          {/* Grid — first 6 items in 3 cols, last (wide) item spans full row */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            style={{ zIndex: 1 }}
          >
            {features.map((f, i) => {
              const Icon = f.icon;
              const isWide = !!f.isWide;
              return (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className={`group relative flex items-start gap-4 rounded-2xl border border-slate-200/80 bg-white/5 backdrop-blur-md p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-nclex-blue/10 hover:border-nclex-blue/30${isWide ? " sm:col-span-2 lg:col-span-3" : ""}`}
                >
                  {/* Hover wash — z-0 so it never covers icon/text */}
                  <div
                    className="pointer-events-none absolute inset-0 rounded-2xl bg-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{ zIndex: 0 }}
                  />

                  {/* Icon */}
                  <div
                    className="relative shrink-0 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 ring-1 ring-inset ring-blue-100 transition-all duration-300"
                    style={{ zIndex: 2 }}
                  >
                    <Icon className="h-5 w-5 text-nclex-blue transition-colors duration-300 group-hover:text-white" />
                  </div>

                  {/* Text */}
                  <div className="relative flex-1" style={{ zIndex: 2 }}>
                    <p className="font-bold text-slate-800 text-sm leading-tight mb-1 transition-colors duration-300 group-hover:text-nclex-blue">
                      {f.label}
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {f.detail}
                    </p>
                  </div>

                  {/* Pulse badge on the wide card only */}
                  {isWide && (
                    <div
                      className="relative shrink-0 self-center"
                      style={{ zIndex: 2 }}
                    >
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-nclex-blue/10 border border-nclex-blue/20 px-4 py-1.5 text-xs font-bold text-nclex-blue uppercase tracking-wide">
                        <span className="h-1.5 w-1.5 rounded-full bg-nclex-blue animate-pulse" />
                        Included
                      </span>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProgramOverview;
