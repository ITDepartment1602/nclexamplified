
import React from "react";
import { motion } from "framer-motion";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import {
  CheckCircle2,
  BookOpen,
  BarChart3,
  RotateCcw,
  Zap,
  ArrowRight,
  Infinity as InfinityIcon,
  Video,
  LayoutDashboard,
  FileQuestion,
  ClipboardCheck,
  BookOpenCheck,
  MessagesSquare,
  HeartHandshake,
  CalendarClock,
} from "lucide-react";

/* ─── Services data ─── */
const services = [
  {
    icon: InfinityIcon,
    title: "Unlimited Review Until You Pass",
    description:
      "No expiration, no limits — attend as many cycles as you need. Learn from top-performing USRN passers with proven experience.",
  },
  {
    icon: Video,
    title: "Live, Interactive Zoom Classes",
    description:
      "Real-time coaching & discussion of ALL NCLEX concepts. Regular updates aligned with NCLEX Next Gen (NGN) standards.",
  },
  {
    icon: LayoutDashboard,
    title: "Amplified Dashboard",
    description:
      "Our very own website! Missed a class? Watch recordings anytime. Study at your own pace, anywhere, anytime.",
  },
  {
    icon: FileQuestion,
    title: "Full NGN Question Bank",
    description:
      '4,000+ practice questions with detailed rationales. Practice with trend-based NCLEX questions and understand the "why" behind each answer.',
  },
  {
    icon: ClipboardCheck,
    title: "Simulated Mock Exams",
    description:
      "Adaptive style exams that train you under real-exam conditions. Includes quizzes, topic drills, and post-lecture mastery activities.",
  },
  {
    icon: BookOpenCheck,
    title: "FREE Reviewer PDFs & Ebooks",
    description:
      "Care for the NCLEX RN, Practice and Exercises (4th Edition), Linda A. LaCharity – Prioritization & Delegation, NCLEX Success Guide & more.",
  },
  {
    icon: MessagesSquare,
    title: "UWorld, Archer, Bootcamp-Style QBank Discussions",
    description:
      "Live Zoom Q&A drills to sharpen test-taking skills. Answer breakdowns & rationales in real-time.",
  },
  {
    icon: HeartHandshake,
    title: "Motivational Support Community",
    description:
      "Daily reminders, progress tracking, & peer encouragement. You'll never feel alone in your NCLEX journey.",
  },
  {
    icon: CalendarClock,
    title: '"Amplified Way" Study Cycle',
    description:
      "50+ lectures per cycle, 20 NCLEX drills, 4-hour full-length mock exams with rationales. Program Duration: 1 Cycle = 4 Months.",
  },
];

/* ─── Studium feature pills ─── */
const PILLS = [
  { icon: <CheckCircle2 className="h-3.5 w-3.5" />, label: "Real NCLEX Simulation" },
  { icon: <BookOpen className="h-3.5 w-3.5" />, label: "4,000+ Questions" },
  { icon: <BarChart3 className="h-3.5 w-3.5" />, label: "Progress Tracking" },
  { icon: <RotateCcw className="h-3.5 w-3.5" />, label: "Review Anytime" },
];

/* ─── Component ─── */
const ServicesGrid: React.FC = () => {
  return (
    <>
      {/* ════════ Main Services Grid ════════ */}
      <section className="py-16 lg:py-20 bg-gradient-to-b from-white to-slate-50 font-sans">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: (index % 3) * 0.08, ease: "easeOut" }}
                  className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200/70 bg-white p-7 shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:border-nclex-blue/25 hover:shadow-[0_18px_40px_rgba(62,83,160,0.14)]"
                >
                  {/* Icon tile */}
                  <div className="relative z-10 mb-6 inline-flex h-14 w-14 items-center justify-center self-start rounded-2xl bg-gradient-to-br from-[#3e53a0] to-[#5068c2] text-white shadow-md shadow-nclex-blue/25 transition-transform duration-300 ease-out group-hover:-rotate-3 group-hover:scale-110">
                    <Icon className="h-6 w-6" strokeWidth={2.25} />
                  </div>

                  <h3 className="relative z-10 text-base md:text-lg font-bold mb-2 leading-snug tracking-tight text-nclex-red">
                    {service.title}
                  </h3>
                  <p className="relative z-10 text-sm text-slate-500 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Gradient accent that sweeps in on hover */}
                  <span className="absolute inset-x-0 bottom-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-[#3e53a0] to-[#c04041] transition-transform duration-300 ease-out group-hover:scale-x-100" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════════ Studium CAT — Premium Section ════════ */}
      <section className="relative bg-white overflow-hidden font-sans">

        {/* Soft ambient glow */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[350px] rounded-full bg-nclex-blue/[0.04] blur-3xl" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-indigo-50/50 blur-3xl" />
        </div>

        <ContainerScroll
          titleComponent={
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease: "easeOut" }}
              className="relative z-10 px-4"
            >
              {/* Eyebrow badge */}
              <span className="inline-flex items-center gap-2 rounded-full border border-nclex-blue/25 bg-nclex-blue/[0.06] px-4 py-1.5 text-[0.6rem] font-bold uppercase tracking-[0.25em] text-nclex-blue mb-5">
                <Zap className="h-3 w-3" />
                Computer Adaptive Test
              </span>

              {/* Headline */}
              <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-tight text-slate-900 mb-4 leading-tight">
                Meet{" "}
                <span className="relative inline-block">
                  <span className="text-nclex-blue">Studium</span>
                  <span className="text-nclex-red"> CAT</span>
                  {/* gradient underline */}
                  <span className="absolute -bottom-0.5 left-0 right-0 h-[3px] rounded-full bg-gradient-to-r from-[#3e53a0] to-[#c04041]" />
                </span>
              </h2>

              <p className="mx-auto max-w-xl text-slate-500 text-base leading-relaxed mb-7">
                Your all-in-one Computer Adaptive Test platform — built like UWorld, Archer, and Bootcamp,
                but engineered to help Filipino nurses{" "}
                <span className="font-semibold text-slate-700">pass smarter</span>.
              </p>

              {/* Feature pills */}
              <div className="flex flex-wrap justify-center gap-2.5 mb-7">
                {PILLS.map((pill, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white/80 backdrop-blur-sm px-3.5 py-1.5 text-xs font-semibold text-slate-600 shadow-sm"
                  >
                    <span className="text-nclex-blue">{pill.icon}</span>
                    {pill.label}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <a
                href="https://home.studium.cat"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-nclex-blue px-7 py-3 text-sm font-bold text-white shadow-md shadow-nclex-blue/25 transition-all duration-300 hover:bg-[#2e3f7a] hover:shadow-lg hover:shadow-nclex-blue/30 hover:-translate-y-0.5"
              >
                Start Your Studium Today
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <p className="mt-2.5 text-[0.7rem] text-slate-400 tracking-wide">
                Practice, review, and pass with confidence
              </p>
            </motion.div>
          }
        >
          {/*
           * ══════════════════════════════════════════════════════
           * 📸  MEDIA INSERTION ZONE — currently: studium.jpg
           *
           * To swap the image, replace the <img> tag below with:
           *
           * GIF:
           *   <img src="/lovable-uploads/studium-demo.gif"
           *        alt="Studium CAT" className="w-full h-full object-cover object-top" />
           *
           * MP4 Video (autoplay, muted):
           *   <video src="/lovable-uploads/studium-demo.mp4"
           *          autoPlay muted loop playsInline
           *          className="w-full h-full object-cover object-top" />
           *
           * Loom / YouTube iframe:
           *   <iframe src="https://www.loom.com/embed/YOUR_VIDEO_ID"
           *           className="w-full h-full border-0"
           *           allow="autoplay; fullscreen" />
           * ══════════════════════════════════════════════════════
           */}
          <img
            src="/lovable-uploads/studium.jpg"
            alt="Studium CAT Dashboard"
            className="w-full h-full object-cover object-top"
            draggable={false}
          />
        </ContainerScroll>

      </section>
    </>
  );
};

export default ServicesGrid;
