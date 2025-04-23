
import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesGrid from "@/components/services/ServicesGrid";
import TestimonialSlider from "@/components/home/TestimonialSlider";
import ProgramOverview from "@/components/home/ProgramOverview";
import BackToTop from "@/components/common/BackToTop";

const Services: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>NCLEX Review Services | NCLEX Amplified Review Center</title>
        <meta name="description" content="Explore our comprehensive NCLEX review services - unlimited review until you pass, NGN-ready materials, online lectures, and personalized consultations." />
        <meta name="keywords" content="NCLEX Review Services, NCLEX Preparation, NCLEX Training, NCLEX Online Review, NCLEX Study Materials" />
        <link rel="canonical" href="https://nclexamplified.com/services" />
      </Helmet>
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
