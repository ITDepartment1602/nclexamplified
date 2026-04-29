import React from "react";
import { motion } from "framer-motion";
import ThumbnailCarousel from "../ui/thumbnail-carousel";

const CycleCalendar: React.FC = () => {
  return (
    <section id="calendar" className="relative py-24 bg-white overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden opacity-30">
        <div className="absolute top-[-10%] right-[-10%] w-[40rem] h-[40rem] rounded-full bg-blue-50 blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40rem] h-[40rem] rounded-full bg-indigo-50 blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-[0.65rem] font-bold tracking-[0.3em] uppercase text-[#3e53a0] bg-blue-50 rounded-full border border-blue-100">
              Future Registered Nurses
            </span>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#141d2e] tracking-tight mb-6">
              NCLEX <span className="text-[#3e53a0]">Cycle Calendar</span>
            </h2>
            
            <div className="w-24 h-1.5 bg-[#c04041] rounded-full mb-8" />
            
            <p className="text-base sm:text-lg text-slate-500 max-w-2xl leading-relaxed">
              Plan your journey towards your USRN dream. Browse through our upcoming review cycles and find the schedule that best fits your preparation timeline.
            </p>
          </motion.div>
        </div>

        {/* Carousel Component */}
        <motion.div
           initial={{ opacity: 0, scale: 0.98 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, delay: 0.2 }}
        >
          <ThumbnailCarousel />
        </motion.div>

        {/* Bottom CTA / Information */}
        <div className="mt-20 text-center">
            <p className="text-sm font-medium text-slate-400">
              * Schedules are subject to change based on actual enrollment and holiday adjustments.
            </p>
        </div>
      </div>
    </section>
  );
};

export default CycleCalendar;

