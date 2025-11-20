import React from "react";
import { motion } from "framer-motion";

const CycleCalendar: React.FC = () => {
  return (
    <section className="relative py-20 bg-gradient-to-b from-white to-blue-50 font-sans overflow-hidden">
      {/* Floating subtle blobs */}
      <motion.div
        className="absolute top-[10%] left-[15%] w-72 h-72 bg-blue-300/20 rounded-full blur-3xl"
        animate={{ x: [0, 20, -20, 0], y: [0, -15, 15, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute bottom-[10%] right-[10%] w-80 h-80 bg-indigo-300/20 rounded-full blur-3xl"
        animate={{ x: [0, -20, 20, 0], y: [0, 20, -20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        {/* Title */}
        <h1 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-10 drop-shadow-sm">
          NCLEX Cycle Calendar
        </h1>

        {/* Image */}
        {/* Slider Container */}
        <div className="w-full max-w-3xl overflow-hidden rounded-3xl shadow-xl relative">
          <motion.div
            className="flex"
            animate={{ x: ["0%", "-100%", "-200%", "0%"] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* Slide 1 */}
            <img
              src="/lovable-uploads/cyclecalendar1.png"
              alt="Cycle Calendar Slide 1"
              className="w-full flex-shrink-0"
            />

            {/* Slide 2 */}
            <img
              src="/lovable-uploads/cyclecalendar2.png"
              alt="Cycle Calendar Slide 2"
              className="w-full flex-shrink-0"
            />

            {/* Slide 3 */}
            <img
              src="/lovable-uploads/cyclecalendar3.png"
              alt="Cycle Calendar Slide 3"
              className="w-full flex-shrink-0"
            />
              {/* Slide 4 */}
            <img
              src="/lovable-uploads/cyclecalendar4.png"
              alt="Cycle Calendar Slide 4"
              className="w-full flex-shrink-0"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CycleCalendar;
