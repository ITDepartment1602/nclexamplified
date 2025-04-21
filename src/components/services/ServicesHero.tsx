
import React from "react";
import { Badge } from "@/components/ui/badge";

const ServicesHero: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 to-blue-100 font-sans">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <Badge className="mb-4 bg-nclex-blue text-white border-transparent">Our Services</Badge>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
            What Services We Offer
          </h1>
          <p className="text-lg text-gray-700" style={{ fontFamily: 'Poppins, sans-serif' }}>
            We provide comprehensive NCLEX preparation services designed to maximize your chances of success
            on your first attempt. Our programs are tailored to meet the needs of Filipino nurses worldwide.
          </p>
          <div className="flex justify-center my-10">
            <img
              src="/lovable-uploads/6201e8fe-3b91-4591-962e-4efbac0ed283.png"
              className="rounded-xl object-cover shadow-md max-h-96 w-full"
              alt="Services Hero"
              style={{maxWidth:"600px",minHeight:"200px"}}
            />
          </div>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-3 max-w-lg mx-auto">
            <div className="px-4 py-2 bg-blue-100 rounded-full text-nclex-blue text-sm font-medium">Comprehensive</div>
            <div className="px-4 py-2 bg-blue-100 rounded-full text-nclex-blue text-sm font-medium">Personalized</div>
            <div className="px-4 py-2 bg-blue-100 rounded-full text-nclex-blue text-sm font-medium">Affordable</div>
            <div className="px-4 py-2 bg-blue-100 rounded-full text-nclex-blue text-sm font-medium">Up-to-date</div>
            <div className="px-4 py-2 bg-blue-100 rounded-full text-nclex-blue text-sm font-medium">Unlimited</div>
            <div className="px-4 py-2 bg-blue-100 rounded-full text-nclex-blue text-sm font-medium">Accessible</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
