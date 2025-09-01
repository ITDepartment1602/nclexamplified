
import React, { useState, useEffect } from "react";
import { Globe, MapPin, Users } from "lucide-react";

const GlobalReach: React.FC = () => {
  const [animatedStats, setAnimatedStats] = useState({
    passers: 0,
    countries: 0,
    successRate: 0,
    satisfaction: 0
  });

  const [typedText, setTypedText] = useState({
    passers: "",
    countries: "",
    successRate: "",
    satisfaction: ""
  });

  const [animationComplete, setAnimationComplete] = useState(false);

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
        setAnimationComplete(true);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  // Typing effect for final values
  useEffect(() => {
    if (!animationComplete) return;

    const typeText = (text: string, setter: (value: string) => void, delay: number = 0) => {
      const timer = setTimeout(() => {
        let i = 0;
        const typeTimer = setInterval(() => {
          if (i <= text.length) {
            setter(text.slice(0, i));
            i++;
          } else {
            clearInterval(typeTimer);
          }
        }, 100);
      }, delay);
      return timer;
    };

    const timer1 = typeText(`${animatedStats.passers.toLocaleString()}+`, (value) => 
      setTypedText(prev => ({ ...prev, passers: value })), 100
    );

    const timer2 = typeText(`${animatedStats.countries}+`, (value) => 
      setTypedText(prev => ({ ...prev, countries: value })), 200
    );

    const timer3 = typeText(`${animatedStats.successRate}%`, (value) => 
      setTypedText(prev => ({ ...prev, successRate: value })), 300
    );

    const timer4 = typeText(`${animatedStats.satisfaction}%`, (value) => 
      setTypedText(prev => ({ ...prev, satisfaction: value })), 400
    );

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [animationComplete, animatedStats]);

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Globe className="w-8 h-8 text-nclex-blue mr-3" />
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
              Amplified Conquer's the World
            </h2>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
           From the Philippines to the world – our review center empowers nurses to pass the NCLEX, amplifying success and conquering dreams across continents.
          </p>
        </div>

        {/* World Map */}
        <div className="relative max-w-6xl mx-auto mb-8">
          <img 
            src="/lovable-uploads/how.gif"
            alt="Global NCLEX Success Map showing connections from Philippines to USA, Canada, Australia, Middle East, Europe, Columbia, Argentina, and Spain"
            className="w-full h-auto"
          />
        </div>

        {/* Global Passers - Center below map */}
        <div className="text-center mb-8">
          <div className="bg-white rounded-lg shadow-md p-8 max-w-md mx-auto">
            <Users className="w-12 h-12 text-nclex-blue mx-auto mb-4" />
            <div className="text-4xl font-bold text-gray-800 mb-2">
              {typedText.passers || `${animatedStats.passers.toLocaleString()}+`}
            </div>
            <div className="text-lg text-gray-600">Global Passers</div>
          </div>
        </div>

        {/* Other Statistics - Bottom row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <MapPin className="w-8 h-8 text-red-500 mx-auto mb-3" />
            <div className="text-2xl font-bold text-gray-800">
              {typedText.countries || `${animatedStats.countries}+`}
            </div>
            <div className="text-sm text-gray-600">Countries</div>
          </div>
          
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <Globe className="w-8 h-8 text-green-500 mx-auto mb-3" />
            <div className="text-2xl font-bold text-gray-800">
              {typedText.successRate || `${animatedStats.successRate}%`}
            </div>
            <div className="text-sm text-gray-600">Success Rate</div>
          </div>
          
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <Users className="w-8 h-8 text-purple-500 mx-auto mb-3" />
            <div className="text-2xl font-bold text-gray-800">
              {typedText.satisfaction || `${animatedStats.satisfaction}%`}
            </div>
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
    </section>
  );
};

export default GlobalReach;
