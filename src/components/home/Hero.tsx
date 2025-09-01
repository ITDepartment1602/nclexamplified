import React, { useState } from "react";
import { 
  Award, 
  BarChart3, 
  BookOpen, 
  Video, 
  DollarSign, 
  GraduationCap, 
  Sparkles,
  Calendar,
  Users,
  Clock,
  CheckCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const Hero: React.FC = () => {
  const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);

  const features = [
    {
      icon: <Award className="w-5 h-5 text-nclex-blue" />,
      text: "The Most Successful and Honored Review Center with no limitations"
    },
    {
      icon: <BarChart3 className="w-5 h-5 text-nclex-blue" />,
      text: "Passing rate of 94.7%"
    },
    {
      icon: <BookOpen className="w-5 h-5 text-nclex-blue" />,
      text: "Most recent study materials"
    },
    {
      icon: <Video className="w-5 h-5 text-nclex-blue" />,
      text: "Using Zoom for one-on-one mentorship"
    },
    {
      icon: <DollarSign className="w-5 h-5 text-nclex-blue" />,
      text: "Least expensive review program"
    },
    {
      icon: <GraduationCap className="w-5 h-5 text-nclex-blue" />,
      text: "Professionals who hold valid teaching licenses"
    }
  ];

  const serviceHighlights = [
    {
      icon: <BarChart3 className="w-6 h-6 text-nclex-blue" />,
      title: "94.7% Passing Rate",
      description: "Highest success rate in the Philippines"
    },
    {
      icon: <BookOpen className="w-6 h-6 text-nclex-blue" />,
      title: "Updated Materials",
      description: "Latest NCLEX exam questions and study guides"
    },
    {
      icon: <DollarSign className="w-6 h-6 text-nclex-blue" />,
      title: "Most Affordable",
      description: "Least expensive review program with unlimited access"
    },
    {
      icon: <Video className="w-6 h-6 text-nclex-blue" />,
      title: "One-on-One Mentorship",
      description: "Personal guidance through Zoom sessions"
    },
    {
      icon: <Users className="w-6 h-6 text-nclex-blue" />,
      title: "Licensed Professionals",
      description: "Expert instructors with valid teaching credentials"
    },
    {
      icon: <Clock className="w-6 h-6 text-nclex-blue" />,
      title: "Flexible Schedule",
      description: "Study at your own pace with 24/7 access"
    }
  ];

  const handleEnrollClick = () => {
    setIsEnrollModalOpen(true);
  };

  const handleProceedToEnroll = () => {
    setIsEnrollModalOpen(false);
    window.open("https://m.me/NCLEX.Amplified.Official", "_blank");
  };

  return (
    <div className="relative pt-20 pb-16 overflow-hidden font-sans">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(62, 83, 160, 0.85), rgba(192, 64, 65, 0.75)), url('/lovable-uploads/f87ff03c-aad5-4e52-8972-cee4283cb0d2.png')`
        }}
      />
      
      {/* Abstract blue shapes */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary rounded-bl-[200px] opacity-20 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary rounded-full translate-x-[-30%] translate-y-[30%] opacity-20 -z-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          <div className="space-y-6 max-w-2xl">
            <div className="flex items-center">
              <Sparkles className="text-white mr-2" />
              <span className="text-sm font-medium text-white tracking-wide uppercase">
                Welcome to the Leading <span className="text-white font-bold">NCLEX</span> <span className="text-primary font-bold">Amplified</span> Review Center
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold leading-tight text-white">
              <span className="text-white">NCLEX</span><span className="text-primary"> Amplified</span> Review Center
            </h1>
            <p className="text-lg text-white/90">
              Empowering Filipino nurses worldwide: bridging dreams and realities. 
              With a 94.7% passing rate, we're committed to turning your <span className="text-white font-bold">NCLEX</span> <span className="text-primary font-bold">Amplified</span> aspirations into reality.
            </p>
            <div className="pt-6 flex items-center gap-3">
              <Button 
                onClick={handleEnrollClick}
                className="bg-nclex-red hover:bg-red-600 rounded-full px-8 py-6 text-lg shadow-lg shadow-red-200"
              >
                Enroll Now!
              </Button>
              <Button className="border-white text-white bg-transparent hover:bg-white hover:text-nclex-blue rounded-full px-8 py-6 text-lg border-2">
                <a href="https://nclexamplifiedreviewcenter.com/nclex/guest">Try our Demo!</a>
              </Button>
            </div>
            <p className="text-sm mt-3 text-white/80 font-medium">Join 8326+ nurses who achieved their American dream</p>
          </div>
      
        </div>
      </div>

      {/* Enrollment Information Modal */}
      <Dialog open={isEnrollModalOpen} onOpenChange={setIsEnrollModalOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-nclex-blue flex items-center gap-2">
              <GraduationCap className="w-6 h-6" />
              NCLEX Amplified Review Program
            </DialogTitle>
            <DialogDescription className="text-gray-600">
              Discover what makes us the most successful NCLEX review center in the Philippines
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-6">
            {/* Service Highlights Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {serviceHighlights.map((service, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 bg-blue-50 rounded-lg">
                  <div className="bg-white p-2 rounded-lg shadow-sm">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">{service.title}</h3>
                    <p className="text-sm text-gray-600">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Calendar Section */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center gap-2 mb-4">
                <Calendar className="w-5 h-5 text-nclex-blue" />
                <h3 className="text-lg font-semibold text-gray-800">Review Schedule Calendar</h3>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-sm" style={{ height: '400px' }}>
                {/* Desktop View (Month) */}
                <iframe 
                  className="w-full h-full hidden md:block"
                  src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=Asia%2FManila&hl=en&showPrint=0&src=bWljYW5jbGV4YW1wbGlmaWVkQGdtYWlsLmNvbQ&color=%234285F4&mode=month"
                  frameBorder="0"
                  scrolling="no"
                  allowFullScreen
                  title="NCLEX Review Schedule - Monthly View">
                </iframe>
                
                {/* Mobile View (Schedule) */}
                <iframe 
                  className="w-full h-full md:hidden"
                  src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=Asia%2FManila&hl=en&showPrint=0&src=bWljYW5jbGV4YW1wbGlmaWVkQGdtYWlsLmNvbQ&color=%234285F4&mode=agenda"
                  frameBorder="0"
                  scrolling="yes"
                  allowFullScreen
                  title="NCLEX Review Schedule - Agenda View">
                </iframe>
              </div>
            </div>

            {/* Success Stories */}
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <h3 className="font-semibold text-green-800">Success Statistics</h3>
              </div>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-green-600">94.7%</div>
                  <div className="text-sm text-green-700">Passing Rate</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600">8,326+</div>
                  <div className="text-sm text-green-700">Successful Nurses</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600">100%</div>
                  <div className="text-sm text-green-700">Satisfaction</div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button 
                onClick={handleProceedToEnroll}
                className="bg-nclex-red hover:bg-red-600 text-white px-8 py-3 rounded-full flex-1"
              >
                Connect with Live Agent - Enroll Now!
              </Button>
              <Button 
                variant="outline" 
                onClick={() => setIsEnrollModalOpen(false)}
                className="px-8 py-3 rounded-full"
              >
                Maybe Later
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Hero;
