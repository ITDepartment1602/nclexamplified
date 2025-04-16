
import React, { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
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
        <div className="container mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-10">
          <ContactInfo />
          <ContactForm />
        </div>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Contact;
