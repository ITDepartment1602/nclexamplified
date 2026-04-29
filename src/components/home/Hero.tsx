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
    <div className="relative pt-20 pb-10 overflow-hidden font-sans">
      {/* 🌤️ Lightened Background with Blue-White Gradient */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(
            rgba(255, 255, 255, 0.36),
            rgba(90, 130, 200, 0.6)
          ), url('/lovable-uploads/bgamp.png')`,
        }}
      />

      {/* 🔵 Soft Animated Blobs */}
      <motion.div
        className="absolute top-[15%] left-[10%] w-72 h-72 sm:w-96 sm:h-96 bg-blue-400/25 rounded-full blur-3xl"
        animate={{
          x: [0, 25, -25, 0],
          y: [0, -20, 20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-[10%] right-[8%] w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-indigo-300/25 rounded-full blur-3xl"
        animate={{
          x: [0, -30, 30, 0],
          y: [0, 25, -25, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* 🌀 Soft Rotating Dashed Outline */}
      <motion.div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2
             w-[400px] h-[400px] sm:w-[700px] sm:h-[700px]
             rounded-full border-[2px] border-dashed border-blue-300/20"
        animate={{ rotate: 360 }}
        transition={{
          duration: 80,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* 🔵 Floating Rotating Small Shape */}
      <motion.div
        className="absolute bottom-[20%] left-[15%] w-10 h-10 sm:w-14 sm:h-14
             bg-blue-200/25 rounded-full"
        animate={{
          x: [0, -25, 25, 0],
          y: [0, 15, -15, 0],
          rotate: [0, 360, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* 🔵 Floating Bubbles */}
      {Array.from({ length: 10 }).map((_, i) => {
        const size = Math.random() * 20 + 10; // same for width & height
        return (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/25 backdrop-blur-md"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              top: `${Math.random() * 80 + 10}%`,
              left: `${Math.random() * 90 + 5}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.3, 0.9, 0.3],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 10 + Math.random() * 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        );
      })}

      {/* 🧭 TEXT SECTION */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 sm:gap-12">
          <div className="space-y-6 max-w-2xl p-6 rounded-2xl relative text-center sm:text-left mx-auto lg:ml-[-5rem] xl:ml-[-8rem]">
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent rounded-2xl pointer-events-none" />

            {/* Tagline */}
            <div className="flex justify-center sm:justify-start items-center relative z-10">
              <Sparkles className="text-white mr-2 w-5 h-5" />
              <span className="text-sm font-medium text-white tracking-wide uppercase">
                Your Ultimate Key to{" "}
                <span className="text-white font-bold">NCLEX</span>{" "}
                <span className="text-nclex-red font-black italic drop-shadow-[0_2px_4px_rgba(255,255,255,0.3)] ml-1">Success!</span>
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl font-sans font-bold leading-tight relative z-10">
              <span className="text-white drop-shadow-md">NCLEX</span>{" "}
              <span className="text-white bg-nclex-blue/60 backdrop-blur-sm px-4 py-1.5 rounded-full drop-shadow-lg inline-block transform -rotate-1 mt-1 mb-2 tracking-wide font-black border border-white/20">Amplified</span>{" "}
              <br className="hidden sm:block" />
              <span className="text-[#f1f5f9] drop-shadow-md font-semibold tracking-tight">Review Center</span>
            </h1>

            {/* Quote */}
            <p className="text-base sm:text-lg text-white/95 leading-relaxed relative z-10 italic mt-6">
              "Make time for the NCLEX review, your American dream begins once
              you pass the Exam"
            </p>

            {/* Description */}
            <p className="text-sm sm:text-base text-white/85 relative z-10">
              Why settle for the usual when you can have the most complete,
              powerful, and proven NCLEX review experience? With a{" "}
              <span className="text-blue-200 font-semibold">
                94.7% passing rate
              </span>{" "}
              and unlimited review until you pass!
            </p>

            {/* CTA Buttons */}
            <div className="pt-6 flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-4 sm:gap-6 relative z-10">
              <Button
                onClick={handleEnrollClick}
                className="bg-nclex-red hover:bg-red-600 rounded-full px-8 py-5 text-base sm:text-lg w-full sm:w-auto shadow-lg shadow-red-200"
              >
                Enroll Now!
              </Button>

              <Button className="border-white text-black bg-white hover:bg-transparent hover:text-white rounded-full px-8 py-5 text-base sm:text-lg border-2 w-full sm:w-auto">
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
            <p className="text-xs sm:text-sm mt-3 text-white/80 font-medium relative z-10">
              Join{" "}
              <span className="text-nclex-red font-bold drop-shadow-sm mx-1">
                20,231+ nurses
              </span>{" "}
              who achieved their American dream all over the world
            </p>
          </div>
        </div>
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
