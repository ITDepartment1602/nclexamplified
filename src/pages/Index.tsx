
import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import StandoutSection from "@/components/home/StandoutSection";
import ProgramOverview from "@/components/home/ProgramOverview";
import TestimonialSlider from "@/components/home/TestimonialSlider";
import GlobalReach from "@/components/home/GlobalReach";
import BackToTop from "@/components/common/BackToTop";
import CycleCalendar from "@/components/home/CycleCalendar";

const Index: React.FC = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>NCLEX Amplified - Leading NCLEX Review Center | 94.7% Passing Rate</title>
        <meta name="description" content="The Most Successful NCLEX Review Center in the Philippines with 94.7% passing rate. Unlimited review until you pass. Join thousands of successful NCLEX passers." />
        <meta name="keywords" content="NCLEX, NCLEX Review Center, NCLEX Passer, NCLEX Philippines, NCLEX Exam Preparation, Nursing Exam" />
        <link rel="canonical" href="https://nclexamplified.com" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "NCLEX Amplified Review Center",
              "url": "https://nclexamplified.com",
              "logo": "https://nclexamplified.com/lovable-uploads/2e6dbcbd-c9b0-4ce8-8284-aff78cf1046d.png",
              "description": "Leading NCLEX Review Center with 94.7% passing rate",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Bacoor",
                "addressRegion": "Cavite",
                "addressCountry": "Philippines"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+639858099011",
                "contactType": "customer service",
                "email": "nclexamplified@gmail.com"
              },
              "sameAs": [
                "https://www.facebook.com/NCLEX.Amplified.Official"
              ]
            }
          `}
        </script>
      </Helmet>
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <GlobalReach />
        <CycleCalendar />
        <StandoutSection />
        <TestimonialSlider />
        <ProgramOverview />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Index;
