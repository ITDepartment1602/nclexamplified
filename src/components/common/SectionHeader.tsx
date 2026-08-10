import React from "react";
import { motion } from "framer-motion";

interface SectionHeaderProps {
  badge?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  accent?: "blue" | "red" | "none";
  align?: "center" | "left";
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  description,
  accent = "red",
  align = "center",
  className = "",
}) => {
  const alignClass = align === "center" ? "text-center mx-auto items-center" : "text-left items-start";
  const accentColor = accent === "red" ? "bg-nclex-red" : "bg-nclex-blue";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`flex flex-col max-w-3xl ${alignClass} mb-12 ${className}`}
    >
      {badge && (
        <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-slate-500 mb-5">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-nclex-blue" />
          {badge}
        </span>
      )}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight mb-4">
        {title}
      </h2>
      {accent !== "none" && (
        <div className={`w-20 h-1 ${accentColor} rounded-full mb-5`} />
      )}
      {description && (
        <p className="text-slate-500 text-base sm:text-lg leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeader;
