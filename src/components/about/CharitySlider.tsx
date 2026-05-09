import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const charityImages = [
  "/lovable-uploads/4dc5cd4e-19fb-45d7-9d8e-4a7812746aa6.png",
  "/lovable-uploads/e5f25f15-719f-438b-bd62-9c5f00102568.png",
  "/lovable-uploads/19ee5267-0ef0-419e-87db-f3d3498031b6.png",
  "/lovable-uploads/59a9086e-c0e9-4e09-9df2-dfdb7f0ef038.png",
  "/lovable-uploads/8d78c976-f787-4fc9-9258-61824a42a619.png",
  "/lovable-uploads/8d286dcf-3ffd-48ba-aab5-72681c072bf1.png",
  "/lovable-uploads/89fd2c48-14d1-4bfa-8847-64c4c183e3da.png",
  "/lovable-uploads/81e735c7-1645-49a5-9b22-16863db49faf.png",
  "/lovable-uploads/e78b3212-2e6e-4aec-b36c-170daa9d849b.png",
];

const CharitySlider: React.FC = () => (
  <section className="py-14 bg-gradient-to-b from-white to-blue-50 font-sans mb-10">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
          Charity Activities
        </h2>
        <div className="w-20 h-1 bg-nclex-blue mx-auto mb-6"></div>
      </div>
      <div className="max-w-4xl mx-auto">
        <Carousel
          opts={{
            loop: true,
            align: "center",
            skipSnaps: false,
          }}
          className="w-full"
        >
          <CarouselContent>
            {charityImages.map((img, idx) => (
              <CarouselItem
                key={idx}
                className="flex justify-center items-center"
              >
                <div className="flex items-center justify-center w-full h-96 sm:h-[32rem] md:h-[40rem]">
                  <img
                    src={img}
                    alt={`Charity Event ${idx + 1}`}
                    className="w-full h-full object-contain rounded-xl shadow-md bg-white"
                  />
                </div>
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

export default CharitySlider;
