
import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const awards = [
  {
    title: "Most Outstanding Review Center",
    year: "2023",
    description: "Recognized for excellence in nursing education and exceptional pass rates."
  },
  {
    title: "Educational Excellence Award",
    year: "2022",
    description: "Honored for innovative teaching approaches and comprehensive review materials."
  },
  {
    title: "Student Satisfaction Award",
    year: "2023",
    description: "Awarded for maintaining the highest student satisfaction scores in the industry."
  },
  {
    title: "Top NCLEX Preparation Provider",
    year: "2022-2023",
    description: "Recognized for consistently producing top-performing NCLEX candidates."
  }
];

const AwardsSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === awards.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? awards.length - 1 : prev - 1));
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold font-serif text-gray-900 mb-4">
            Awards & Recognitions
          </h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-600">
            We are tremendously honored and humbled to have received these awards! This award reflects not just our hard work and devotion, 
            but also the unwavering support of all aspiring USRNs.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-purple-50 to-white rounded-xl p-10 shadow-lg relative">
          <div className="absolute top-6 right-6">
            <Badge variant="gold" className="flex items-center gap-1">
              <Award className="h-3 w-3" />
              <span>Excellence</span>
            </Badge>
          </div>
          
          <div className="text-center">
            <div className="inline-block p-4 bg-amber-100 rounded-full mb-6">
              <Award className="w-12 h-12 text-amber-500" />
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              {awards[currentSlide].title}
            </h3>
            
            <div className="bg-amber-100 text-amber-800 text-sm font-medium px-3 py-1 rounded-full inline-block mb-4">
              {awards[currentSlide].year}
            </div>
            
            <p className="text-gray-600">
              {awards[currentSlide].description}
            </p>
            
            <div className="mt-14 flex justify-center space-x-4">
              <button 
                onClick={prevSlide}
                className="p-2 rounded-full bg-purple-100 text-purple-700 hover:bg-purple-200 transition-colors"
                aria-label="Previous award"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <div className="flex items-center space-x-2">
                {awards.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      currentSlide === index 
                        ? "bg-purple-700 w-8" 
                        : "bg-purple-200"
                    }`}
                    aria-label={`Go to award ${index + 1}`}
                  />
                ))}
              </div>
              
              <button 
                onClick={nextSlide}
                className="p-2 rounded-full bg-purple-100 text-purple-700 hover:bg-purple-200 transition-colors"
                aria-label="Next award"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-14 text-center text-gray-600 italic max-w-3xl mx-auto">
          <p>
            The path to this milestone has been filled with numerous hours of perseverance and the pursuit of excellence in nursing education. 
            We are really appreciative for the opportunity to make a difference in the lives of future USRNs and contribute to a sector that 
            we are deeply enthusiastic about.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AwardsSlider;
