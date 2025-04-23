
import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AboutHero from "@/components/about/AboutHero";
import AwardsSlider from "@/components/about/AwardsSlider";
import CharitySlider from "@/components/about/CharitySlider";
import TestimonialSlider from "@/components/home/TestimonialSlider";
import FounderSection from "@/components/home/FounderSection";
import BackToTop from "@/components/common/BackToTop";

const About: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Helmet>
        <title>About NCLEX Amplified | Leading NCLEX Review Center in Philippines</title>
        <meta name="description" content="Learn about NCLEX Amplified Review Center - Founded in 2021, we've become the leading NCLEX Review Center in the Philippines with a 94.7% passing rate." />
        <meta name="keywords" content="NCLEX Review Center Philippines, About NCLEX Amplified, NCLEX Passers, NCLEX Review Program" />
        <link rel="canonical" href="https://nclexamplified.com/about" />
      </Helmet>
      <Navbar />
      <main className="flex-grow">
        <AboutHero />
        <FounderSection />
        <AwardsSlider />
        <TestimonialSlider />
        <CharitySlider />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default About;
