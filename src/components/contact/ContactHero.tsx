
import React from "react";
import { Badge } from "@/components/ui/badge";

const ContactHero: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <Badge className="mb-4 bg-nclex-blue text-white border-transparent">Contact Us</Badge>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
            Get In Touch
          </h1>
          
          <p className="text-lg text-gray-700">
            If you have any queries, please feel free to reach out. 
            Our dedicated team is always ready to assist you with your NCLEX journey.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
