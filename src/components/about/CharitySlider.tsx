
import React from "react";
import { Heart } from "lucide-react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const charityActivities = [
  {
    title: "Christmas Gift-Giving",
    description: "Distributing essential supplies and gifts to underprivileged children during the holiday season.",
    date: "December 2022",
    image: "/lovable-uploads/84c683af-ce21-4256-86c2-5870369180f2.png"
  },
  {
    title: "Medical Mission",
    description: "Providing free health check-ups and basic medical services to underserved communities.",
    date: "March 2023",
    image: "/lovable-uploads/c42abda9-809b-43b2-8a8a-4fcbd69195e4.png"
  },
  {
    title: "Educational Support Program",
    description: "Offering scholarships and educational materials to aspiring nursing students with financial limitations.",
    date: "August 2023",
    image: "/lovable-uploads/e5553874-755c-4905-8559-2d555729d0e0.png"
  },
  {
    title: "Community Health Workshop",
    description: "Conducting health education sessions in rural areas to promote wellness and preventive care.",
    date: "May 2023",
    image: "/lovable-uploads/b24bdcc0-5a73-4465-ab6d-5d29279bcfa8.png"
  }
];

const CharitySlider: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold font-serif text-gray-900 mb-4">
            Charity Activities
          </h2>
          <div className="w-20 h-1 bg-nclex-blue mx-auto mb-6"></div>
          <p className="text-gray-600">
            This company activities was first held by NCLEX Amplified in December of last year. Sir Maverick Dela Cruz Leocadio, 
            our president, and Sir Joshua Miguel Gamus, our vice president, had the foresight to assist our selected foundation with their 
            basic requirements by offering the best care possible and dedicating themselves to help new charitable foundations.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {charityActivities.map((activity, index) => (
                <CarouselItem key={index}>
                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div className="bg-blue-50 p-4 rounded-lg flex items-center justify-center">
                          <img 
                            src={activity.image} 
                            alt={activity.title} 
                            className="w-full h-56 object-contain"
                          />
                        </div>
                        <div className="text-center md:text-left">
                          <div className="inline-block p-3 bg-red-100 rounded-full mb-4">
                            <Heart className="w-10 h-10 text-nclex-red" />
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">
                            {activity.title}
                          </h3>
                          <div className="bg-red-100 text-nclex-red text-sm font-medium px-3 py-1 rounded-full inline-block mb-4">
                            {activity.date}
                          </div>
                          <p className="text-gray-600">
                            {activity.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default CharitySlider;
