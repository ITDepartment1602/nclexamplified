
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesGrid from "@/components/services/ServicesGrid";
import TestimonialSlider from "@/components/home/TestimonialSlider";
import ProgramOverview from "@/components/home/ProgramOverview";

const Services: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <ServicesHero />
        <ServicesGrid />
        <ProgramOverview />
        <TestimonialSlider />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
