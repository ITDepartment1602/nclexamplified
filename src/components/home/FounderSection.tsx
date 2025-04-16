
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award } from "lucide-react";

const FounderSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-purple-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold font-serif text-gray-900 mb-4">Our Founders</h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-600">
            Meet the visionary leaders behind NCLEX Amplified who are dedicated to 
            transforming nursing education and helping you achieve your American Dream.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Maverick Leocadio */}
          <Card className="border-0 shadow-lg overflow-hidden bg-white">
            <div className="bg-purple-700 h-24 relative">
              <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-32 h-32 rounded-full border-4 border-white overflow-hidden bg-purple-200">
                <div className="w-full h-full flex items-center justify-center text-4xl font-bold text-purple-700">ML</div>
              </div>
            </div>
            
            <CardContent className="pt-20 p-6 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-1">Maverick Leocadio</h3>
              <p className="text-gray-600 font-medium mb-2">President, COO | CFO</p>
              
              <p className="italic text-gray-700 border-l-4 border-purple-500 pl-4 my-4 text-left">
                "Empowering Filipino nurses worldwide: bridging dreams and realities."
              </p>
              
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                <Badge variant="purple" className="flex items-center gap-1">
                  <Award className="h-3 w-3" />
                  <span>2023: Youngest CEO of the Year</span>
                </Badge>
                <Badge variant="purple" className="flex items-center gap-1">
                  <Award className="h-3 w-3" />
                  <span>2024: CEO of the Year</span>
                </Badge>
              </div>
              
              <p className="text-gray-600 text-sm text-left">
                Maverick Dela Cruz Leocadio is the powerhouse leader behind NCLEX Amplified Review Center, 
                where he holds the roles of President, Chief Financial Officer, and Chief Operating Officer. 
                As a true jack of all trades, Maverick leads with unmatched dedication, strategic insight, 
                and a relentless commitment to uplifting future Filipino nurses.
              </p>
              <p className="text-gray-600 text-sm mt-2 text-left">
                He oversees every aspect of the organization—from financial planning and daily operations 
                to long-term growth and innovation. Under his hands-on leadership, NCLEX Amplified has become 
                a trusted name in nursing licensure review, delivering high-quality, accessible education 
                that helps aspiring nurses reach their goals with confidence.
              </p>
            </CardContent>
          </Card>
          
          {/* Sir Joshua Miguel Gamus */}
          <Card className="border-0 shadow-lg overflow-hidden bg-white">
            <div className="bg-purple-700 h-24 relative">
              <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-32 h-32 rounded-full border-4 border-white overflow-hidden bg-purple-200">
                <div className="w-full h-full flex items-center justify-center text-4xl font-bold text-purple-700">JG</div>
              </div>
            </div>
            
            <CardContent className="pt-20 p-6 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-1">Sir Joshua Miguel Gamus, RN</h3>
              <p className="text-gray-600 font-medium mb-2">Vice President, NCLEX Reviewer | Nurse Educator</p>
              
              <p className="italic text-gray-700 border-l-4 border-purple-500 pl-4 my-4 text-left">
                "We strive hard to make your NCLEX journey as exciting and memorable as ever."
              </p>
              
              <p className="text-xs text-center mb-4 font-medium text-purple-700">
                Believe. Expectation. Reality.
              </p>
              
              <p className="text-gray-600 text-sm text-left">
                Sir Joshua Miguel Gamus, RN, is a highly respected NCLEX reviewer and nurse educator, 
                widely recognized for his student-centered teaching style, exceptional communication skills, 
                and mastery of nursing concepts. With a solid foundation in clinical practice and academic instruction, 
                he has become a trusted figure in NCLEX preparation—both in the Philippines and on the global stage.
              </p>
              <p className="text-gray-600 text-sm mt-2 text-left">
                Known for his ability to break down complex nursing topics into clear, digestible lessons, 
                Sir Joshua creates a learning environment that's both engaging and effective. His sessions 
                are not only informative but also inspiring, as he empowers students with the confidence and 
                critical thinking skills they need to excel in their licensure exams and in real-world clinical settings.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
