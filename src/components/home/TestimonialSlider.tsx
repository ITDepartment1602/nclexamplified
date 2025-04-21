
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

/**
 * Demo testimonials. We'll use a random person's image for avatar.
 */
const TESTIMONIALS = [
  {
    name: "Maria Santos",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    comment: "I never imagined passing NCLEX so easily! NCLEX Amplified's review program made all the difference."
  },
  {
    name: "John Cruz",
    avatar: "https://randomuser.me/api/portraits/men/65.jpg",
    comment: "Their unlimited review, study materials, and helpful lecturers gave me confidence. Highly recommended!"
  }
];

const TestimonialSlider: React.FC = () => {
  // Use simple slider for 2 demo testimonials
  return (
    <section className="py-16 font-sans">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto mb-8 text-center">
          <h2 className="text-3xl font-bold font-serif text-gray-900 mb-2">What Our Students Say</h2>
          <div className="w-20 h-1 bg-nclex-blue mx-auto mb-4"></div>
        </div>
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          {TESTIMONIALS.map((t, i) => (
            <Card key={i} className="flex-1 max-w-md bg-white border-blue-100 shadow">
              <CardContent className="p-8 text-center flex flex-col items-center">
                <img 
                  src={t.avatar}
                  alt={t.name}
                  className="w-20 h-20 rounded-full mb-4 object-cover border-4 border-blue-100 shadow"
                  loading="lazy"
                />
                <p className="text-lg text-gray-800 italic mb-4">&quot;{t.comment}&quot;</p>
                <p className="font-semibold text-nclex-blue">{t.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
