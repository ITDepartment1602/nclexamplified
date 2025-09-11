
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
    icon: <BookCheck className="w-6 h-6 text-nclex-blue" />,
    text: "📘 Concept Mastery – 32 Key Topics (160 Hours)"
  },
  {
    icon: <CheckCircle2 className="w-6 h-6 text-nclex-blue" />,
    text: "🧠 Question Drills – 21 Sessions (840 Questionnaires)"
  },
  {
    icon: <FileText className="w-6 h-6 text-nclex-blue" />,
    text: "🧪 Mock Exams – 6 Full-Length Exams (420 Questionnaires)"
  },
  {
    icon: <Video className="w-6 h-6 text-nclex-blue" />,
    text: "🎯 Final Coaching – 9 Sessions (72 Hours)"
  },
  {
    icon: <BookOpen className="w-6 h-6 text-nclex-blue" />,
    text: "🔐 NCLEX Secrets – Exclusive high-yield questionnaires"
  },
  {
    icon: <CalendarDays className="w-6 h-6 text-nclex-blue" />,
    text: "📊 Smart Calendar tailored to your schedule"
  },
  {
    icon: <Clock className="w-6 h-6 text-nclex-blue" />,
    text: "🎥 Unlimited access to recorded videos until you pass"
  }
];

const ProgramOverview: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold font-serif text-gray-900 mb-4">
            NCLEX COMPREHENSIVE REVIEW PROGRAM
          </h2>
          <div className="w-20 h-1 bg-nclex-blue mx-auto mb-6"></div>
          <p className="text-gray-600 mb-4">
            An intensive and structured review program tailored to help aspiring nurses successfully pass the NCLEX-RN on their first attempt.
          </p>
          <div className="bg-nclex-blue text-white px-6 py-3 rounded-full inline-block">
            <span className="font-bold">Program Duration: 1 Cycle = 4 Months</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 flex items-center justify-center">
            <div className="bg-blue-100 p-1 rounded-lg">
              <div className="relative overflow-hidden rounded-lg w-full h-[600px] bg-blue-50 flex items-center justify-center">
            <img src="../../../lovable-uploads/bdb8cd18-66f5-45a5-8130-d9a0449bd15c.png" alt="" className="w-full h-full object-cover object-center" />
               
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3 bg-blue-50 rounded-xl p-8 shadow-inner">
            <h3 className="text-xl font-bold text-gray-900 mb-6 border-b border-blue-200 pb-2">
              What You'll Get
            </h3>
            
            <div className="space-y-5">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start bg-white p-4 rounded-lg shadow-sm">
                  <div className="bg-blue-100 p-2 rounded-lg mr-3">
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
