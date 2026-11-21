
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
  GraduationCap,
  Target,
  Users,
  ArrowUpRight,
} from "lucide-react";
import SectionHeader from "@/components/common/SectionHeader";

/* ─── Services, grouped so the page reads as three clear promises ─── */
type Service = { icon: React.ElementType; title: string; description: string };

const GROUPS: { key: string; label: string; blurb: string; icon: React.ElementType; items: Service[] }[] = [
  {
    key: "learn",
    label: "Learn",
    blurb: "Live classes and a proven study cycle",
    icon: GraduationCap,
    items: [
      {
        icon: Video,
        title: "Live, Interactive Zoom Classes",
        description:
          "Real-time coaching & discussion of ALL NCLEX concepts. Regular updates aligned with NCLEX Next Gen (NGN) standards.",
      },
      {
        icon: CalendarClock,
        title: '"Amplified Way" Study Cycle',
        description:
          "50+ lectures per cycle, 20 NCLEX drills, 4-hour full-length mock exams with rationales. 1 Cycle = 4 Months.",
      },
      {
        icon: LayoutDashboard,
        title: "Amplified Dashboard",
        description:
          "Missed a class? Watch recordings anytime on our own website. Study at your own pace, anywhere.",
      },
    ],
  },
  {
    key: "practice",
    label: "Practice",
    blurb: "Exam-style questions until it clicks",
    icon: Target,
    items: [
      {
        icon: FileQuestion,
        title: "Full NGN Question Bank",
        description:
          '4,000+ trend-based practice questions with detailed rationales, so you understand the "why" behind each answer.',
      },
      {
        icon: ClipboardCheck,
        title: "Simulated Mock Exams",
        description:
          "Adaptive-style exams under real-exam conditions, plus quizzes, topic drills, and post-lecture mastery activities.",
      },
      {
        icon: MessagesSquare,
        title: "UWorld, Archer & Bootcamp-Style Discussions",
        description: "Live Zoom Q&A drills that sharpen test-taking skills, with answer breakdowns in real time.",
      },
    ],
  },
  {
    key: "support",
    label: "Support",
    blurb: "With you until you pass",
    icon: HeartHandshake,
    items: [
      {
        icon: InfinityIcon,
        title: "Unlimited Review Until You Pass",
        description:
          "No expiration, no limits. Attend as many cycles as you need, taught by top-performing USRN passers.",
      },
      {
        icon: BookOpenCheck,
        title: "FREE Reviewer PDFs & Ebooks",
        description:
          "Care for the NCLEX RN (4th Ed.), LaCharity's Prioritization & Delegation, NCLEX Success Guide & more.",
      },
      {
        icon: Users,
        title: "Motivational Support Community",
        description: "Daily reminders, progress tracking, and peer encouragement. You'll never feel alone.",
      },
    ],
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
      {/* ════════ What's included — three groups ════════ */}
      <section className="bg-gradient-to-b from-white to-slate-50 py-16 font-sans lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="What's Included"
            title={<>Everything You Need to <span className="text-nclex-blue">Pass the NCLEX</span></>}
            description="One program covers how you learn, how you practice, and who supports you along the way."
          />

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-7">
            {GROUPS.map((group, gi) => {
              const GroupIcon = group.icon;
              return (
                <motion.div
                  key={group.key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: gi * 0.08, ease: "easeOut" }}
                  className="flex flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-[0_1px_2px_rgba(15,23,42,0.04),0_24px_48px_-32px_rgba(34,48,106,0.45)] transition-shadow duration-300 hover:shadow-[0_1px_2px_rgba(15,23,42,0.04),0_30px_60px_-30px_rgba(34,48,106,0.5)]"
                >
                  {/* group header — slim brand-navy band */}
                  <div className="relative flex items-center gap-3.5 overflow-hidden bg-gradient-to-r from-nclex-blue to-[#2a3a7d] px-6 py-4 text-white">
                    <div aria-hidden className="pointer-events-none absolute -right-10 -top-14 h-36 w-36 rounded-full bg-[radial-gradient(closest-side,rgba(255,255,255,0.12),transparent)]" />
                    <span className="relative inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10 ring-1 ring-inset ring-white/20">
                      <GroupIcon className="h-[18px] w-[18px]" strokeWidth={1.75} />
                    </span>
                    <div className="relative min-w-0 flex-1">
                      <h3 className="text-base font-semibold leading-tight tracking-tight !text-white">{group.label}</h3>
                      <p className="mt-0.5 truncate text-xs !text-white/75">{group.blurb}</p>
                    </div>
                    <span className="relative shrink-0 rounded-full bg-white/10 px-2.5 py-1 text-[0.6rem] font-medium uppercase tracking-[0.14em] text-white/80 ring-1 ring-inset ring-white/15">
                      {group.items.length} services
                    </span>
                  </div>

                  {/* the services in this group */}
                  <ul className="flex flex-1 flex-col px-2 py-2">
                    {group.items.map((service, si) => {
                      const Icon = service.icon;
                      return (
                        <li
                          key={service.title}
                          className={`group relative flex gap-4 rounded-2xl px-4 py-4 transition-colors duration-300 hover:bg-[#f6f7fc] ${
                            si > 0 ? "before:absolute before:inset-x-4 before:top-0 before:h-px before:bg-slate-100 hover:before:opacity-0" : ""
                          }`}
                        >
                          <Icon className="mt-0.5 h-5 w-5 shrink-0 text-nclex-blue" strokeWidth={1.6} />
                          <div className="min-w-0 flex-1">
                            <h4 className="flex items-start justify-between gap-2 text-[0.95rem] font-semibold leading-snug tracking-tight text-slate-900">
                              {service.title}
                              <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 -translate-x-1 text-nclex-blue opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                            </h4>
                            <p className="mt-1 text-sm leading-relaxed text-slate-500">{service.description}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════════ Studium CAT — Premium Section ════════ */}
      <section className="relative bg-white overflow-hidden font-sans">

        {/* Soft ambient glow */}
        {/* soft brand light — radial gradients that fade out well inside the section,
            so nothing is cut off at its edges */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[420px] w-[900px] max-w-full -translate-x-1/2 bg-[radial-gradient(closest-side,rgba(62,83,160,0.07),transparent)]" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-white" />
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
                <span className="text-nclex-blue">Studium CAT</span>
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
