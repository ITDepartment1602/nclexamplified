
import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Mail,
  MapPin,
  Phone,
  Clock,
  ExternalLink
} from "lucide-react";

const Footer: React.FC = () => {
  const partnerLogos = [
    { id: 1, path: "/lovable-uploads/6cf9f4e3-fb7d-4c06-ac24-c9da45a4b005.png", alt: "Partner Logo 1" },
    { id: 2, path: "/lovable-uploads/84c683af-ce21-4256-86c2-5870369180f2.png", alt: "Partner Logo 2" },
    { id: 3, path: "/lovable-uploads/e5553874-755c-4905-8559-2d555729d0e0.png", alt: "Partner Logo 3" },
    { id: 4, path: "/lovable-uploads/c42abda9-809b-43b2-8a8a-4fcbd69195e4.png", alt: "Partner Logo 4" },
    { id: 5, path: "/lovable-uploads/b24bdcc0-5a73-4465-ab6d-5d29279bcfa8.png", alt: "Partner Logo 5" }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <img
                src="/lovable-uploads/2e6dbcbd-c9b0-4ce8-8284-aff78cf1046d.png"
                alt="NCLEX Amplified Logo"
                className="h-10 w-auto mr-2"
              />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-blue-300">NCLEX</span>
                <span className="text-xl font-semibold ml-5 -mt-1 text-red-400">Amplified</span>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              "Founded in the year 2021, NCLEX Amplified Review Center stands as One of
              the Leading Review Centers in the Philippines."
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="https://www.facebook.com/NCLEXAmplifiedReviewCenter" className="text-gray-300 hover:text-blue-300 transition-colors">
                <Facebook size={20} />
              </a>

              <a href="mailto:nclexamplified@gmail.com" className="text-gray-300 hover:text-blue-300 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-blue-300">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-blue-300 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-blue-300 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-blue-300 transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-blue-300 transition-colors">Contact</Link>
              </li>
              <li>
                <a href="https://nclexamplifiedreviewcenter.com/nclex/login"
                  className="text-gray-300 hover:text-blue-300 transition-colors flex items-center">
                  Login <ExternalLink size={14} className="ml-1" />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/OurPathwayOfficial"
                  className="text-gray-300 hover:text-blue-300 transition-colors flex items-center">
                  Processing Center <ExternalLink size={14} className="ml-1" />
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-blue-300">Working Hours</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start">
                <Clock size={18} className="mr-2 mt-1 text-blue-300" />
                <div>
                  <p>Monday – Saturday</p>
                  <p>8.00 AM – 5.00 PM Ph Time</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-blue-300">Contact Us</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-blue-300" />
                <span>Bacoor, Cavite</span>
              </li>
              <li className="flex items-start">
                <Phone size={18} className="mr-2 mt-1 text-blue-300" />
                <span>09261021491</span>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="mr-2 mt-1 text-blue-300" />
                <a href="mailto:nclexamplified@gmail.com" className="hover:text-blue-300 transition-colors">
                  nclexamplified@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-wrap justify-center gap-4 mb-6 md:mb-0">
            {partnerLogos.map((logo) => (
              <div key={logo.id} className="w-16 h-16 rounded-full bg-white p-1 flex items-center justify-center overflow-hidden">
                <img src={logo.path} alt={logo.alt} className="w-full h-full object-contain" />
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
