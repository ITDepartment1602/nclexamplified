
import React from "react";
import SectionHeader from "@/components/common/SectionHeader";
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
  <section className="relative overflow-hidden bg-gradient-to-b from-white to-[#f5f7fd] py-16 lg:py-20">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader
        badge="Recognition"
        title={<>Awarded for <span className="text-nclex-blue">Global Nursing Review Excellence</span></>}
        description="Recognized by industry bodies for the quality of our review program and the results of our nurses."
      />
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
              <div className="grid grid-cols-2 gap-4 px-1 py-3 sm:grid-cols-3 sm:gap-5 lg:grid-cols-6">
                {group.map((img, i) => (
                  <div
                    key={i}
                    className="group flex aspect-[3/4] items-center justify-center rounded-2xl border border-slate-200/80 bg-white p-3 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_14px_28px_-22px_rgba(62,83,160,0.4)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_1px_2px_rgba(15,23,42,0.04),0_22px_40px_-22px_rgba(62,83,160,0.45)]"
                  >
                    <img
                      src={img}
                      alt={`Award ${idx * imagesPerSlide + i + 1}`}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full rounded-lg object-contain"
                    />
                  </div>
                ))}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="-left-2 border-slate-200 bg-white text-slate-700 shadow-md hover:bg-nclex-blue hover:text-white sm:-left-4" />
        <CarouselNext className="-right-2 border-slate-200 bg-white text-slate-700 shadow-md hover:bg-nclex-blue hover:text-white sm:-right-4" />
      </Carousel>
    </div>
  </section>
);

export default AwardsSlider;

