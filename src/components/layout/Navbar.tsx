import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full bg-white shadow font-sans">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <img src="/lovable-uploads/2e6dbcbd-c9b0-4ce8-8284-aff78cf1046d.png" alt="NCLEX Amplified Logo" className="h-10 w-auto" />  
        </Link>
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/" className="text-gray-700 text-sm font-medium transition hover:text-nclex-blue">Home</Link>
          <Link to="/about" className="text-gray-700 text-sm font-medium transition hover:text-nclex-blue">About</Link>
          <Link to="/services" className="text-gray-700 text-sm font-medium transition hover:text-nclex-blue">Services</Link>
          <Link to="/contact" className="text-gray-700 text-sm font-medium transition hover:text-nclex-blue">Contact</Link>
          <a
            href="https://www.facebook.com/NCLEX.Amplified.Official"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook Page"
          >
            <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24" className="text-nclex-blue hover:scale-110 transition-transform">
              <path d="M22 12a10 10 0 10-11.5 9.9v-7h-2v-2.9h2V9.5a3 3 0 013-3h2.05v2.38H15c-.5 0-1 .4-1 1v2.2h2.6l-.4 2.9H14v7A10 10 0 0022 12z"></path>
            </svg>
          </a>
          <Link to="https://nclexamplifiedreviewcenter.com/nclex/login">
            <Button className="ml-2 px-5 py-2 bg-primary text-white font-sans text-sm font-semibold rounded shadow hover:bg-nclex-blue transition focus:outline-none">
              Login
            </Button>
          </Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-black focus:outline-none">
            {isOpen ? (
              <svg width="24" height="24" fill="currentColor" className="text-black">
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg width="24" height="24" fill="currentColor" className="text-black">
                <path d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"} transition-all duration-300`}>
        <div className="flex flex-col items-center bg-white border-t border-gray-200 py-4">
          <Link to="/" className="text-gray-700 text-sm font-medium transition hover:text-nclex-blue py-2">Home</Link>
          <Link to="/about" className="text-gray-700 text-sm font-medium transition hover:text-nclex-blue py-2">About</Link>
          <Link to="/services" className="text-gray-700 text-sm font-medium transition hover:text-nclex-blue py-2">Services</Link>
          <Link to="/contact" className="text-gray-700 text-sm font-medium transition hover:text-nclex-blue py-2">Contact</Link>
          <Link to="https://nclexamplifiedreviewcenter.com/nclex/login">
            <Button className="mt-2 px-5 py-2 bg-primary text-white font-sans text-sm font-semibold rounded shadow hover:bg-nclex-blue transition focus:outline-none">
              Login
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
