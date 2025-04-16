
import React from "react";
import { 
  Award, 
  BarChart3, 
  BookOpen, 
  Video, 
  DollarSign, 
  GraduationCap, 
  Sparkles 
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero: React.FC = () => {
  const features = [
    {
      icon: <Award className="w-5 h-5 text-nclex-blue" />,
      text: "The Most Successful and Honored Review Center with no limitations"
    },
    {
      icon: <BarChart3 className="w-5 h-5 text-nclex-blue" />,
      text: "Passing rate of 94.7%"
    },
    {
      icon: <BookOpen className="w-5 h-5 text-nclex-blue" />,
      text: "Most recent study materials"
    },
    {
      icon: <Video className="w-5 h-5 text-nclex-blue" />,
      text: "Using Zoom for one-on-one mentorship"
    },
    {
      icon: <DollarSign className="w-5 h-5 text-nclex-blue" />,
      text: "Least expensive review program"
    },
    {
      icon: <GraduationCap className="w-5 h-5 text-nclex-blue" />,
      text: "Professionals who hold valid teaching licenses"
    }
  ];

  return (
    <div className="bg-gradient-to-r from-blue-50 to-blue-100 pt-20 pb-16 relative overflow-hidden">
      {/* Abstract blue shape */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-200 rounded-bl-[200px] opacity-60 -z-10"></div>
      
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-200 rounded-full translate-x-[-30%] translate-y-[30%] opacity-60 -z-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          <div className="space-y-6 max-w-2xl">
            <div className="flex items-center">
              <Sparkles className="text-nclex-blue mr-2" />
              <span className="text-sm font-medium text-nclex-blue tracking-wide uppercase">
                Welcome to the Leading NCLEX Review Center
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-serif font-bold leading-tight">
              <span className="text-nclex-blue">NCLEX Amplified</span> Review Center
            </h1>
            
            <p className="text-lg text-gray-700">
              Empowering Filipino nurses worldwide: bridging dreams and realities. 
              With a 94.7% passing rate, we're committed to turning your NCLEX aspirations into reality.
            </p>
            
            <div className="pt-6">
              <Button asChild className="bg-nclex-red hover:bg-red-600 rounded-full px-8 py-6 text-lg shadow-lg shadow-red-200">
                <a href="https://m.me/NCLEX.Amplified.Official">Enroll Now!</a>
              </Button>
              <p className="text-sm mt-3 text-gray-500 font-medium">Join 1000+ nurses who achieved their American dream</p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-xl p-6 border border-blue-100 grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="flex items-start p-3 rounded-lg hover:bg-blue-50 transition-colors"
              >
                <div className="bg-blue-100 p-2 rounded-lg mr-3 mt-1">
                  {feature.icon}
                </div>
                <p className="text-sm font-medium text-gray-700">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
