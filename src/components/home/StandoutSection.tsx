
import React from "react";
import { 
  Award, 
  DollarSign, 
  Infinity, 
  FileText, 
  BarChart2, 
  Users, 
  Layers, 
  Pill, 
  Target
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold font-serif text-gray-900 mb-4">
            Why Choose NCLEX Amplified? We Don't Just Prepare You to Pass...
          </h2>
          <div className="w-20 h-1 bg-nclex-blue mx-auto mb-6"></div>
          <p className="text-gray-600">
            <strong>We prepare you to conquer the NCLEX with confidence!</strong> From world-class lecturers to unlimited reviews, 
            from global accessibility to personalized mentorship, NCLEX Amplified gives you the competitive edge other review centers can't match.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-blue-100 hover:shadow-md transition-all duration-300 h-full">
              <CardContent className="p-6">
                <div className="rounded-full w-16 h-16 bg-blue-100 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StandoutSection;
