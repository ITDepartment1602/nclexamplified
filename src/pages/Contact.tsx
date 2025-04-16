
import React, { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import BackToTop from "@/components/common/BackToTop";

const Contact: React.FC = () => {
  useEffect(() => {
    document.title = "Contact Us - NCLEX Amplified Review Center";
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <ContactHero />
        <ContactInfo />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Contact;
