
import React from "react";
import { Badge } from "@/components/ui/badge";

const AboutHero: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-50 to-purple-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <Badge variant="purple" className="mb-4">About Us</Badge>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
            NCLEX Amplified
          </h1>
          
          <p className="text-lg text-gray-700 mb-8">
            Founded in 2021, NCLEX Amplified Review Center, one leading NCLEX Review Center in the Philippines, 
            provides the most affordable and reliable review program that produces high passing percentage 
            around the globe (USA, UK, Middle East and Canada).
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <div className="bg-white rounded-xl p-6 shadow-md border border-purple-100">
              <h2 className="text-xl font-bold text-purple-800 mb-3">Our Mission</h2>
              <p className="text-gray-700">
                To help all Filipino Nurses in every corner of the world to pass the NCLEX Exam and 
                achieve their AMERICAN DREAM.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md border border-purple-100">
              <h2 className="text-xl font-bold text-purple-800 mb-3">Our Vision</h2>
              <p className="text-gray-700">
                We are here to provide the LEGIT UNLIMITED NCLEX review program in the market with 
                a high quality teaching style.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
