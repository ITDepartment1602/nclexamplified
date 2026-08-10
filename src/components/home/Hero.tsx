import React, { useState } from "react";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import EnrollmentSlideshow from "./EnrollmentSlideshow";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);

  const handleEnrollClick = () => {
    setIsEnrollModalOpen(true);
  };

  return (
    <div className="relative min-h-[85vh] flex items-center overflow-hidden font-sans">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/video/hero.mp4" type="video/mp4" />
      </video>

      {/* Dark gradient for text readability — soft vignette centered on mobile (text is centered), left-weighted from sm up (text is left-aligned) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_95%_70%_at_50%_45%,rgba(0,0,0,0.55)_0%,rgba(0,0,0,0.3)_55%,rgba(0,0,0,0.1)_100%)] sm:bg-gradient-to-r sm:from-black/80 sm:via-black/45 sm:to-black/20 pointer-events-none" />
      {/* Subtle bottom fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40 pointer-events-none" />

      {/* TEXT SECTION */}
      <div className="container mx-auto xl:flex xl:justify-start px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-24 pb-16 sm:py-32">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="space-y-3 sm:space-y-6 max-w-2xl px-2 sm:p-6 rounded-2xl relative text-center sm:text-left mx-auto xl:ml-[1rem] 2xl:ml-[-6rem]"
        >
          {/* Tagline */}
          <div className="flex justify-center sm:justify-start items-center relative z-10">
            <Sparkles className="text-white mr-2 w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
            <p className="text-xs sm:text-sm font-medium text-shadow-sm text-white tracking-wide uppercase">
              Your Ultimate Key to{" "}
              <span className="text-white font-bold">NCLEX</span>{" "}
              <span className="text-[#FFEB01] text-sm sm:text-lg font-black italic ml-0.5">
                Success!
              </span>
            </p>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold leading-tight relative z-10">
            <span className="text-white drop-shadow-md">NCLEX</span>{" "}
            <span className="text-white bg-nclex-blue/60 backdrop-blur-sm px-3 sm:px-4 py-1 sm:py-1.5 rounded-full drop-shadow-lg inline-block transform -rotate-3 hover:rotate-0 cursor-pointer hover:shadow-md duration-300 mt-1 mb-1 tracking-wide font-black border border-white/20">
              Amplified
            </span>{" "}
            <br className="hidden sm:block" />
            <span className="text-[#f1f5f9] drop-shadow-md font-semibold tracking-tight">
              Review Center
            </span>
          </h1>

          {/* Quote */}
          <p className="text-sm sm:text-lg text-white/95 leading-relaxed relative z-10 italic">
            "Make time for the NCLEX review, your American dream begins once you
            pass the Exam"
          </p>

          {/* Description */}
          <p className="text-xs sm:text-base text-white/85 relative z-10 leading-relaxed">
            Why settle for the usual when you can have the most complete,
            powerful, and proven NCLEX review experience? With a{" "}
            <span className="text-[#FFEB01] font-semibold">
              94.7% passing rate
            </span>{" "}
            and unlimited review until you pass!
          </p>

          {/* CTA Buttons */}
          <div className="pt-2 sm:pt-6 flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-3 relative z-10">
            <Button
              onClick={handleEnrollClick}
              className="bg-red-600 border-red-600 hover:border-red-500 border-2 hover:bg-red-500 rounded-full px-8 py-4 sm:py-5 text-sm sm:text-lg w-full sm:w-auto shadow-lg"
            >
              Enroll Now!
            </Button>

            <Button className="bg-white text-stone-900 border-white hover:bg-zinc-200 hover:border-zinc-200 border-2 rounded-full px-8 py-4 sm:py-5 text-sm sm:text-lg w-full sm:w-auto shadow-lg">
              <a
                href="https://nclexamplifiedreviewcenter.com/nclex/video%20tutorials/video/guest.php?bundle_name=BUNDLE&course_name=Demo"
                target="_blank"
                rel="noopener noreferrer"
              >
                Try our Dashboard
              </a>
            </Button>
          </div>

          {/* Small Footer Text */}
          <p className="text-xs sm:text-sm text-white/80 font-medium relative z-10">
            Join{" "}
            <span className="text-white text-base sm:text-lg font-bold drop-shadow-sm mx-1">
              20,231+ nurses
            </span>{" "}
            who achieved their American dream all over the world
          </p>
        </motion.div>
      </div>

      {/* Enrollment Modal */}
      <EnrollmentSlideshow
        isOpen={isEnrollModalOpen}
        onOpenChange={setIsEnrollModalOpen}
      />
    </div>
  );
};

export default Hero;
