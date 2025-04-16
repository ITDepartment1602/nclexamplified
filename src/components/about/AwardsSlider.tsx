
import React from "react";
import { Award } from "lucide-react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const awards = [
  {
    title: "Most Outstanding Review Center",
    year: "2023",
    image: "/lovable-uploads/84c683af-ce21-4256-86c2-5870369180f2.png",
    description: "Recognized for excellence in nursing education and exceptional pass rates."
  },
  {
    title: "Educational Excellence Award",
    year: "2022",
    image: "/lovable-uploads/c42abda9-809b-43b2-8a8a-4fcbd69195e4.png",
    description: "Honored for innovative teaching approaches and comprehensive review materials."
  },
  {
    title: "Student Satisfaction Award",
    year: "2023",
    image: "/lovable-uploads/e5553874-755c-4905-8559-2d555729d0e0.png",
    description: "Awarded for maintaining the highest student satisfaction scores in the industry."
  },
  {
    title: "Top NCLEX Preparation Provider",
    year: "2022-2023",
    image: "/lovable-uploads/b24bdcc0-5a73-4465-ab6d-5d29279bcfa8.png",
    description: "Recognized for consistently producing top-performing NCLEX candidates."
  }
];

const AwardsSlider: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold font-serif text-gray-900 mb-4">
            Awards & Recognitions
          </h2>
          <div className="w-20 h-1 bg-nclex-blue mx-auto mb-6"></div>
          <p className="text-gray-600">
            We are tremendously honored and humbled to have received these awards! This award reflects not just our hard work and devotion, 
            but also the unwavering support of all aspiring USRNs.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {awards.map((award, index) => (
                <CarouselItem key={index}>
                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div className="bg-blue-50 p-4 rounded-lg flex items-center justify-center">
                          <img 
                            src={award.image} 
                            alt={award.title} 
                            className="w-full h-56 object-contain"
                          />
                        </div>
                        <div className="text-center md:text-left">
                          <div className="inline-block p-3 bg-blue-100 rounded-full mb-4">
                            <Award className="w-10 h-10 text-nclex-blue" />
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">
                            {award.title}
                          </h3>
                          <div className="bg-blue-100 text-nclex-blue text-sm font-medium px-3 py-1 rounded-full inline-block mb-4">
                            {award.year}
                          </div>
                          <p className="text-gray-600">
                            {award.description}
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
        
        <div className="mt-14 text-center text-gray-600 italic max-w-3xl mx-auto">
          <p>
            The path to this milestone has been filled with numerous hours of perseverance and the pursuit of excellence in nursing education. 
            We are really appreciative for the opportunity to make a difference in the lives of future USRNs and contribute to a sector that 
            we are deeply enthusiastic about.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AwardsSlider;
