
import React from "react";

/**
 * Update: Use a large rectangular image, not avatar style,
 * add margin-bottom under image so founder name is clearly shown.
 */
const FounderSection: React.FC = () => {
  return (
    <section className="py-16 font-sans bg-white">
      <div className="container mx-auto max-w-4xl px-4 flex flex-col items-center text-center">
        <h2 className="text-3xl font-bold font-serif mb-4">
          Our <span className="text-nclex-blue">Founders</span>
        </h2>
        <div className="w-20 h-1 bg-nclex-blue mx-auto mb-8"></div>
        <div className="w-full max-w-md mx-auto">
          <img
            src="/lovable-uploads/2cac0865-6bbf-4199-9e16-594c63a5312b.png"
            alt="Founder"
            className="w-full max-h-[380px] rounded-2xl object-cover object-center border-4 border-nclex-blue shadow-lg mb-6"
          />
          <h3 className="text-xl font-bold text-nclex-blue mb-2">Sir JM</h3>
          <p className="text-gray-700 mb-4">
            Founder, Mentor, and guiding inspiration for NCLEX <span className="text-nclex-red">Amplified</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;

