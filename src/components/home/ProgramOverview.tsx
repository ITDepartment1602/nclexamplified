
import React from "react";
import { 
  Clock, 
  CalendarDays, 
  BookCheck, 
  CheckCircle2, 
  BookOpen, 
  Video, 
  FileText 
} from "lucide-react";

const features = [
  {
    icon: <Clock className="w-6 h-6 text-purple-700" />,
    text: "Enjoy our unlimited review at your pace"
  },
  {
    icon: <CalendarDays className="w-6 h-6 text-purple-700" />,
    text: "1 session Study Plan Consultation"
  },
  {
    icon: <BookCheck className="w-6 h-6 text-purple-700" />,
    text: "NGN-ready Question & Answer Books Compilation"
  },
  {
    icon: <CheckCircle2 className="w-6 h-6 text-purple-700" />,
    text: "Your contract ends when you \"PASS THE NCLEX\""
  },
  {
    icon: <BookOpen className="w-6 h-6 text-purple-700" />,
    text: "Boost your NCLEX Mastery with the exclusive NCLEX Success Guide E-Book"
  },
  {
    icon: <Video className="w-6 h-6 text-purple-700" />,
    text: "UWorld-Archer Question and Answer Drills (Video)"
  },
  {
    icon: <FileText className="w-6 h-6 text-purple-700" />,
    text: "2 Editions of Prioritization & Delegation Practice Test E-Books"
  }
];

const ProgramOverview: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold font-serif text-gray-900 mb-4">
            PROGRAM OVERVIEW
          </h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-600">
            Our comprehensive program is designed to provide you with all the tools and support 
            you need to succeed in your NCLEX journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 flex items-center justify-center">
            <div className="bg-purple-100 p-1 rounded-lg">
              <div className="relative overflow-hidden rounded-lg w-full h-[400px] bg-purple-200 flex items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center text-purple-700 text-opacity-20 text-9xl font-serif font-bold">
                  NCLEX
                </div>
                <div className="relative z-10 text-center p-6">
                  <h3 className="text-2xl font-bold text-purple-800 mb-3">Ready to Excel</h3>
                  <p className="text-purple-700">
                    Our program is meticulously designed to prepare you for every aspect of the NCLEX examination.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3 bg-purple-50 rounded-xl p-8 shadow-inner">
            <h3 className="text-xl font-bold text-gray-900 mb-6 border-b border-purple-200 pb-2">
              What You'll Get
            </h3>
            
            <div className="space-y-5">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start bg-white p-4 rounded-lg shadow-sm">
                  <div className="bg-purple-100 p-2 rounded-lg mr-3">
                    {feature.icon}
                  </div>
                  <p className="text-gray-700 mt-1">{feature.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramOverview;
