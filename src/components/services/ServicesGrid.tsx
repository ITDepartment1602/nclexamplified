
import React from "react";
import { 
  MessageCircle, 
  Infinity, 
  FileText,
  Video,
  BookOpen,
  Clock
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: <MessageCircle className="h-10 w-10 text-purple-700" />,
    title: "Free Initial NCLEX Consultation",
    description: "Once enrolled, jumpstart your review with a FREE Initial consultation to make the most out of the program."
  },
  {
    icon: <Infinity className="h-10 w-10 text-purple-700" />,
    title: "Unlimited NCLEX Review",
    description: "Enjoy your unlimited Review until you PASS! once you pass, your account will be discontinued as per terms and conditions."
  },
  {
    icon: <FileText className="h-10 w-10 text-purple-700" />,
    title: "Next Generation NCLEX Ready",
    description: "Edition 1, Edition 2, U-World, and Archer NGN Ready Question and Answer with Rationale are all available."
  },
  {
    icon: <Video className="h-10 w-10 text-purple-700" />,
    title: "Online Live Lecture via Zoom",
    description: "Once you've enrolled, we conduct live online lectures every day from 8 am to 12 am PHT through Zoom."
  },
  {
    icon: <BookOpen className="h-10 w-10 text-purple-700" />,
    title: "Free Success Guide Books",
    description: "Once you enrolled you get free Success Guide Books La Charity and Prio and Delegation."
  },
  {
    icon: <Clock className="h-10 w-10 text-purple-700" />,
    title: "24/7 Access Recorded Video",
    description: "You may watch recorded footage at any time by accessing our dashboard."
  }
];

const ServicesGrid: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-purple-100 overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="h-2 bg-purple-700"></div>
              <CardContent className="p-6">
                <div className="rounded-full w-16 h-16 bg-purple-100 flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
