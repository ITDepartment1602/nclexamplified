import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";

const AboutHero: React.FC = () => {
  return (
    <section className="relative py-28 overflow-hidden font-sans">
      {/* ✨ Soft Blue-White Gradient Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(
            rgba(255,255,255,0.9),
            rgba(200,220,255,0.75)
          ), url('/lovable-uploads/aboutbg.png')`,
        }}
      />

      {/* ✅ Content Section */}
      <div className="relative container mx-auto px-6 text-center max-w-4xl">
        <Badge className="mb-6 bg-nclex-blue text-white px-4 py-1 text-sm font-small tracking-wide">
          About NCLEX Amplified
        </Badge>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#3E58A2] leading-[1.2] tracking-tight drop-shadow-md"
        >
          Empowering Filipino Nurses For
          <br />
          <span className="text-[#BE4143]">Global Success</span>
        </motion.h1>

        <p className="mt-8 text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto text-balance">
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
        </p>

        {/* 🌟 Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
          <motion.div
            className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-nclex-blue mb-4 flex items-center gap-3 tracking-tight">
              <CheckCircle className="w-6 h-6 text-nclex-blue" /> Our Mission
            </h2>
            <p className="text-gray-700 leading-relaxed text-base">
              To help all Filipino Nurses around the world pass the NCLEX Exam
              and achieve their American dream.
            </p>
          </motion.div>

          <motion.div
            className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-nclex-blue mb-4 flex items-center gap-3 tracking-tight">
              <CheckCircle className="w-6 h-6 text-nclex-blue" /> Our Vision
            </h2>
            <p className="text-gray-700 leading-relaxed text-base">
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
