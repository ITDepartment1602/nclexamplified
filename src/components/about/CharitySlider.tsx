import React from "react";
import SectionHeader from "@/components/common/SectionHeader";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const charityImages = [
  "/lovable-uploads/e78b3212-2e6e-4aec-b36c-170daa9d849b.png",
  "/lovable-uploads/4dc5cd4e-19fb-45d7-9d8e-4a7812746aa6.png",
  "/lovable-uploads/e5f25f15-719f-438b-bd62-9c5f00102568.png",
  "/lovable-uploads/19ee5267-0ef0-419e-87db-f3d3498031b6.png",
  "/lovable-uploads/59a9086e-c0e9-4e09-9df2-dfdb7f0ef038.png",
  "/lovable-uploads/8d78c976-f787-4fc9-9258-61824a42a619.png",
  "/lovable-uploads/8d286dcf-3ffd-48ba-aab5-72681c072bf1.png",
  "/lovable-uploads/89fd2c48-14d1-4bfa-8847-64c4c183e3da.png",
  "/lovable-uploads/81e735c7-1645-49a5-9b22-16863db49faf.png",
];

const CharitySlider: React.FC = () => (
  <section className="bg-gradient-to-b from-white to-[#f5f7fd] py-16 font-sans lg:py-20">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader
        badge="Giving Back"
        title={<>Charity <span className="text-nclex-blue">Activities</span></>}
        description="Beyond the review, our team and passers give back to communities and foundations across the Philippines."
      />
      <div className="mx-auto max-w-3xl">
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
                <div className="flex aspect-square w-full items-center justify-center overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-2 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_30px_60px_-36px_rgba(34,48,106,0.5)] sm:aspect-[4/3]">
                  <img
                    src={img}
                    alt={`Charity Event ${idx + 1}`}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full rounded-2xl object-contain"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-3 border-slate-200 bg-white text-slate-700 shadow-md hover:bg-nclex-blue hover:text-white sm:-left-12" />
          <CarouselNext className="-right-3 border-slate-200 bg-white text-slate-700 shadow-md hover:bg-nclex-blue hover:text-white sm:-right-12" />
        </Carousel>
      </div>
    </div>
  </section>
);

export default CharitySlider;
