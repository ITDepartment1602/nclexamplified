
import React, { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import BackToTop from "@/components/common/BackToTop";

const Contact: React.FC = () => {
  useEffect(() => {
    document.title = "Contact Us - NCLEX Amplified Review Center";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <ContactHero />
        {/* Only one ContactInfo, removed duplicate */}
        <div className="w-full flex flex-col items-center px-2">
          <ContactInfo />
        </div>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Contact;
