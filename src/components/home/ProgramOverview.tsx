import React from "react";
import {
  Clock,
  CalendarDays,
  BookCheck,
  CheckCircle2,
  BookOpen,
  Video,
  FileText,
} from "lucide-react";

const features = [
  {
    icon: <BookCheck className="w-6 h-6 text-nclex-blue" />,
    text: "Concept Mastery – 32 Key Topics (160 Hours)",
  },
  {
    icon: <CheckCircle2 className="w-6 h-6 text-nclex-blue" />,
    text: "Question Drills – 21 Sessions (840 Questionnaires)",
  },
  {
    icon: <FileText className="w-6 h-6 text-nclex-blue" />,
    text: "Mock Exams – 6 Full-Length Exams (420 Questionnaires)",
  },
  {
    icon: <Video className="w-6 h-6 text-nclex-blue" />,
    text: "Final Coaching – 9 Sessions (72 Hours)",
  },
  {
    icon: <BookOpen className="w-6 h-6 text-nclex-blue" />,
    text: "NCLEX Secrets – Exclusive high-yield questionnaires",
  },
  {
    icon: <CalendarDays className="w-6 h-6 text-nclex-blue" />,
    text: "Smart Calendar tailored to your schedule",
  },
];

const ProgramOverview: React.FC = () => {
  return (
    <section className="pt-11 pb-4 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-gray-900 mb-4 tracking-wide">
            NCLEX Comprehensive Review Program
          </h2>

          <div className="w-20 h-1 bg-nclex-blue mx-auto mb-3 rounded-full"></div>
          <p className="text-gray-600 text-lg leading-relaxed">
            An intensive and structured review program tailored to help aspiring
            nurses successfully pass the NCLEX-RN on their first attempt.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* IMAGE */}
          <img
            src="../../../lovable-uploads/sea.png"
            alt="NCLEX Review Model Guide"
            className="w-full h-[520px] object-contain scale-100 lg:scale-105 transition-all"
          />

          {/* FEATURES SECTION */}
          <div>
            {/* DURATION TAG */}
            <div className="bg-nclex-blue text-white px-8 py-3 rounded-full inline-block mb-6 font-semibold">
              Program Duration: 1 Cycle = 4 Months
            </div>

            {/* SUBTITLE */}
            <h3 className="text-2xl font-bold text-gray-900 mb-5">
              What You’ll Get
            </h3>

            {/* FEATURES CARDS */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 bg-white p-4 rounded-lg border border-gray-200 hover:border-nclex-blue transition-all"
                >
                  <div className="p-2 rounded-md flex items-center justify-center bg-blue-50">
                    {feature.icon}
                  </div>
                  <p className="text-gray-700 font-medium leading-snug text-sm">
                    {feature.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramOverview;
