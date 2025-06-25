
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const TESTIMONIALS = [
  {
    name: "Mikaela Ligacion, CDRN",
    achievement: "Passed NCLEX 2025",
    avatar: "/lovable-uploads/10a61823-e49c-4e4b-8380-798b96419b48.png",
    comment: "A special thank you to NCLEX Amplified for providing comprehensive and effective review materials. Your resources were instrumental in my preparation, and I truly believe they played a significant role in my success."
  },
  {
    name: "Ruark Lim Ritardo, USRN",
    achievement: "Passed NCLEX 2025",
    avatar: "/lovable-uploads/43e3ca09-5df1-44b1-b654-26b2b96675ee.png",
    comment: "I can't thank NCLEX Amplified Review Center enough for helping me pass the NCLEX! Their content was exactly what I needed - clear, focused, and incredibly effective."
  },
  {
    name: "Krystle Kay L. Almoete, USRN",
    achievement: "Passed NCLEX 2025",
    avatar: "/lovable-uploads/ff8b5b12-0727-4776-bd9b-9a8566d45a00.png",
    comment: "I want to extend my heartfelt gratitude to NCLEX AMPLIFIED for being such an essential part of my NCLEX journey. Your comprehensive review sessions helped me gain the knowledge and test-taking strategies I needed."
  }
];

const TestimonialSlider: React.FC = () => {
  return (
    <section className="py-16 font-sans">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto mb-8 text-center">
          <h2 className="text-3xl font-bold font-serif text-gray-900 mb-2">What Our Students Say</h2>
          <div className="w-20 h-1 bg-nclex-blue mx-auto mb-4"></div>
        </div>
        <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch">
          {TESTIMONIALS.map((t, i) => (
            <Card key={i} className="flex-1 max-w-md bg-white border-blue-100 shadow flex flex-col">
              <CardContent className="p-8 text-center flex-grow flex flex-col items-center">
                <img 
                  src={t.avatar}
                  alt={t.name}
                  className="w-20 h-20 rounded-full mb-4 object-cover border-4 border-blue-100 shadow"
                  loading="lazy"
                />
                <p className="text-lg text-gray-800 italic mb-4 flex-grow">{`"${t.comment}"`}</p>
                <div className="text-center">
                  <p className="font-semibold text-nclex-blue">{t.name}</p>
                  <p className="text-sm text-gray-600 font-medium">{t.achievement}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
