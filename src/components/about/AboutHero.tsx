import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const AboutHero: React.FC = () => {
  // Ambient blobs stay static on mobile — the continuous transform + blur-3xl
  // repaint is expensive and not worth the battery/frame cost on phones.
  const isMobile = useIsMobile();

  return (
    <section className="relative py-24 lg:py-28 overflow-hidden font-sans">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(
            rgba(255,255,255,0.9),
            rgba(200,220,255,0.75)
          ), url('/lovable-uploads/aboutbg.png')`,
        }}
      />
      <motion.div
        className="absolute top-[10%] left-[8%] w-72 h-72 sm:w-96 sm:h-96 bg-blue-200/25 rounded-full blur-3xl"
        animate={isMobile ? undefined : { x: [0, 25, -25, 0], y: [0, -20, 20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[10%] right-[8%] w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] bg-indigo-200/25 rounded-full blur-3xl"
        animate={isMobile ? undefined : { x: [0, -30, 30, 0], y: [0, 25, -25, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ✅ Content Section */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Badge className="mb-6 bg-nclex-blue text-white px-4 py-1 text-sm tracking-wide rounded-full">
            About NCLEX Amplified
          </Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-nclex-blue leading-[1.2] tracking-tight drop-shadow-md"
        >
          Empowering Filipino Nurses For
          <br />
          <span className="text-nclex-red">Global Success</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.25 }}
          className="mt-8 text-lg md:text-xl text-slate-700 leading-relaxed max-w-3xl mx-auto text-balance">
          Founded in 2021,{" "}
          <span className="font-semibold text-nclex-blue">NCLEX </span>{" "}
          <span className="font-semibold text-nclex-red">Amplified </span>
          <span>Review Center</span> is the leading NCLEX Review Center in the
          Philippines with a proven{" "}
          <span className="font-semibold text-nclex-blue">
            94.7% passing rate
          </span>
          . We provide the most comprehensive, powerful, and proven NCLEX review
          experience with{" "}
          <span className="font-semibold text-nclex-blue">
            unlimited review until you pass
          </span>
          , helping{" "}
          <span className="font-semibold text-nclex-red">
            20,231+ Filipino nurses
          </span>{" "}
          achieve their American dream worldwide —{" "}
          <span className="font-semibold text-nclex-blue">
            USA, UK, Middle East & Canada.
          </span>
        </motion.p>

        {/* 🌟 Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
          <motion.div
            className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-slate-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-nclex-blue mb-4 flex items-center gap-3 tracking-tight">
              <CheckCircle className="w-6 h-6 text-nclex-blue" /> Our Mission
            </h2>
            <p className="text-slate-700 leading-relaxed text-base">
              To help all Filipino Nurses around the world pass the NCLEX Exam
              and achieve their American dream.
            </p>
          </motion.div>

          <motion.div
            className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-slate-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl  font-bold text-nclex-blue mb-4 flex items-center gap-3 tracking-tight">
              <CheckCircle className="w-6 h-6 text-nclex-blue" /> Our Vision
            </h2>
            <p className="text-slate-700 leading-relaxed text-base">
              To remain the most trusted NCLEX Review Program providing LEGIT
              Unlimited Review with high-quality teaching.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
