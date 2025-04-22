
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const awardsImages = [
  "/lovable-uploads/a.jpg",
  "/lovable-uploads/b.jpg",
  "/lovable-uploads/c.jpg",
  "/lovable-uploads/d.jpg",
  "/lovable-uploads/e.jpg",
  "/lovable-uploads/f.jpg",
  "/lovable-uploads/g.jpg",
  "/lovable-uploads/h.jpg",
  "/lovable-uploads/i.jpg",
  "/lovable-uploads/j.jpg",
  "/lovable-uploads/k.jpg",
  "/lovable-uploads/l.jpg",
  "/lovable-uploads/m.jpg",
];

// Create an infinite repeating array for continuous loop
const createInfiniteArray = (arr: string[], repetitions: number): string[] => {
  return Array(repetitions).fill(arr).flat();
};

// Utility: Split images into groups per slide
function chunkArray(array: string[], size: number): string[][] {
  const result: string[][] = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}

const imagesPerSlide = 6; // Show 6 images per slide
const repetitions = 5; // Show the sequence 5 times
const infiniteImages = createInfiniteArray(awardsImages, repetitions);
const slides = chunkArray(infiniteImages, imagesPerSlide);

const AwardsSlider: React.FC = () => (
  <section className="py-16 bg-white font-sans">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold font-serif text-gray-900 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
          Awarded for Global Nursing Review Excellence
        </h2>
        <div className="w-20 h-1 bg-nclex-blue mx-auto mb-4"></div>
      </div>
      <Carousel
        opts={{
          loop: true,
          align: "center",
          skipSnaps: false,
        }}
        className="w-full"
      >
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

