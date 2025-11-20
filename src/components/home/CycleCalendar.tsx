import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CycleCalendar: React.FC = () => {
  const slides = [
    "/lovable-uploads/cyclecalendar1.png",
    "/lovable-uploads/cyclecalendar2.png",
    "/lovable-uploads/cyclecalendar3.png",
    "/lovable-uploads/cyclecalendar4.png",
  ];

  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative py-20 bg-gradient-to-b from-white to-blue-50 font-sans overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        <h1 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-10 drop-shadow-sm">
          NCLEX Cycle Calendar
        </h1>

        <div className="w-full max-w-3xl overflow-hidden rounded-3xl shadow-xl relative">
          {/* Slider wrapper */}
          <motion.div
            className="flex w-full"
            animate={{ x: `-${index * 100}%` }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
          >
            {slides.map((slide, i) => (
              <div key={i} className="flex-shrink-0 w-full">
                <img
                  src={slide}
                  alt={`Slide ${i + 1}`}
                  className="w-full rounded-3xl"
                />
              </div>
            ))}
          </motion.div>

          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-4 -translate-y-1/2 bg-gray-900/60 text-white px-4 py-2 rounded-full hover:bg-gray-900 transition"
          >
                 {"<"}
          </button>

          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 -translate-y-1/2 bg-gray-900/60 text-white px-4 py-2 rounded-full hover:bg-gray-900 transition"
          >
            {">"}
          </button>
        </div>

        <div className="flex gap-3 mt-6">
          {slides.map((_, i) => (
            <div
              key={i}
              onClick={() => setIndex(i)}
              className={`w-4 h-4 rounded-full cursor-pointer transition-all ${
                i === index ? "bg-blue-600 scale-110" : "bg-gray-300"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CycleCalendar;
