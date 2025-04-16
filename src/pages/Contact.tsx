
import React, { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";

const Contact: React.FC = () => {
  useEffect(() => {
    document.title = "Contact Us - NCLEX Amplified Review Center";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <ContactHero />
        <ContactInfo />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
