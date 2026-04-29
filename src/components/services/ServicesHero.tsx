
import React from "react";
import { Badge } from "@/components/ui/badge";

const ServicesHero: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-blue-50 font-sans">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-10 md:mb-12">
          <Badge className="mb-4 bg-nclex-blue text-white border-transparent">Our Services</Badge>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            <span className="text-nclex-blue">NCLEX</span> <span className="text-nclex-red">AMPLIFIED</span> - Your Ultimate Key to NCLEX Success!
          </h1>
          <p className="text-lg text-gray-700 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            "Make time for the NCLEX review, your American dream begins once you pass the Exam"
          </p>
          <p className="text-base text-gray-600" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Why settle for the usual when you can have the most complete, powerful, and proven NCLEX review experience?
          </p>
         
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
            <div className="px-6 py-3 bg-gradient-to-r from-blue-100 to-blue-50 rounded-full text-nclex-blue text-sm font-semibold border border-blue-200 hover:shadow-md transition-all duration-300">Comprehensive</div>
            <div className="px-6 py-3 bg-gradient-to-r from-blue-100 to-blue-50 rounded-full text-nclex-blue text-sm font-semibold border border-blue-200 hover:shadow-md transition-all duration-300">Personalized</div>
            <div className="px-6 py-3 bg-gradient-to-r from-blue-100 to-blue-50 rounded-full text-nclex-blue text-sm font-semibold border border-blue-200 hover:shadow-md transition-all duration-300">Affordable</div>
            <div className="px-6 py-3 bg-gradient-to-r from-blue-100 to-blue-50 rounded-full text-nclex-blue text-sm font-semibold border border-blue-200 hover:shadow-md transition-all duration-300">Up-to-date</div>
            <div className="px-6 py-3 bg-gradient-to-r from-blue-100 to-blue-50 rounded-full text-nclex-blue text-sm font-semibold border border-blue-200 hover:shadow-md transition-all duration-300">Unlimited</div>
            <div className="px-6 py-3 bg-gradient-to-r from-blue-100 to-blue-50 rounded-full text-nclex-blue text-sm font-semibold border border-blue-200 hover:shadow-md transition-all duration-300">Accessible</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
