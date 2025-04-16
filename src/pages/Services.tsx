
import React, { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesGrid from "@/components/services/ServicesGrid";
import TestimonialSlider from "@/components/home/TestimonialSlider";
import ProgramOverview from "@/components/home/ProgramOverview";
import BackToTop from "@/components/common/BackToTop";

const Services: React.FC = () => {
  useEffect(() => {
    document.title = "Our Services - NCLEX Amplified Review Center";
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

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
      <BackToTop />
    </div>
  );
};

export default Services;
