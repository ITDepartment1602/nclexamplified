
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 w-full bg-white/95 backdrop-blur-sm border-b z-30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold text-purple-800">NCLEX</span>
              <span className="text-xl font-semibold ml-1">Amplified</span>
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-purple-700 font-medium transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-purple-700 font-medium transition-colors">
              About Us
            </Link>
            <Link to="/services" className="text-gray-700 hover:text-purple-700 font-medium transition-colors">
              Services
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-purple-700 font-medium transition-colors">
              Contact
            </Link>
            <a href="https://nclexamplifiedreviewcenter.com/nclex/login" 
               className="text-gray-700 hover:text-purple-700 font-medium transition-colors">
              Login
            </a>
            <Button asChild size="lg" className="bg-purple-700 hover:bg-purple-800">
              <a href="https://m.me/NCLEX.Amplified.Official">Enroll Now!</a>
            </Button>
          </nav>
          
          <div className="md:hidden flex items-center">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-purple-700 focus:outline-none"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-b shadow-lg">
            <Link to="/" 
                  className="block px-3 py-2 text-gray-700 hover:text-purple-700 font-medium"
                  onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link to="/about" 
                  className="block px-3 py-2 text-gray-700 hover:text-purple-700 font-medium"
                  onClick={() => setIsMenuOpen(false)}>
              About Us
            </Link>
            <Link to="/services" 
                  className="block px-3 py-2 text-gray-700 hover:text-purple-700 font-medium"
                  onClick={() => setIsMenuOpen(false)}>
              Services
            </Link>
            <Link to="/contact" 
                  className="block px-3 py-2 text-gray-700 hover:text-purple-700 font-medium"
                  onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
            <a href="https://nclexamplifiedreviewcenter.com/nclex/login" 
               className="block px-3 py-2 text-gray-700 hover:text-purple-700 font-medium"
               onClick={() => setIsMenuOpen(false)}>
              Login
            </a>
            <a href="https://m.me/NCLEX.Amplified.Official" 
               className="block px-3 py-2 bg-purple-700 text-white font-medium rounded-md hover:bg-purple-800 text-center"
               onClick={() => setIsMenuOpen(false)}>
              Enroll Now!
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
