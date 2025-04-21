
import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";

const AWARD_IMAGES = [
  "/lovable-uploads/99a4af79-1b39-4349-849a-f14e95b6bf74.png",
  "/lovable-uploads/9c822ddb-5e65-4c65-ab52-afcc43367284.png",
  "/lovable-uploads/c328acee-44d0-4853-b22f-33fac04cebc5.png",
  "/lovable-uploads/4c0ba5f9-03e4-4055-881d-0f6669d6e2ce.png",
  "/lovable-uploads/6201e8fe-3b91-4591-962e-4efbac0ed283.png",
  "/lovable-uploads/545cccd8-22bb-479d-82a4-4efeae621aeb.png",
  "/lovable-uploads/8761c852-4e29-4a9e-bf5c-f9748d860071.png",
  "/lovable-uploads/7552db56-643b-4af2-9986-2fd2cf12d1a8.png",
  "/lovable-uploads/84c683af-ce21-4256-86c2-5870369180f2.png",
  "/lovable-uploads/8583d22c-72ff-4c18-a053-8ae90b271b90.png",
  "/lovable-uploads/b8392819-b4f7-433f-94fd-cbbc7c918404.png",
  "/lovable-uploads/c42abda9-809b-43b2-8a8a-4fcbd69195e4.png",
  "/lovable-uploads/b24bdcc0-5a73-4465-ab6d-5d29279bcfa8.png",
];

const AwardsSlider: React.FC = () => {
  return (
    <section className="w-full bg-gray-50 py-10">
      <div className="container mx-auto px-2">
        <Carousel opts={{ align: "center", loop: true }}>
          <CarouselContent>
            {AWARD_IMAGES.map((src, i) => (
              <CarouselItem key={i} className="flex justify-center">
                <div className="w-full flex justify-center">
                  <img
                    src={src}
                    alt={`Award ${i + 1}`}
                    className="w-full max-w-xl md:max-w-2xl lg:max-w-4xl object-contain rounded-xl shadow border-2 border-nclex-blue bg-white"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default AwardsSlider;

