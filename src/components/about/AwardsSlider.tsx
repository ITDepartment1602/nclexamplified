
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// All awards image URLs
const awardsImages = [
  "/lovable-uploads/8d78c976-f787-4fc9-9258-61824a42a619.png",
  "/lovable-uploads/81e735c7-1645-49a5-9b22-16863db49faf.png",
  "/lovable-uploads/89fd2c48-14d1-4bfa-8847-64c4c183e3da.png",
  "/lovable-uploads/8d286dcf-3ffd-48ba-aab5-72681c072bf1.png",
  "/lovable-uploads/e5f25f15-719f-438b-bd62-9c5f00102568.png",
  "/lovable-uploads/4dc5cd4e-19fb-45d7-9d8e-4a7812746aa6.png",
  "/lovable-uploads/19ee5267-0ef0-419e-87db-f3d3498031b6.png",
  "/lovable-uploads/59a9086e-c0e9-4e09-9df2-dfdb7f0ef038.png",
  "/lovable-uploads/c328acee-44d0-4853-b22f-33fac04cebc5.png",
  "/lovable-uploads/ce639469-6d5d-4a66-a59b-6ad65c414e6a.png",
  "/lovable-uploads/1e1b2852-8651-4bd1-91c1-e0c582a356e5.png",
  "/lovable-uploads/8583d22c-72ff-4c18-a053-8ae90b271b90.png",
  "/lovable-uploads/61109165-8bea-4a69-907a-14e0beeffad7.png",
];

// Utility: Split images into groups per slide (e.g. 6 per slide)
function chunkArray(array: string[], size: number): string[][] {
  const result: string[][] = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}

const imagesPerSlide = 6; // Adjust as needed for your design/responsiveness
const slides = chunkArray(awardsImages, imagesPerSlide);

const AwardsSlider: React.FC = () => (
  <section className="py-16 bg-white font-sans">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold font-serif text-gray-900 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
          Awarded for Global Nursing Review Excellence
        </h2>
        <div className="w-20 h-1 bg-nclex-blue mx-auto mb-4"></div>
      </div>
      <Carousel className="w-full">
        <CarouselContent>
          {slides.map((group, idx) => (
            <CarouselItem key={idx}>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 place-items-center">
                {group.map((img, i) => (
                  <div key={i} className="flex items-center justify-center w-full h-40 sm:h-44 md:h-48 lg:h-56">
                    <img
                      src={img}
                      alt={`Award ${idx * imagesPerSlide + i + 1}`}
                      className="w-full h-full object-contain rounded-xl shadow"
                    />
                  </div>
                ))}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2" />
        <CarouselNext className="right-2" />
      </Carousel>
    </div>
  </section>
);
export default AwardsSlider;
