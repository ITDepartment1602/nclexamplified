
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface EnrollmentSlideshowProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const EnrollmentSlideshow: React.FC<EnrollmentSlideshowProps> = ({
  isOpen,
  onOpenChange,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const questions = [
    {
      id: 1,
      question: "Are you a Registered Nurse already?",
      options: [
        { emoji: "✅", text: "Yes, I'm a nurse" },
        { emoji: "🩺", text: "Not yet, but planning to take NCLEX" }
      ]
    },
    {
      id: 2,
      question: "Where are you planning to practice as a nurse?",
      options: [
        { emoji: "🌍", text: "USA / Canada" },
        { emoji: "🌏", text: "Middle East / Australia / Other" }
      ]
    },
    {
      id: 3,
      question: "What's your main goal with NCLEX?",
      options: [
        { emoji: "📈", text: "To finally become a USRN" },
        { emoji: "🎯", text: "To advance my career abroad" }
      ]
    },
    {
      id: 4,
      question: "When do you plan to take your NCLEX exam?",
      options: [
        { emoji: "⏰", text: "As soon as possible" },
        { emoji: "📅", text: "Within the year" }
      ]
    }
  ];

  const finalStep = {
    title: "🚀 Perfect Timing!",
    subtitle: "No matter when you plan to take it, our agents can guide you and help you secure your slot today."
  };

  const handleOptionSelect = () => {
    if (currentSlide < questions.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      setCurrentSlide(questions.length); // Go to final step
    }
  };

  const handlePrevious = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleEnrollNow = () => {
    onOpenChange(false);
    window.open("https://www.facebook.com/NCLEXAmplifiedReviewCenter", "_blank");
  };

  const handleClose = () => {
    onOpenChange(false);
    setCurrentSlide(0); // Reset to first slide
  };

  const isCurrentQuestion = currentSlide < questions.length;
  const isFinalStep = currentSlide === questions.length;

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-nclex-blue text-center">
            {isFinalStep ? '' : `Question ${currentSlide + 1} of ${questions.length}`}
          </DialogTitle>
        </DialogHeader>

        <div className="min-h-[300px] flex flex-col justify-center">
          {isCurrentQuestion && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-center text-gray-800 mb-8">
                {questions[currentSlide].question}
              </h3>
              
              <div className="grid gap-4">
                {questions[currentSlide].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={handleOptionSelect}
                    className="group p-6 border-2 border-gray-200 rounded-xl hover:border-nclex-blue hover:bg-blue-50 transition-all duration-200 text-left"
                  >
                    <div className="flex items-center space-x-4">
                      <span className="text-2xl">{option.emoji}</span>
                      <span className="text-lg font-medium group-hover:text-nclex-blue">
                        {option.text}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {isFinalStep && (
            <div className="text-center space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-nclex-blue">
                  {finalStep.title}
                </h2>
                <p className="text-lg text-gray-600 max-w-lg mx-auto leading-relaxed">
                  {finalStep.subtitle}
                </p>
              </div>
              
              <div className="pt-6">
                <Button 
                  onClick={handleEnrollNow}
                  className="bg-nclex-red hover:bg-red-600 text-white px-8 py-4 text-lg rounded-full shadow-lg"
                >
                  Talk to Agent & Enroll Now
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-6">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentSlide === 0}
            className="flex items-center gap-2"
          >
            <ChevronLeft className="w-4 h-4" />
            Previous
          </Button>

          <div className="flex space-x-2">
            {questions.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index <= currentSlide ? 'bg-nclex-blue' : 'bg-gray-300'
                }`}
              />
            ))}
            <div
              className={`w-3 h-3 rounded-full transition-colors ${
                isFinalStep ? 'bg-nclex-red' : 'bg-gray-300'
              }`}
            />
          </div>

          <Button
            variant="outline"
            onClick={handleClose}
            className="text-gray-600"
          >
            Maybe Later
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EnrollmentSlideshow;
