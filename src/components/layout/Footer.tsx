import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Facebook,
  Mail,
  MapPin,
  Phone,
  Clock,
  ExternalLink,
  ChevronRight,
  ArrowRight,
} from "lucide-react";

const Footer: React.FC = () => {
  const partnerLogos = [
    {
      id: 1,
      path: "/images/partners/partner-1.webp",
      alt: "Partner 1",
    },
    {
      id: 2,
      path: "/images/partners/partner-2.webp",
      alt: "Partner 2",
    },
    {
      id: 3,
      path: "/images/partners/partner-3.webp",
      alt: "Partner 3",
    },
    {
      id: 4,
      path: "/images/partners/partner-4.webp",
      alt: "Partner 4",
    },
    {
      id: 5,
      path: "/images/partners/partner-5.webp",
      alt: "Partner 5",
    },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-white text-slate-900 overflow-hidden">
      {/* ─── PRE-FOOTER CTA ─── */}
      <div className="relative z-10 container mx-auto px-4 -mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-nclex-blue to-[#2a3a7d] p-8 md:p-12 shadow-xl"
        >
          {/* soft glows as gradients rather than filter: blur() layers */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_30%,transparent_70%)]" />
          <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-[radial-gradient(circle,rgba(192,64,65,0.2)_30%,transparent_70%)]" />

          <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                Ready to Achieve Your{" "}
                <span className="text-[#8aa9ff]">American Dream?</span>
              </h2>
              <p className="text-blue-100 max-w-md text-lg">
                Join the leading NCLEX review center in the Philippines and
                start your global nursing career today.
              </p>
            </div>
            <Link
              to="/contact"
              className="group flex items-center gap-3 bg-white text-nclex-blue px-8 py-4 rounded-full font-bold text-lg hover:bg-green-400 hover:text-white transition-all duration-300 shadow-xl"
            >
              Enroll Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* ─── MAIN FOOTER CONTENT ─── */}
      <div className="container mx-auto pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Column 1: Brand & Bio */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              {/* 62 KB raster of Logo.svg (848 KB); the padding matches the SVG's own margin */}
              <img
                src="/images/logo-loader.webp"
                alt="Logo"
                width={80}
                height={80}
                loading="lazy"
                decoding="async"
                className="h-20 w-20 p-[4.5px]"
              />
              <div className="flex flex-col">
                <span className="text-2xl font-black text-nclex-blue leading-none">
                  NCLEX
                </span>
                <span className="text-xl font-bold text-nclex-red tracking-tight">
                  Amplified
                </span>
              </div>
            </div>
            <p className="text-slate-500 italic text-start text-sm leading-relaxed">
              "Founded in 2021, we are the Philippines' premier review center,
              dedicated to empowering nurses to conquer the NCLEX and thrive
              globally."
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://www.facebook.com/NCLEXAmplifiedReviewCenter"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-slate-50 border border-slate-200 text-slate-400 hover:text-white hover:bg-nclex-blue transition-all"
              >
                <Facebook size={20} />
              </a>
              <a
                href="mailto:amplifiedreviewcenter@gmail.com"
                className="p-3 rounded-full bg-slate-50 border border-slate-200 text-slate-400 hover:text-white hover:bg-nclex-blue transition-all"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="space-y-6 lg:pl-10">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-[0.2em]">
              Navigation
            </h3>
            <ul className="space-y-4">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Our Services", path: "/services" },
                { name: "Contact", path: "/contact" },
                {
                  name: "Login Portal",
                  path: "https://nclexamplifiedreviewcenter.com/nclex/login",
                  external: true,
                },
              ].map((link) => (
                <li key={link.name}>
                  {link.external ? (
                    <a
                      href={link.path}
                      className="group flex items-center text-slate-600 hover:text-nclex-blue transition-colors text-sm font-medium"
                    >
                      <ChevronRight className="w-4 h-4 mr-2 text-nclex-red opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                      {link.name}
                      <ExternalLink size={12} className="ml-2 opacity-50" />
                    </a>
                  ) : (
                    <Link
                      to={link.path}
                      className="group flex items-center text-slate-600 hover:text-nclex-blue transition-colors text-sm font-medium"
                    >
                      <ChevronRight className="w-4 h-4 mr-2 text-nclex-red opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Schedule */}
          <div className="space-y-6">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-[0.2em]">
              Working Hours
            </h3>
            <div className="rounded-2xl bg-slate-50 border border-slate-100 p-5 space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-nclex-blue/10 text-nclex-blue">
                  <Clock size={20} />
                </div>
                <div>
                  <p className="text-slate-900 font-semibold">
                    Monday – Saturday
                  </p>
                  <p className="text-slate-500 text-sm">8:00 AM – 5:00 PM</p>
                  <p className="text-nclex-red text-[0.65rem] font-bold uppercase mt-1 tracking-tighter">
                    Philippine Standard Time
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Contact */}
          <div className="space-y-6">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-[0.2em]">
              Get In Touch
            </h3>
            <ul className="space-y-5 text-slate-600">
              <li className="flex items-start gap-4">
                <div className="mt-1 text-nclex-blue">
                  <MapPin size={20} />
                </div>
                <span className="text-sm">Bacoor, Cavite, Philippines</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 text-nclex-blue">
                  <Phone size={20} />
                </div>
                <span className="text-sm">0926 102 1491</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 text-nclex-blue">
                  <Mail size={20} />
                </div>
                <a
                  href="mailto:amplifiedreviewcenter@gmail.com"
                  className="text-sm hover:text-nclex-blue transition-colors"
                >
                  amplifiedreviewcenter@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* ─── PARTNERS & COPYRIGHT ─── */}
        <div className="mt-10 pt-12 border-t border-slate-100">
          <div className="flex flex-col items-center gap-12">
            {/* Logos */}
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
              {partnerLogos.map((logo) => (
                <img
                  key={logo.id}
                  src={logo.path}
                  alt={logo.alt}
                  width={40}
                  height={40}
                  loading="lazy"
                  decoding="async"
                  className="h-8 md:h-10 w-auto object-contain"
                />
              ))}
            </div>

            {/* Copyright */}
            <div className="flex items-center justify-center w-full text-slate-400 text-xs">
              <p className="text-center">
                © {currentYear} NCLEX Amplified Review Center. All Rights
                Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
