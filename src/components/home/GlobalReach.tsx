
import React from "react";
import { MapPin, ArrowRight, Globe } from "lucide-react";

const GlobalReach: React.FC = () => {
  const countries = [
    { name: "USA", position: "top-1/2 left-1/4", flag: "🇺🇸" },
    { name: "Canada", position: "top-1/3 left-1/4", flag: "🇨🇦" },
    { name: "Australia", position: "bottom-1/4 right-1/4", flag: "🇦🇺" },
    { name: "Middle East", position: "top-1/2 right-1/3", flag: "🇦🇪" },
    { name: "UK", position: "top-1/3 left-1/2", flag: "🇬🇧" },
    { name: "Germany", position: "top-1/3 right-2/5", flag: "🇩🇪" },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-gray-900 mb-4">
            Global Success Stories
          </h2>
          <div className="w-20 h-1 bg-nclex-blue mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 mb-8">
            From our review center in the Philippines, we've helped nurses pass the NCLEX 
            and achieve their dreams across the globe
          </p>
          
          {/* World Map Visualization */}
          <div className="relative bg-gradient-to-br from-blue-100 to-blue-200 rounded-3xl p-8 mb-12 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="w-full h-full bg-[radial-gradient(circle_at_20%_50%,_transparent_20px,_rgba(59,130,246,0.1)_21px)] bg-[length:40px_40px]"></div>
            </div>
            
            {/* World Map Container */}
            <div className="relative h-96 bg-white/30 rounded-2xl backdrop-blur-sm border border-white/50">
              {/* Philippines (Center/Source) */}
              <div className="absolute top-3/5 right-2/5 transform -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div className="w-6 h-6 bg-nclex-red rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg animate-pulse">
                    🇵🇭
                  </div>
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-nclex-red text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                    Philippines
                  </div>
                  <div className="absolute -bottom-14 left-1/2 transform -translate-x-1/2 text-xs text-gray-700 font-medium whitespace-nowrap">
                    Review Center
                  </div>
                </div>
              </div>
              
              {/* Country Pins with Arrows */}
              {countries.map((country, index) => (
                <div key={country.name} className={`absolute ${country.position} transform -translate-x-1/2 -translate-y-1/2`}>
                  <div className="relative">
                    {/* Arrow pointing to Philippines */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <ArrowRight 
                        className={`w-4 h-4 text-nclex-blue opacity-60 ${
                          country.name === 'Australia' ? 'rotate-45' :
                          country.name === 'Canada' ? 'rotate-12' :
                          country.name === 'USA' ? 'rotate-12' :
                          country.name === 'Middle East' ? 'rotate-180' :
                          country.name === 'UK' ? 'rotate-45' :
                          'rotate-45'
                        }`} 
                      />
                    </div>
                    
                    {/* Country Pin */}
                    <div className="w-5 h-5 bg-nclex-blue rounded-full flex items-center justify-center text-white text-xs shadow-md hover:scale-110 transition-transform">
                      {country.flag}
                    </div>
                    <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-700 font-medium whitespace-nowrap">
                      {country.name}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Floating Elements */}
            <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm rounded-full p-3 shadow-lg">
              <Globe className="w-6 h-6 text-nclex-blue" />
            </div>
            
            <div className="absolute top-4 right-4 bg-nclex-red/90 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
              20,231+ Passers Worldwide
            </div>
            
            <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-lg">
              94.7% Success Rate
            </div>
          </div>
          
          {/* Statistics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-nclex-blue">
              <div className="text-2xl font-bold text-nclex-blue mb-2">6</div>
              <div className="text-sm text-gray-600">Countries Reached</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-nclex-red">
              <div className="text-2xl font-bold text-nclex-red mb-2">20,231+</div>
              <div className="text-sm text-gray-600">Global Passers</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-green-500">
              <div className="text-2xl font-bold text-green-600 mb-2">94.7%</div>
              <div className="text-sm text-gray-600">Success Rate</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-purple-500">
              <div className="text-2xl font-bold text-purple-600 mb-2">24/7</div>
              <div className="text-sm text-gray-600">Global Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalReach;
