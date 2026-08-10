import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const tags = [
  "Comprehensive",
  "Personalized",
  "Affordable",
  "Up-to-date",
  "Unlimited",
  "Accessible",
];

const ServicesHero: React.FC = () => {
  return (
    <section className="relative py-24 lg:py-28 overflow-hidden font-sans">
      {/* Ambient background — shared with About/Contact heroes */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50" />
      <motion.div
        className="absolute top-[10%] left-[8%] w-72 h-72 sm:w-96 sm:h-96 bg-blue-200/30 rounded-full blur-3xl"
        animate={{ x: [0, 25, -25, 0], y: [0, -20, 20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[10%] right-[8%] w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] bg-indigo-200/30 rounded-full blur-3xl"
        animate={{ x: [0, -30, 30, 0], y: [0, 25, -25, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center"
        >
          <Badge className="mb-5 bg-nclex-blue text-white border-transparent tracking-wide px-4 py-1 rounded-full">
            Our Services
          </Badge>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
            <span className="text-nclex-blue">NCLEX</span>{" "}
            <span className="text-nclex-red">AMPLIFIED</span> — Your Ultimate Key to NCLEX Success!
          </h1>
          <p className="text-lg text-slate-700 mb-4 italic">
            "Make time for the NCLEX review, your American dream begins once you pass the Exam"
          </p>
          <p className="text-base text-slate-600 max-w-2xl mx-auto">
            Why settle for the usual when you can have the most complete, powerful, and proven NCLEX review experience?
          </p>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
            {tags.map((tag, i) => (
              <motion.div
                key={tag}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.05, ease: "easeOut" }}
                className="px-6 py-3 bg-gradient-to-r from-blue-100 to-blue-50 rounded-full text-nclex-blue text-sm font-semibold border border-blue-200 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
              >
                {tag}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesHero;
