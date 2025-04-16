
import React from "react";
import { Badge } from "@/components/ui/badge";

const ServicesHero: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-50 to-purple-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <Badge variant="purple" className="mb-4">Our Services</Badge>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
            What Services We Offer
          </h1>
          
          <p className="text-lg text-gray-700">
            We provide comprehensive NCLEX preparation services designed to maximize your chances of success
            on your first attempt. Our programs are tailored to meet the needs of Filipino nurses worldwide.
          </p>
          
          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-3 max-w-lg mx-auto">
            <div className="px-4 py-2 bg-purple-100 rounded-full text-purple-800 text-sm font-medium">
              Comprehensive
            </div>
            <div className="px-4 py-2 bg-purple-100 rounded-full text-purple-800 text-sm font-medium">
              Personalized
            </div>
            <div className="px-4 py-2 bg-purple-100 rounded-full text-purple-800 text-sm font-medium">
              Affordable
            </div>
            <div className="px-4 py-2 bg-purple-100 rounded-full text-purple-800 text-sm font-medium">
              Up-to-date
            </div>
            <div className="px-4 py-2 bg-purple-100 rounded-full text-purple-800 text-sm font-medium">
              Unlimited
            </div>
            <div className="px-4 py-2 bg-purple-100 rounded-full text-purple-800 text-sm font-medium">
              Accessible
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
