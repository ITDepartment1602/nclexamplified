
import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import BackToTop from "@/components/common/BackToTop";

const Contact: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Helmet>
        <title>Contact NCLEX Amplified | Get in Touch with Our NCLEX Review Center</title>
        <meta name="description" content="Contact NCLEX Amplified Review Center for NCLEX preparation inquiries, enrollment information, and personalized consultation. Get in touch with our team today." />
        <meta name="keywords" content="Contact NCLEX Review Center, NCLEX Consultation, NCLEX Enrollment, NCLEX Philippines Contact" />
        <link rel="canonical" href="https://nclexamplified.com/contact" />
      </Helmet>
      <Navbar />
      <main className="flex-grow">
        <ContactHero />
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
