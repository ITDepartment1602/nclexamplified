
import React, { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import StandoutSection from "@/components/home/StandoutSection";
import FounderSection from "@/components/home/FounderSection";
import ProgramOverview from "@/components/home/ProgramOverview";
import TestimonialSlider from "@/components/home/TestimonialSlider";
import BackToTop from "@/components/common/BackToTop";

const Index: React.FC = () => {
  useEffect(() => {
    document.title = "NCLEX Amplified - Leading NCLEX Review Center";
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

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
      <BackToTop />
    </div>
  );
};

export default Index;
