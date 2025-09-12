
import React, { useState } from "react";
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
import EnrollmentSlideshow from "./EnrollmentSlideshow";

const Hero: React.FC = () => {
  const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);

  const handleEnrollClick = () => {
    setIsEnrollModalOpen(true);
  };

  return (
    <div className="relative pt-20 pb-16 overflow-hidden font-sans">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(  rgba(40, 40, 40, 0.9),       /* Black */
  rgba(62, 83, 160, 0.85)    /* Blue */
), url('/lovable-uploads/f87ff03c-aad5-4e52-8972-cee4283cb0d2.png')`
        }}
      />
      
      {/* Abstract blue shapes */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary rounded-bl-[200px] opacity-20 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary rounded-full translate-x-[-30%] translate-y-[30%] opacity-20 -z-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          <div className="space-y-6 max-w-2xl">
            <div className="flex items-center">
              <Sparkles className="text-white mr-2" />
              <span className="text-sm font-medium text-white tracking-wide uppercase">
                Your Ultimate Key to <span className="text-white font-bold">NCLEX</span> <span className="text-blue-300 font-bold">Success!</span>
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold leading-tight text-white">
              <span className="text-white">NCLEX</span><span className="text-blue-300"> Amplified</span> Review Center
            </h1>
            <p className="text-lg text-white/90">
              "Make time for the NCLEX review, your American dream begins once you pass the Exam"
            </p>
            <p className="text-base text-white/80">
              Why settle for the usual when you can have the most complete, powerful, and proven NCLEX review experience? 
              With 94.7% passing rate and unlimited review until you pass!
            </p>
            <div className="pt-6 flex items-center gap-3">
              <Button 
                onClick={handleEnrollClick}
                className="bg-nclex-red hover:bg-red-600 rounded-full px-8 py-6 text-lg shadow-lg shadow-red-200"
              >
                Enroll Now!
              </Button>
              <Button className="border-white text-white bg-transparent hover:bg-white hover:text-nclex-blue rounded-full px-8 py-6 text-lg border-2">
                <a href="https://nclexamplifiedreviewcenter.com/nclex/guest">Go to Lectures</a>
              </Button>
            </div>
            <p className="text-sm mt-3 text-white/80 font-medium">Join 20,231+ nurses who achieved their American dream all over the world</p>
          </div>
        </div>
      </div>

      {/* Enrollment Slideshow Modal */}
      <EnrollmentSlideshow 
        isOpen={isEnrollModalOpen} 
        onOpenChange={setIsEnrollModalOpen} 
      />
    </div>
  );
};

export default Hero;
