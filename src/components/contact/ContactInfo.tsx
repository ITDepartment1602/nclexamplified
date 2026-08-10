import React from "react";
import {
  MessageCircle,
  HelpCircle,
  Facebook,
  ExternalLink,
  Phone,
  Mail,
  ArrowUpRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const contactSections = [
  {
    icon: MessageCircle,
    tag: "Official",
    title: "NCLEX Amplified Official Page",
    href: "https://www.facebook.com/NCLEXAmplifiedReviewCenter",
    phone: "09261021491",
    email: "amplifiedreviewcenter@gmail.com",
    accent: "from-blue-50 to-indigo-50",
  },
  {
    icon: MessageCircle,
    tag: "Consultation",
    title: "NCLEX Amplified Consultation",
    href: "https://www.facebook.com/NCLEXAmplifiedMasteryConsultation",
    phone: "09261021491",
    email: "consultation.amplifiedrc@gmail.com",
    accent: "from-blue-50 to-sky-50",
  },
  {
    icon: HelpCircle,
    tag: "Tech Support",
    title: "NCLEX Amplified Technical Support",
    href: "https://www.facebook.com/NCLEXAmplifiedTechSupport",
    phone: "09858099011",
    email: "nclexamplifiedtechnical@gmail.com",
    accent: "from-indigo-50 to-blue-50",
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const ContactInfo: React.FC = () => {
  return (
    <section className="py-8 pb-24 bg-white relative overflow-hidden font-sans">
      {/* Subtle ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full bg-blue-50/60 blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            Connect with Our Team of{" "}
            <span className="text-nclex-blue">NCLEX Experts</span>
          </h2>
          <p className="text-slate-500 text-base leading-relaxed">
            Fast support. Real answers. Let's build your NCLEX success plan
            together.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14"
        >
          {contactSections.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div key={i} variants={itemVariants}>
                <div className="group relative h-full flex flex-col rounded-2xl border border-slate-200/70 bg-white overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-nclex-blue/8 hover:border-nclex-blue/25">
                  {/* Top gradient strip */}
                  <div
                    className={`h-1.5 w-full bg-gradient-to-r ${s.accent} group-hover:bg-nclex-blue transition-all duration-300`}
                    style={{ background: undefined }}
                  >
                    <div className="h-full bg-gradient-to-r from-nclex-blue/60 to-indigo-400/60" />
                  </div>

                  <div className="flex flex-col flex-1 p-7">
                    {/* Icon + tag */}
                    <div className="flex items-start justify-between mb-5">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 ring-1 ring-inset ring-blue-100 transition-all duration-300 ">
                        <Icon className="h-6 w-6 text-nclex-blue transition-colors duration-300 group-hover:text-white" />
                      </div>
                      <span className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-1 text-[0.6rem] font-bold uppercase tracking-wider text-slate-500">
                        {s.tag}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-sm font-bold text-slate-900 mb-5 leading-snug transition-colors duration-300 group-hover:text-nclex-blue">
                      {s.title}
                    </h3>

                    {/* Contact details */}
                    <div className="space-y-3 mb-6 flex-1">
                      <div className="flex items-center gap-3">
                        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-slate-50 border border-slate-100">
                          <Phone className="h-3.5 w-3.5 text-nclex-blue" />
                        </div>
                        <span className="text-xs text-slate-600 font-medium">
                          {s.phone}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-slate-50 border border-slate-100">
                          <Mail className="h-3.5 w-3.5 text-nclex-blue" />
                        </div>
                        <span className="text-xs text-slate-600 font-medium break-all">
                          {s.email}
                        </span>
                      </div>
                    </div>

                    {/* Messenger link */}
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto flex items-center justify-between rounded-xl border border-slate-200 px-4 py-2.5 text-xs font-semibold text-nclex-blue transition-all duration-300 hover:text-white hover:border-nclex-blue group/btn"
                    >
                      <div className="flex items-center gap-2">
                        <Facebook className="h-4 w-4" />
                        Open Facebook Page
                      </div>
                      <ArrowUpRight className="h-3.5 w-3.5 opacity-50 group-hover/btn:opacity-100 transition-opacity" />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto"
        >
          <Button
            asChild
            className="bg-nclex-blue hover:bg-blue-800 h-12 text-sm font-semibold flex-1 rounded-xl shadow-md shadow-nclex-blue/20"
          >
            <a
              href="https://nclexamplifiedreviewcenter.com/nclex/login"
              className="flex items-center justify-center gap-2"
            >
              Student Login
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </Button>

          <Button
            asChild
            variant="outline"
            className="border-slate-200 hover:border-nclex-blue hover:text-nclex-blue h-12 text-sm font-semibold flex-1 rounded-xl"
          >
            <a
              href="https://www.facebook.com/NCLEXAmplifiedReviewCenter"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2"
            >
              <Facebook className="h-4 w-4" />
              Facebook Page
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactInfo;
