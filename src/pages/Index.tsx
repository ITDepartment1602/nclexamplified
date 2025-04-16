
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import StandoutSection from "@/components/home/StandoutSection";
import FounderSection from "@/components/home/FounderSection";
import ProgramOverview from "@/components/home/ProgramOverview";
import TestimonialSlider from "@/components/home/TestimonialSlider";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <StandoutSection />
        <FounderSection />
        <TestimonialSlider />
        <ProgramOverview />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
