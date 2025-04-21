
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar: React.FC = () => {
  return (
    <nav className="w-full bg-white shadow font-sans">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <img src="/lovable-uploads/2e6dbcbd-c9b0-4ce8-8284-aff78cf1046d.png" alt="NCLEX Amplified Logo" className="h-10 w-auto" />  
        </Link>
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-gray-700 text-sm font-medium transition hover:text-nclex-blue" style={{ fontFamily: 'Poppins, sans-serif' }}>Home</Link>
          <Link to="/about" className="text-gray-700 text-sm font-medium transition hover:text-nclex-blue" style={{ fontFamily: 'Poppins, sans-serif' }}>About</Link>
          <Link to="/services" className="text-gray-700 text-sm font-medium transition hover:text-nclex-blue" style={{ fontFamily: 'Poppins, sans-serif' }}>Services</Link>
          <Link to="/contact" className="text-gray-700 text-sm font-medium transition hover:text-nclex-blue" style={{ fontFamily: 'Poppins, sans-serif' }}>Contact</Link>
          <a
            href="https://www.facebook.com/NCLEX.Amplified.Official"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2"
            aria-label="Facebook Page"
          >
            <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24" className="text-nclex-blue hover:scale-110 transition-transform"><path d="M22 12a10 10 0 10-11.5 9.9v-7h-2v-2.9h2V9.5a3 3 0 013-3h2.05v2.38H15c-.5 0-1 .4-1 1v2.2h2.6l-.4 2.9H14v7A10 10 0 0022 12z"></path></svg>
          </a>
          <Link to="https://nclexamplifiedreviewcenter.com/login">
            <Button className="ml-2 px-5 py-2 bg-primary text-white font-sans text-sm font-semibold rounded shadow hover:bg-nclex-blue transition focus:outline-none" style={{fontFamily:"Poppins, sans-serif"}}>
              Login
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
