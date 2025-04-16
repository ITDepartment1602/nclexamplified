
import React, { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AboutHero from "@/components/about/AboutHero";
import AwardsSlider from "@/components/about/AwardsSlider";
import CharitySlider from "@/components/about/CharitySlider";
import TestimonialSlider from "@/components/home/TestimonialSlider";
import FounderSection from "@/components/home/FounderSection";

const About: React.FC = () => {
  useEffect(() => {
    document.title = "About Us - NCLEX Amplified Review Center";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <AboutHero />
        <FounderSection />
        <AwardsSlider />
        <TestimonialSlider />
        <CharitySlider />
      </main>
      <Footer />
    </div>
  );
};

export default About;
