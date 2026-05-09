import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ThumbnailCarousel from "../ui/thumbnail-carousel";
import SectionHeader from "../common/SectionHeader";

const CycleCalendar: React.FC = () => {
  return (
    <section id="calendar" className="relative py-14 bg-white overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden opacity-30">
        <div className="absolute top-[-10%] right-[-10%] w-[40rem] h-[40rem] rounded-full bg-blue-50 blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40rem] h-[40rem] rounded-full bg-indigo-50 blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <SectionHeader
              badge="Future Registered Nurses"
              title={
                <>
                  NCLEX <span className="text-nclex-blue">Cycle Calendar</span>
                </>
              }
              description="Plan your journey towards your USRN dream. Browse through our
              upcoming review cycles and find the schedule that best fits your
              preparation timeline."
            />
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
        <div className="mt-10 text-center">
          <p className="text-sm font-medium text-slate-400">
            * Schedules are subject to change based on actual enrollment and
            holiday adjustments.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CycleCalendar;
