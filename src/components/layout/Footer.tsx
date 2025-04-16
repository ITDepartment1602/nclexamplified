
import React from "react";
import { Link } from "react-router-dom";
import { 
  Facebook, 
  Instagram, 
  Mail, 
  MapPin, 
  Phone, 
  Clock, 
  ExternalLink 
} from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-purple-400">NCLEX Amplified</h3>
            <p className="text-gray-300 text-sm">
              "Founded in the year 2021, NCLEX Amplified Review Center stands as One of 
              the Leading Review Centers in the Philippines."
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="https://facebook.com" className="text-gray-300 hover:text-purple-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" className="text-gray-300 hover:text-purple-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="mailto:nclexamplified@gmail.com" className="text-gray-300 hover:text-purple-400 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-purple-400">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-purple-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-purple-400 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-purple-400 transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-purple-400 transition-colors">Contact</Link>
              </li>
              <li>
                <a href="https://nclexamplifiedreviewcenter.com/nclex/login" 
                   className="text-gray-300 hover:text-purple-400 transition-colors flex items-center">
                  Login <ExternalLink size={14} className="ml-1" />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/OurPathwayOfficial" 
                   className="text-gray-300 hover:text-purple-400 transition-colors flex items-center">
                  Processing Center <ExternalLink size={14} className="ml-1" />
                </a>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-purple-400">Working Hours</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start">
                <Clock size={18} className="mr-2 mt-1 text-purple-400" />
                <div>
                  <p>Monday – Saturday</p>
                  <p>8.00 AM – 5.00 PM Ph Time</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-purple-400">Contact Us</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-purple-400" />
                <span>Bacoor, Cavite</span>
              </li>
              <li className="flex items-start">
                <Phone size={18} className="mr-2 mt-1 text-purple-400" />
                <span>09858099011 | 090544741481</span>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="mr-2 mt-1 text-purple-400" />
                <a href="mailto:nclexamplified@gmail.com" className="hover:text-purple-400 transition-colors">
                  nclexamplified@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-6 mb-4 md:mb-0">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="bg-white/10 w-12 h-12 rounded-full flex items-center justify-center">
                <span className="text-purple-400 font-semibold">{i}</span>
              </div>
            ))}
          </div>
          <div className="text-gray-400 text-sm text-center md:text-right">
            <p>© NCLEX Amplified, All Right Reserved.</p>
            <p className="mt-1">Designed By: NCLEX Amplified</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
