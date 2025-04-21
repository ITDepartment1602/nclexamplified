import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full bg-white shadow font-sans z-40">
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
              <path d="M22 12a10 10 0 10-11.5 9.9v-7h-2v-2.9h2V9.5a3 3 0 013-3h2.05v2.38H15c-.5 0-1 .4-1 1v2.2h2.6l-.4 2.9H14v7A10 10 0 0022 12z" />
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
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Sidebar for Mobile Menu */}
      <div className={`fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
        <div className={`fixed right-0 top-0 w-3/4 max-w-sm bg-white h-full shadow-lg transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
          <div className="flex justify-end p-4">
            <button onClick={toggleMenu} className="text-black">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
              </svg>
            </button>
          </div>
          <div className="flex flex-col items-center py-10">
            <Link to="/" className="text-gray-700 text-lg font-medium transition hover:text-nclex-blue py-2">Home</Link>
            <Link to="/about" className="text-gray-700 text-lg font-medium transition hover:text-nclex-blue py-2">About</Link>
            <Link to="/services" className="text-gray-700 text-lg font-medium transition hover:text-nclex-blue py-2">Services</Link>
            <Link to="/contact" className="text-gray-700 text-lg font-medium transition hover:text-nclex-blue py-2">Contact</Link>
            <Link to="https://nclexamplifiedreviewcenter.com/nclex/login">
              <Button className="mt-4 px-5 py-2 bg-primary text-white font-sans text-sm font-semibold rounded shadow hover:bg-nclex-blue transition focus:outline-none">
                Login
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
