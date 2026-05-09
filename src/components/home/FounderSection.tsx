
import React from "react";
import { Trophy } from "lucide-react";
import { motion } from "framer-motion";

const founder = {
  name: "Maverick Leocadio",
  role: "President · COO · CFO",
  image: "/lovable-uploads/99a4af79-1b39-4349-849a-f14e95b6bf74.png",
  quote: "Empowering Filipino nurses worldwide: bridging dreams and realities.",
  awards: [
    { year: "2023", title: "Youngest CEO of the Year" },
    { year: "2024", title: "CEO of the Year" },
  ],
  description1:
    "Maverick Dela Cruz Leocadio is the powerhouse leader behind NCLEX Amplified Review Center, where he holds the roles of President, Chief Financial Officer, and Chief Operating Officer. As a true jack of all trades, Maverick leads with unmatched dedication, strategic insight, and a relentless commitment to uplifting future Filipino nurses.",
  description2:
    "He oversees every aspect of the organization—from financial planning and daily operations to long-term growth and innovation. Under his hands-on leadership, NCLEX Amplified has become a trusted name in nursing licensure review, delivering high-quality, accessible education that helps aspiring nurses reach their goals with confidence.",
};

const FounderSection: React.FC = () => {
  return (
    <section className="relative py-16 overflow-hidden bg-white font-sans">

      {/* === Ambient background === */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-50 blur-3xl opacity-60" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-indigo-50/50 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">

        {/* === Section header === */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-slate-500 mb-5">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-nclex-blue" />
            Leadership
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            Meet Our Founder
          </h2>
          <p className="text-slate-500 text-base leading-relaxed">
            The visionary leader behind{" "}
            <span className="text-nclex-blue font-bold">NCLEX</span>
            <span className="text-nclex-red font-bold"> Amplified</span> — dedicated to
            transforming nursing education and amplifying your American Dream.
          </p>
        </motion.div>

        {/* === Main card (NO border, pure shadow) === */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto max-w-5xl"
        >
          <div className="relative overflow-hidden rounded-3xl bg-white shadow-[0_20px_80px_-10px_rgba(62,83,160,0.15)] p-8 sm:p-12">

            {/* Inner decorative glow */}
            <div className="pointer-events-none absolute -top-24 -right-24 w-80 h-80 rounded-full bg-blue-100/40 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-indigo-100/30 blur-2xl" />

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-10 lg:gap-16">

              {/* ── LEFT: Image ── */}
              <div className="shrink-0 flex justify-center md:justify-start">
                <div className="relative">
                  {/* Glow ring behind photo */}
                  <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-[#3e53a0]/20 to-transparent blur-xl" />
                  <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-[#3e53a0]/10 to-indigo-300/10" />
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="relative z-10 h-[340px] w-[260px] object-cover object-top rounded-2xl shadow-2xl shadow-nclex-blue/20 bg-[#e9eefa]"
                  />
                  {/* Name plate on image */}
                  {/* <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-20 whitespace-nowrap bg-white shadow-lg rounded-full px-4 py-1.5 text-xs font-bold text-nclex-blue border border-slate-100 tracking-wide uppercase">
                    {founder.role}
                  </div> */}
                </div>
              </div>

              {/* ── RIGHT: Info ── */}
              <div className="flex-1 text-center md:text-left">

                {/* Name + Role */}
                <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight mb-1">
                  {founder.name}
                </h3>
                <p className="text-nclex-blue font-semibold text-xs uppercase tracking-[0.2em] mb-6">
                  {founder.role}
                </p>

                {/* Quote */}
                <blockquote className="relative mb-7 pl-5 border-l-[3px] border-nclex-red">
                  <p className="text-slate-700 italic font-medium text-base sm:text-lg leading-relaxed">
                    "{founder.quote}"
                  </p>
                </blockquote>

                {/* Award badges */}
                <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-7">
                  {founder.awards.map((award, i) => (
                    <div
                      key={i}
                      className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-200/70 px-4 py-1.5 shadow-sm"
                    >
                      <Trophy className="h-3.5 w-3.5 text-amber-500 shrink-0" />
                      <span className="text-xs font-bold text-amber-700 whitespace-nowrap">
                        {award.year}:
                      </span>
                      <span className="text-xs font-semibold text-amber-800 whitespace-nowrap">
                        {award.title}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Divider */}
                <div className="my-5 h-px w-full bg-slate-100" />

                {/* Description */}
                <div className="space-y-3 text-sm leading-[1.8] text-slate-500">
                  <p>{founder.description1}</p>
                  <p>{founder.description2}</p>
                </div>
              </div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default FounderSection;
