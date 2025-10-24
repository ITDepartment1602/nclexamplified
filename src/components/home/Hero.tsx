import React, { useState } from "react";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import EnrollmentSlideshow from "./EnrollmentSlideshow";
import { motion } from "framer-motion";

const floatingVariants = {
  animate: {
    y: [0, 20, 0],
    x: [0, 10, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const Hero: React.FC = () => {
  const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);
  const handleEnrollClick = () => setIsEnrollModalOpen(true);

  return (
    <div className="relative pt-20 pb-20 overflow-hidden font-sans">
      {/* Background gradient overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(30, 41, 59, 0.9), 
              rgba(37, 99, 235, 0.85)
            ), 
            url('/lovable-uploads/bgamp.png')
          `,
        }}
      />

      {/* Floating abstract shapes (Animated) */}
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute top-10 left-10 w-40 h-40 bg-blue-400/20 blur-3xl rounded-full"
      ></motion.div>

      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute bottom-20 right-10 w-56 h-56 bg-indigo-500/30 blur-2xl rounded-full"
        style={{ animationDelay: "1s" }}
      ></motion.div>

      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute top-1/3 right-1/4 w-32 h-32 bg-pink-400/30 blur-2xl rounded-full"
        style={{ animationDelay: "2s" }}
      ></motion.div>

      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute bottom-1/3 left-1/4 w-24 h-24 bg-yellow-400/20 blur-2xl rounded-full"
        style={{ animationDelay: "3s" }}
      ></motion.div>

      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute top-1/2 left-[10%] w-14 h-14 bg-blue-200/30 blur-xl rounded-full"
        style={{ animationDelay: "4s" }}
      ></motion.div>

      {/* Glowing gradient ring */}
      <motion.div
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-gradient-to-tr from-blue-400/30 via-purple-500/30 to-pink-400/20 blur-[100px] rounded-full"
      ></motion.div>

      {/* Hero Content */}
      <div className="container mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {/* Left Content */}
          <div className="space-y-6 max-w-2xl">
            <div className="flex items-center">
              <Sparkles className="text-white mr-2" />
              <span className="text-sm font-medium text-white tracking-wide uppercase">
                Your Ultimate Key to{" "}
                <span className="text-white font-bold">NCLEX</span>{" "}
                <span className="text-blue-300 font-bold">Success!</span>
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-serif font-bold leading-tight text-white drop-shadow-md">
              <span className="text-white">NCLEX</span>
              <span className="text-blue-300"> Amplified</span> Review Center
            </h1>

            <p className="text-lg text-white/90 italic">
              "Make time for the NCLEX review, your American dream begins once
              you pass the Exam"
            </p>

            <p className="text-base text-white/80 leading-relaxed">
              Why settle for the usual when you can have the most complete,
              powerful, and proven NCLEX review experience? With{" "}
              <strong>94.7% passing rate</strong> and{" "}
              <strong>unlimited review until you pass!</strong>
            </p>

            <div className="pt-6 flex flex-col sm:flex-row items-center gap-4">
              <Button
                onClick={handleEnrollClick}
                className="bg-red-600 hover:bg-red-700 text-white rounded-full px-8 py-6 text-lg shadow-lg shadow-red-200 transition-all duration-300"
              >
                Enroll Now!
              </Button>

              <Button className="border-white text-black bg-white hover:bg-transparent hover:text-white rounded-full px-8 py-6 text-lg border-2 transition-all duration-300">
                <a href="https://nclexamplifiedreviewcenter.com/nclex/video%20tutorials/video/guest.php?bundle_name=BUNDLE&course_name=Demo">
                  Dashboard Demo
                </a>
              </Button>
            </div>

            <p className="text-sm mt-3 text-white/80 font-medium">
              Join 20,231+ nurses who achieved their American dream all over the
              world 🌍
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
