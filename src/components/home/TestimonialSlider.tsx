
import React, { useState } from "react";
import { 
  ChevronLeft, 
  ChevronRight, 
  Quote 
} from "lucide-react";

const testimonials = [
  {
    name: "Maria Santos",
    position: "RN, USRN",
    text: "NCLEX Amplified wasn't just a review center for me—it was my partner in achieving my American Dream. The unlimited review sessions and personalized approach boosted my confidence tremendously.",
    location: "New York, USA",
    image: "/lovable-uploads/bdb8cd18-66f5-45a5-8130-d9a0449bd15c.png"
  },
  {
    name: "John Dela Cruz",
    position: "RN, USRN",
    text: "The team at NCLEX Amplified truly cares about your success. Their updated materials and exam strategies were spot-on with what I encountered in the actual NCLEX. Passed on my first try!",
    location: "California, USA",
    image: "/lovable-uploads/bdb8cd18-66f5-45a5-8130-d9a0449bd15c.png"
  },
  {
    name: "Anna Reyes",
    position: "RN, USRN",
    text: "As someone who struggled with exam anxiety, the personalized coaching I received from Sir Joshua was life-changing. The review center's approach is comprehensive yet easy to follow.",
    location: "Texas, USA",
    image: "/lovable-uploads/bdb8cd18-66f5-45a5-8130-d9a0449bd15c.png"
  },
  {
    name: "Michael Tan",
    position: "RN, USRN",
    text: "Coming from a provincial school, I was worried about my chances. NCLEX Amplified leveled the playing field for me with their excellent materials and supportive environment. Forever grateful!",
    location: "Chicago, USA",
    image: "/lovable-uploads/bdb8cd18-66f5-45a5-8130-d9a0449bd15c.png"
  }
];

const TestimonialSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="bg-nclex-blue py-20 relative">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0MCIgaGVpZ2h0PSI2NTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IHgxPSIxMDAlIiB5MT0iMCUiIHgyPSIwJSIgeTI9IjAlIiBpZD0iYSI+PHN0b3Agc3RvcC1jb2xvcj0iI2ZmZiIgc3RvcC1vcGFjaXR5PSIwIiBvZmZzZXQ9IjAlIi8+PHN0b3Agc3RvcC1jb2xvcj0iI2ZmZiIgc3RvcC1vcGFjaXR5PSIuMDUiIG9mZnNldD0iMTAwJSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxwYXRoIGQ9Ik0wIDI2Yy4zNTkgMTYuOTc3IDI2Ny43OTggMjcwLjI1NCA3OTYuMzE3IDc1OS44MzJsMjQuMzczLTE2LjUwOUMzNTEuNzU3IDI4Ni4zNDEgODQuMzE4IDMzLjA2NSAwIDE2djEweiIgZmlsbD0idXJsKCNhKSIgZmlsbC1vcGFjaXR5PSIuNSIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+')]
                      bg-no-repeat bg-cover bg-center opacity-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold font-serif text-white mb-4">What Our Students Say</h2>
          <div className="w-20 h-1 bg-white/40 mx-auto mb-6"></div>
          <p className="text-blue-100">
            Hear from our successful graduates who achieved their American Dream with NCLEX Amplified.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl p-8 md:p-10 shadow-xl relative">
            <Quote className="absolute text-blue-200 w-20 h-20 -top-5 -left-5" />
            
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-40 h-40 overflow-hidden flex-shrink-0">
                <img 
                  src={testimonials[currentSlide].image} 
                  alt={testimonials[currentSlide].name}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              
              <div>
                <div className="text-gray-700 text-lg relative z-10 mb-6">
                  "{testimonials[currentSlide].text}"
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-nclex-blue font-bold text-xl">
                    {testimonials[currentSlide].name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-gray-900">{testimonials[currentSlide].name}</h4>
                    <p className="text-sm text-gray-600">{testimonials[currentSlide].position} • {testimonials[currentSlide].location}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={prevSlide}
              className="p-2 rounded-full bg-white text-nclex-blue hover:bg-blue-100 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <div className="flex items-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2.5 h-2.5 rounded-full ${
                    currentSlide === index ? "bg-white" : "bg-blue-300/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextSlide}
              className="p-2 rounded-full bg-white text-nclex-blue hover:bg-blue-100 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
