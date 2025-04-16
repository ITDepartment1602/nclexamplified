
import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";

const charityActivities = [
  {
    title: "Christmas Gift-Giving",
    description: "Distributing essential supplies and gifts to underprivileged children during the holiday season.",
    date: "December 2022"
  },
  {
    title: "Medical Mission",
    description: "Providing free health check-ups and basic medical services to underserved communities.",
    date: "March 2023"
  },
  {
    title: "Educational Support Program",
    description: "Offering scholarships and educational materials to aspiring nursing students with financial limitations.",
    date: "August 2023"
  },
  {
    title: "Community Health Workshop",
    description: "Conducting health education sessions in rural areas to promote wellness and preventive care.",
    date: "May 2023"
  }
];

const CharitySlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === charityActivities.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? charityActivities.length - 1 : prev - 1));
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-purple-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold font-serif text-gray-900 mb-4">
            Charity Activities
          </h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-600">
            This company activities was first held by NCLEX Amplified in December of last year. Sir Maverick Dela Cruz Leocadio, 
            our president, and Sir Joshua Miguel Gamus, our vice president, had the foresight to assist our selected foundation with their 
            basic requirements by offering the best care possible and dedicating themselves to help new charitable foundations.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="bg-purple-700 p-10 flex items-center justify-center">
                <div className="text-center">
                  <Heart className="w-16 h-16 text-pink-300 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">Giving Back</h3>
                  <p className="text-purple-200">
                    At NCLEX Amplified, we believe in making a positive impact beyond education.
                  </p>
                </div>
              </div>
              
              <div className="p-10">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {charityActivities[currentSlide].title}
                </h3>
                <p className="text-sm text-gray-500 mb-4">
                  {charityActivities[currentSlide].date}
                </p>
                <p className="text-gray-700 mb-8">
                  {charityActivities[currentSlide].description}
                </p>
                
                <div className="flex items-center justify-between">
                  <button 
                    onClick={prevSlide}
                    className="flex items-center text-purple-700 hover:text-purple-900 transition-colors font-medium"
                    aria-label="Previous charity activity"
                  >
                    <ChevronLeft className="w-5 h-5 mr-1" />
                    Previous
                  </button>
                  
                  <div className="flex items-center space-x-1">
                    {charityActivities.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-2 h-2 rounded-full ${
                          currentSlide === index ? "bg-purple-700" : "bg-purple-200"
                        }`}
                        aria-label={`Go to charity activity ${index + 1}`}
                      />
                    ))}
                  </div>
                  
                  <button 
                    onClick={nextSlide}
                    className="flex items-center text-purple-700 hover:text-purple-900 transition-colors font-medium"
                    aria-label="Next charity activity"
                  >
                    Next
                    <ChevronRight className="w-5 h-5 ml-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CharitySlider;
