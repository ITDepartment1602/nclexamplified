import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { X, Menu, Home, Info, Layers, CalendarDays, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  const scrollToCalendar = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(false);
    document.body.style.overflow = 'unset';

    if (location.pathname === '/') {
      const calendarSection = document.getElementById('calendar');
      if (calendarSection) {
        calendarSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      navigate('/');
      setTimeout(() => {
        const calendarSection = document.getElementById('calendar');
        if (calendarSection) {
          calendarSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  };

  const handleScrollToTop = (e: React.MouseEvent, path: string) => {
    if (location.pathname === '/' && path === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: "Home", path: "/", icon: Home },
    { name: "About", path: "/about", icon: Info },
    { name: "Services", path: "/services", icon: Layers },
    { name: "Calendar", path: "#calendar", isAnchor: true, icon: CalendarDays },
    { name: "Contact", path: "/contact", icon: Mail },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[5000] font-sans border-b border-gray-100/50 transition-all duration-500 ease-in-out ${scrolled
          ? "bg-white/60 backdrop-blur-md shadow-sm py-1"
          : "bg-white/95 py-2"
          }`}
      >
        <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center max-w-[1400px]">
          <Link to="/" onClick={(e) => handleScrollToTop(e, "/")} className="flex items-center gap-2 group transition-transform duration-500 hover:scale-105 z-50">
            {/* Mobile / Small screen Logo */}
            <img
              src="/lovable-uploads/2e6dbcbd-c9b0-4ce8-8284-aff78cf1046d.png"
              alt="NCLEX Amplified Logo"
              className="h-8 w-auto md:hidden"
            />
            {/* Desktop Logo Text */}
            <span className="hidden md:block text-2xl font-black tracking-tight text-[#3E53A0] drop-shadow-sm group-hover:text-[#4A64C1] transition-colors duration-300">
              NARC<span className="text-nclex-red">.</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center justify-center space-x-2 flex-1 px-8 relative" onMouseLeave={() => setHoveredPath(null)}>
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path && !link.isAnchor;
              const Icon = link.icon;
              return link.isAnchor ? (
                <a
                  key={link.name}
                  href={link.path}
                  onClick={scrollToCalendar}
                  onMouseEnter={() => setHoveredPath(link.path)}
                  className="relative px-5 py-2.5 flex items-center justify-center gap-2 text-sm font-medium text-gray-600 hover:text-black transition-colors duration-300 z-10"
                >
                  <Icon className="w-4 h-4 opacity-70" />
                  {link.name}
                  {hoveredPath === link.path && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[5px] h-[5px] bg-black rounded-full"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.path}
                  onMouseEnter={() => setHoveredPath(link.path)}
                  onClick={(e) => handleScrollToTop(e, link.path)}
                  className={`relative px-5 py-2.5 flex items-center justify-center gap-2 text-sm font-medium transition-colors duration-300 z-10 ${isActive ? "text-black" : "text-gray-600 hover:text-black"
                    }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? "text-primary" : "opacity-70"}`} />
                  {link.name}

                  {hoveredPath === link.path && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[5px] h-[5px] bg-black rounded-full"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  {isActive && hoveredPath !== link.path && (
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[5px] h-[5px] bg-primary/40 rounded-full" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden lg:flex items-center gap-3 z-50">
            <a href="https://nclexamplifiedreviewcenter.com/nclex/login">
              <Button
                variant="ghost"
                className="h-9 px-5 py-0 text-gray-600 hover:text-black hover:bg-gray-50 text-sm font-semibold rounded-full transition-all duration-300"
              >
                Login
              </Button>
            </a>

            <Button
              onClick={() => setShowModal(true)}
              className="h-9 px-6 py-0 bg-primary text-white text-sm font-semibold rounded-full shadow-sm hover:bg-red-500 hover:shadow-[0_0_15px_rgba(239,68,68,0.6)] hover:scale-105 active:scale-95 transition-all duration-500 ease-out flex items-center justify-center overflow-visible"
            >
              <span className="leading-none mt-0.5">Register</span>
            </Button>
          </div>

          {/* Hamburger for Mobile & Tablet */}
          <div className="lg:hidden flex items-center z-50">
            <button
              onClick={toggleMenu}
              className="p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors focus:outline-none flex items-center justify-center overflow-visible"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-gray-900/40 backdrop-blur-sm z-[60] lg:hidden"
            onClick={toggleMenu}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 w-[85vw] max-w-[320px] bg-white h-full shadow-2xl border-l border-gray-100 flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center p-6 border-b border-gray-100">
                <Link to="/" onClick={(e) => { toggleMenu(); handleScrollToTop(e, "/"); }} className="text-2xl font-black tracking-tight text-[#3E53A0] drop-shadow-sm">
                  NARC<span className="text-nclex-red">.</span>
                </Link>
                <button onClick={toggleMenu} className="p-2 hover:bg-gray-100 text-gray-500 rounded-full transition-colors">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="flex flex-col p-6 gap-2 flex-grow overflow-y-auto">
                {navLinks.map((link) => {
                  const Icon = link.icon;
                  return link.isAnchor ? (
                    <a
                      key={link.name}
                      href={link.path}
                      onClick={scrollToCalendar}
                      className="flex items-center gap-4 px-4 py-3.5 text-gray-600 text-lg font-medium rounded-xl hover:bg-gray-50 hover:text-black transition-colors"
                    >
                      <Icon className="w-5 h-5 opacity-50" />
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      key={link.name}
                      to={link.path}
                      onClick={(e) => {
                        toggleMenu();
                        handleScrollToTop(e, link.path);
                      }}
                      className={`flex items-center gap-4 px-4 py-3.5 text-lg font-medium rounded-xl transition-colors ${location.pathname === link.path
                        ? "bg-gray-50 text-primary font-semibold"
                        : "text-gray-600 hover:bg-gray-50 hover:text-black"
                        }`}
                    >
                      <Icon className={`w-5 h-5 ${location.pathname === link.path ? "text-primary" : "opacity-50"}`} />
                      {link.name}
                    </Link>
                  );
                })}

                <div className="mt-8 flex flex-col gap-4 border-t border-gray-100 pt-8">
                  <a href="https://nclexamplifiedreviewcenter.com/nclex/login" className="w-full block">
                    <Button variant="outline" className="w-full py-6 text-base font-semibold text-gray-700 bg-white hover:bg-gray-50 hover:text-black border-gray-200 rounded-xl transition-all">
                      Login
                    </Button>
                  </a>
                  <Button
                    onClick={() => {
                      setShowModal(true);
                      setIsOpen(false);
                    }}
                    className="w-full py-6 text-base font-semibold bg-primary text-white transition-all duration-300 hover:bg-black rounded-xl shadow-lg shadow-black/5"
                  >
                    Register
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Register Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center bg-gray-900/40 backdrop-blur-sm z-[100] p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md relative"
            >
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-5 right-5 p-2 text-gray-400 hover:text-black hover:bg-gray-100 rounded-full transition-all"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-center mb-6">
                <div className="bg-primary/5 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-primary/10">
                  <Mail className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Join NCLEX Amplified</h2>
                <p className="text-gray-500 mt-2 text-sm">Start your success journey today.</p>
              </div>

              <div className="bg-gray-50/80 border border-gray-100 rounded-2xl p-5 mb-8">
                <p className="text-gray-600 leading-relaxed text-center sm:text-left text-sm">
                  To register, please message our <span className="font-semibold text-black cursor-pointer underline decoration-gray-300 underline-offset-4" onClick={() => window.open("https://www.facebook.com/NCLEXAmplifiedReviewCenter", "_blank")}>official Facebook page</span>. Our team will verify your details and assist you immediately.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <Button
                  onClick={() => window.open("https://www.facebook.com/NCLEXAmplifiedReviewCenter", "_blank")}
                  className="w-full py-6 bg-primary text-white font-semibold rounded-2xl hover:bg-black shadow-md transition-colors duration-300 flex items-center justify-center gap-2 group"
                >
                  <span>Message official Page</span>
                </Button>
                <Button
                  onClick={() => setShowModal(false)}
                  variant="ghost"
                  className="w-full text-gray-500 hover:text-black font-medium rounded-2xl hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

