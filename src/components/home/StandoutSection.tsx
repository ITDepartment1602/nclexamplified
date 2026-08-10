
import React from "react";
import { motion } from "framer-motion";
import {
  Award,
  DollarSign,
  Infinity,
  FileText,
  BarChart2,
  Users,
  Layers,
  Pill,
  Target,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import SectionHeader from "@/components/common/SectionHeader";

const features = [
  {
    icon: <Infinity className="h-10 w-10 text-nclex-blue" />,
    title: "Unlimited Review Until You Pass",
    description: "No expiration, no limits — attend as many cycles as you need. Learn from top-performing USRN passers with proven experience."
  },
  {
    icon: <Users className="h-10 w-10 text-nclex-blue" />,
    title: "Live, Interactive Zoom Classes",
    description: "Real-time coaching & discussion of ALL NCLEX concepts with regular updates aligned with NCLEX Next Gen (NGN) standards."
  },
  {
    icon: <FileText className="h-10 w-10 text-nclex-blue" />,
    title: "4,000+ NGN Question Bank",
    description: "Practice with trend-based NCLEX questions and understand the 'why' with detailed rationales, just like UWorld and Archer."
  },
  {
    icon: <BarChart2 className="h-10 w-10 text-nclex-blue" />,
    title: "94.7% Passing Rate",
    description: "Proven track record with 20,231+ nurses who achieved their American dream all over the world."
  },
  {
    icon: <Layers className="h-10 w-10 text-nclex-blue" />,
    title: "Amplified Dashboard Access",
    description: "Our very own website! Missed a class? Watch recordings anytime. Study at your own pace, anywhere, anytime."
  },
  {
    icon: <Award className="h-10 w-10 text-nclex-blue" />,
    title: "FREE Reviewer PDFs & Ebooks",
    description: "Care for the NCLEX RN, Practice and Exercises (4th Edition), Linda A. LaCharity – Prioritization & Delegation, and more."
  },
  {
    icon: <Target className="h-10 w-10 text-nclex-blue" />,
    title: "Simulated Mock Exams",
    description: "Adaptive style exams that train you under real-exam conditions with 4-hour full-length mock exams and rationales."
  },
  {
    icon: <DollarSign className="h-10 w-10 text-nclex-blue" />,
    title: "Most Affordable Program",
    description: "High-quality NCLEX preparation at the most competitive prices, making your American dream accessible to everyone."
  },
  {
    icon: <Pill className="h-10 w-10 text-nclex-blue" />,
    title: "Comprehensive Study Cycle",
    description: "50+ lectures per cycle, 20 NCLEX drills, specialized pharmacy and nursing skills training with the 'Amplified Way' method."
  }
];

const StandoutSection: React.FC = () => {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Why Choose Us"
          title={<>Why Choose <span className="text-nclex-blue">NCLEX <span className="text-nclex-red">Amplified</span>?</span></>}
          description={
            <>
              <strong>We prepare you to conquer the NCLEX with confidence!</strong> From world-class lecturers to unlimited reviews,
              from global accessibility to personalized mentorship, NCLEX Amplified gives you the competitive edge other review centers can't match.
            </>
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
            >
            <Card
              className="group relative h-full overflow-hidden border border-slate-200/60 bg-white/50 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-nclex-blue/5 hover:border-nclex-blue/20"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <CardContent className="p-6 pointer-events-none sm:p-8 relative z-10 flex flex-col h-full">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50/80 text-nclex-blue ring-1 ring-inset ring-blue-100/50 transition-all duration-300 pointer-events-none group-hover:text-white group-hover:shadow-[0_0_15px_rgba(62,83,160,0.3)]">
                  {React.cloneElement(feature.icon as React.ReactElement, { className: "h-6 w-6" })}
                </div>
                <h3 className="mb-3 text-lg font-bold tracking-tight text-slate-900 transition-colors group-hover:text-nclex-blue">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StandoutSection;
