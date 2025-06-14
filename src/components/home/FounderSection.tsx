
import React from "react";

const founder = {
  name: "Maverick Leocadio",
  role: "President, COO | CFO",
  image: "/lovable-uploads/99a4af79-1b39-4349-849a-f14e95b6bf74.png",
  quote: '"Empowering Filipino nurses worldwide: bridging dreams and realities."',
  awards: [
    "2023: Youngest CEO of the Year",
    "2024: CEO of the Year"
  ],
  description1: "Maverick Dela Cruz Leocadio is the powerhouse leader behind NCLEX Amplified Review Center, where he holds the roles of President, Chief Financial Officer, and Chief Operating Officer. As a true jack of all trades, Maverick leads with unmatched dedication, strategic insight, and a relentless commitment to uplifting future Filipino nurses.",
  description2: "He oversees every aspect of the organization—from financial planning and daily operations to long-term growth and innovation. Under his hands-on leadership, NCLEX Amplified has become a trusted name in nursing licensure review, delivering high-quality, accessible education that helps aspiring nurses reach their goals with confidence."
};

const FounderSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50 font-sans">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold font-serif text-gray-900 mb-4" style={{ fontFamily:'Poppins, sans-serif' }}>
            Our Founder
          </h2>
          <div className="w-20 h-1 bg-nclex-blue mx-auto mb-6"></div>
          <p className="text-gray-600" style={{ fontFamily:'Poppins, sans-serif' }}>
            Meet the visionary leader behind{" "}
            <span className="text-nclex-blue font-bold inline" style={{fontFamily: 'Poppins, sans-serif'}}>NCLEX</span>
            <span className="text-nclex-red font-bold inline" style={{fontFamily: 'Poppins, sans-serif'}}> Amplified</span> who is dedicated to
            transforming nursing education and helping you achieve your American Dream.
          </p>
        </div>
        <div className="flex justify-center">
          <div
            className="bg-white rounded-2xl shadow-xl border border-blue-100 flex flex-col items-center pb-8 max-w-md"
            style={{ fontFamily:'Poppins, sans-serif' }}
          >
            <div className="w-full flex justify-center relative">
              <img
                src={founder.image}
                alt={founder.name}
                className="w-72 h-80 object-cover object-center rounded-2xl border-4 border-nclex-blue shadow-lg -mt-14 mx-auto"
                style={{ marginTop: "-3.5rem", marginBottom: "2.5rem", background: "#e9eefa" }}
              />
            </div>
            <div className="w-full px-7 pt-2">
              <h3 className="text-2xl font-bold text-gray-900 mb-1 text-center" style={{fontFamily: 'Poppins, sans-serif'}}>{founder.name}</h3>
              <p className="text-gray-600 font-medium mb-3 text-center" style={{fontFamily: 'Poppins, sans-serif'}}>{founder.role}</p>
              <p className="italic text-gray-700 border-l-4 border-nclex-blue pl-4 my-4 text-left" style={{fontFamily: 'Poppins, sans-serif'}}>
                {founder.quote}
              </p>
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {founder.awards.map((award, i) => (
                  <span key={i} className="bg-nclex-blue text-white rounded-full px-3 py-1 text-xs font-semibold" style={{fontFamily: 'Poppins, sans-serif'}}>
                    {award}
                  </span>
                ))}
              </div>
              <p className="text-gray-600 text-sm mb-2">{founder.description1}</p>
              <p className="text-gray-600 text-sm">{founder.description2}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
