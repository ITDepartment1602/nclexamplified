
import React from "react";
import { Globe, MapPin, Users } from "lucide-react";

const GlobalReach: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Globe className="w-8 h-8 text-nclex-blue mr-3" />
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
              Global NCLEX Success
            </h2>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From the Philippines to the world - our review center has helped nurses 
            pass the NCLEX exam across continents, making dreams come true globally.
          </p>
        </div>

        {/* World Map */}
        <div className="relative max-w-6xl mx-auto mb-12">
          <img 
            src="/lovable-uploads/9c46f4e9-ac14-441f-baa9-42b7de1a02c1.png"
            alt="Global NCLEX Success Map showing connections from Philippines to USA, Canada, Australia, Middle East, and Europe"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <Users className="w-8 h-8 text-nclex-blue mx-auto mb-3" />
            <div className="text-2xl font-bold text-gray-800">20,231+</div>
            <div className="text-sm text-gray-600">Global Passers</div>
          </div>
          
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <MapPin className="w-8 h-8 text-red-500 mx-auto mb-3" />
            <div className="text-2xl font-bold text-gray-800">15+</div>
            <div className="text-sm text-gray-600">Countries</div>
          </div>
          
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <Globe className="w-8 h-8 text-green-500 mx-auto mb-3" />
            <div className="text-2xl font-bold text-gray-800">94.7%</div>
            <div className="text-sm text-gray-600">Success Rate</div>
          </div>
          
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <Users className="w-8 h-8 text-purple-500 mx-auto mb-3" />
            <div className="text-2xl font-bold text-gray-800">100%</div>
            <div className="text-sm text-gray-600">Satisfaction</div>
          </div>
        </div>

        {/* Key Destinations */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            Our Nurses Work Worldwide
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "🇺🇸 USA",
              "🇨🇦 Canada", 
              "🇦🇺 Australia",
              "🇦🇪 UAE",
              "🇸🇬 Singapore",
              "🇬🇧 United Kingdom",
              "🇩🇪 Germany",
              "🇸🇦 Saudi Arabia"
            ].map((country, index) => (
              <div key={index} className="bg-white px-4 py-2 rounded-full shadow-sm border">
                <span className="text-sm font-medium text-gray-700">{country}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalReach;
