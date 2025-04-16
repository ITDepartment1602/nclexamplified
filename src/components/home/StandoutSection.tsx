
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
    icon: <Award className="h-10 w-10 text-purple-700" />,
    title: "The Leading and Most Awarded Center",
    description: "Numerous individual customers have recognized NCLEX Amplified as the Most Outstanding Review Center in the Philippines."
  },
  {
    icon: <DollarSign className="h-10 w-10 text-purple-700" />,
    title: "Most Affordable Review Program",
    description: "NCLEX Amplified Review Center is a place where a high level of learning for everyone is passed."
  },
  {
    icon: <Infinity className="h-10 w-10 text-purple-700" />,
    title: "With Unlimited Review Until you Pass",
    description: "You have Free Unlimited reviews until you Pass the Exam 94.7% of Our Students Pass the NCLEX Exam on Their First Attempt."
  },
  {
    icon: <FileText className="h-10 w-10 text-purple-700" />,
    title: "Consistently Updated Materials",
    description: "Our review materials are consistently updated to align with the latest EXAM in the NCLEX world."
  },
  {
    icon: <BarChart2 className="h-10 w-10 text-purple-700" />,
    title: "94.7% Passing Rate",
    description: "2021-2022 NCLEX Amplified Pass Rates show excellence across multiple categories of candidates, U.S. and international."
  },
  {
    icon: <Users className="h-10 w-10 text-purple-700" />,
    title: "Personalized 1-on-1 Consultation",
    description: "The only Review Center that offers personalized NCLEX 1-on-1 Consultation on an individual basis via Zoom."
  },
  {
    icon: <Layers className="h-10 w-10 text-purple-700" />,
    title: "Hybrid Approach",
    description: "Concept and Q&A (NCLEX CONCEPTS AND APPLICATION) Comprehensive NCLEX approach based on the latest trends."
  },
  {
    icon: <Pill className="h-10 w-10 text-purple-700" />,
    title: "Focused Specialty Drills",
    description: "5 days pharma, 5 days nursing skills enhancing top-classified techniques in answering specialized questions."
  },
  {
    icon: <Target className="h-10 w-10 text-purple-700" />,
    title: "NCLEX Mastery (Final Coaching)",
    description: "The last touch or polishing of all the needed topics for the examinee to bring in the exam center and pass the NCLEX."
  }
];

const StandoutSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold font-serif text-gray-900 mb-4">
            What makes NCLEX Amplified a standout choice?
          </h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-600">
            We're dedicated to providing you with the most comprehensive and effective NCLEX review experience, 
            designed to maximize your chances of success on your first attempt.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-purple-100 hover:shadow-md transition-all duration-300 h-full">
              <CardContent className="p-6">
                <div className="rounded-full w-16 h-16 bg-purple-100 flex items-center justify-center mb-4">
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
