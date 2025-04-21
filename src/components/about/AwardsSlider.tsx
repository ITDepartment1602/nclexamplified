
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const awardsImages = [
  "/lovable-uploads/c328acee-44d0-4853-b22f-33fac04cebc5.png",
  "/lovable-uploads/ce639469-6d5d-4a66-a59b-6ad65c414e6a.png",
  "/lovable-uploads/1e1b2852-8651-4bd1-91c1-e0c582a356e5.png",
  "/lovable-uploads/8583d22c-72ff-4c18-a053-8ae90b271b90.png",
  "/lovable-uploads/61109165-8bea-4a69-907a-14e0beeffad7.png",
  "/lovable-uploads/545cccd8-22bb-479d-82a4-4efeae621aeb.png",
  "/lovable-uploads/d567a07f-8596-4b22-a231-16c0c9140233.png",
  "/lovable-uploads/53a0284e-8c93-4b94-adbe-9ac11b1a2ec0.png",
  "/lovable-uploads/62c13a24-1c8a-42e8-8bfb-b2e6ece28e05.png",
  "/lovable-uploads/8761c852-4e29-4a9e-bf5c-f9748d860071.png",
  "/lovable-uploads/48a771c6-1577-43e9-8769-0f68244c47bb.png",
];

const AwardsSlider: React.FC = () => {
  return (
    <section className="py-16 bg-white font-sans">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold font-serif text-gray-900 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Awarded for Global Nursing Review Excellence
          </h2>
          <div className="w-20 h-1 bg-nclex-blue mx-auto mb-4"></div>
        </div>
        <div className="max-w-4xl mx-auto w-full">
          <Carousel className="w-full">
            <CarouselContent>
              {awardsImages.map((img, idx) => (
                <CarouselItem key={idx}>
                  <div className="flex justify-center items-center">
                    <img
                      src={img}
                      alt={`Award ${idx + 1}`}
                      className="w-full rounded-xl object-contain mx-auto shadow"
                      style={{ maxHeight: '550px', maxWidth: '100%' }}
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
};

export default AwardsSlider;
