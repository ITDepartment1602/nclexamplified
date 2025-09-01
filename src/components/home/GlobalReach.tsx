
import React, { useState, useEffect } from "react";
import { Globe, MapPin, Users, X } from "lucide-react";

const GlobalReach: React.FC = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [animatedStats, setAnimatedStats] = useState({
    passers: 0,
    countries: 0,
    successRate: 0,
    satisfaction: 0
  });

  // Animation for counting numbers
  useEffect(() => {
    const targets = {
      passers: 20231,
      countries: 15,
      successRate: 94.7,
      satisfaction: 100
    };

    const duration = 2000; // 2 seconds
    const steps = 60; // 60 steps for smooth animation
    const stepTime = duration / steps;

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setAnimatedStats({
        passers: Math.floor(targets.passers * progress),
        countries: Math.floor(targets.countries * progress),
        successRate: parseFloat((targets.successRate * progress).toFixed(1)),
        satisfaction: Math.floor(targets.satisfaction * progress)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setAnimatedStats(targets); // Ensure final values are exact
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  const handleMapClick = () => {
    if (window.innerWidth <= 768) { // Mobile breakpoint
      setIsFullscreen(true);
    }
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
  };

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
            src="/lovable-uploads/9c46f4e9-ac14-441f-baa9-42b7de1a02c1.gif"
            alt="Global NCLEX Success Map showing connections from Philippines to USA, Canada, Australia, Middle East, Europe, Columbia, Argentina, and Spain"
            className="w-full h-auto cursor-pointer md:cursor-default"
            onClick={handleMapClick}
          />
          
          {/* Mobile tap hint */}
          <div className="md:hidden absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
            Tap to view fullscreen
          </div>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <Users className="w-8 h-8 text-nclex-blue mx-auto mb-3" />
            <div className="text-2xl font-bold text-gray-800">{animatedStats.passers.toLocaleString()}+</div>
            <div className="text-sm text-gray-600">Global Passers</div>
          </div>
          
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <MapPin className="w-8 h-8 text-red-500 mx-auto mb-3" />
            <div className="text-2xl font-bold text-gray-800">{animatedStats.countries}+</div>
            <div className="text-sm text-gray-600">Countries</div>
          </div>
          
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <Globe className="w-8 h-8 text-green-500 mx-auto mb-3" />
            <div className="text-2xl font-bold text-gray-800">{animatedStats.successRate}%</div>
            <div className="text-sm text-gray-600">Success Rate</div>
          </div>
          
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <Users className="w-8 h-8 text-purple-500 mx-auto mb-3" />
            <div className="text-2xl font-bold text-gray-800">{animatedStats.satisfaction}%</div>
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
              "🇸🇦 Saudi Arabia",
              "🇨🇴 Colombia",
              "🇦🇷 Argentina",
              "🇪🇸 Spain"
            ].map((country, index) => (
              <div key={index} className="bg-white px-4 py-2 rounded-full shadow-sm border">
                <span className="text-sm font-medium text-gray-700">{country}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Fullscreen Modal for Mobile */}
      {isFullscreen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-full max-h-full">
            <button
              onClick={closeFullscreen}
              className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 z-10"
            >
              <X className="w-6 h-6" />
            </button>
            <img 
              src="/lovable-uploads/9c46f4e9-ac14-441f-baa9-42b7de1a02c1.gif"
              alt="Global NCLEX Success Map - Fullscreen"
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default GlobalReach;
