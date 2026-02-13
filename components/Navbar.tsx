"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaUser,
  FaProjectDiagram,
  FaCertificate,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ["home", "about", "projects", "certifications", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside or on link
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  const navItems = [
    { name: "Home", icon: FaHome, href: "#home" },
    { name: "About", icon: FaUser, href: "#about" },
    { name: "Projects", icon: FaProjectDiagram, href: "#projects" },
    { name: "Certifications", icon: FaCertificate, href: "#certifications" },
    { name: "Contact", icon: FaEnvelope, href: "#contact" },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-gray-900/95 backdrop-blur-lg border-b border-gray-800 shadow-lg shadow-indigo-500/5"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <motion.a
              href="#home"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#home");
              }}
              className="flex items-center gap-2 group"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/30 group-hover:shadow-indigo-500/50 transition-all duration-300">
                <span className="text-white font-bold text-xl">J</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                  Jagannath Prusty
                </h1>
                <p className="text-xs text-gray-400">Full Stack Developer</p>
              </div>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  whileHover={{ y: -2 }}
                  className={`relative group px-4 py-2 rounded-lg transition-all duration-300 ${
                    activeSection === item.name.toLowerCase()
                      ? "text-white bg-indigo-500/20"
                      : "text-gray-300 hover:text-white hover:bg-gray-800/50"
                  }`}
                >
                  <span className="relative z-10 font-medium text-sm">
                    {item.name}
                  </span>
                  {activeSection === item.name.toLowerCase() && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute inset-0 bg-gradient-to-r from-indigo-600/30 to-purple-600/30 rounded-lg"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300 group-hover:w-full rounded-full"></span>
                </motion.a>
              ))}
            </div>

            

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg border border-gray-700 bg-gray-800/50 hover:border-indigo-500 transition-all duration-300"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <FaTimes className="text-xl text-white" />
              ) : (
                <FaBars className="text-xl text-white" />
              )}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 lg:hidden"
            />

            {/* Mobile Menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-80 bg-gradient-to-br from-gray-900 via-gray-900 to-slate-900 border-l border-gray-800 shadow-2xl z-50 lg:hidden overflow-y-auto"
            >
              {/* Mobile Menu Header */}
              <div className="p-6 border-b border-gray-800">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-xl">J</span>
                    </div>
                    <div>
                      <h2 className="text-white font-bold">Jagannath Prusty</h2>
                      <p className="text-xs text-gray-400">Full Stack Developer</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-700 hover:border-indigo-500 transition-colors"
                  >
                    <FaTimes className="text-xl text-white" />
                  </button>
                </div>
              </div>

              {/* Mobile Navigation Links */}
              <div className="p-6 space-y-2">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`flex items-center gap-4 px-4 py-4 rounded-xl transition-all duration-300 ${
                      activeSection === item.name.toLowerCase()
                        ? "bg-gradient-to-r from-indigo-600/30 to-purple-600/30 border border-indigo-500/50 text-white shadow-lg shadow-indigo-500/20"
                        : "text-gray-300 hover:text-white hover:bg-gray-800/50 border border-transparent"
                    }`}
                  >
                    <item.icon className="text-xl text-indigo-400" />
                    <span className="font-semibold">{item.name}</span>
                  </motion.a>
                ))}
              </div>

              {/* Mobile Social Links */}
              <div className="p-6 border-t border-gray-800">
                <p className="text-sm text-gray-400 mb-4 font-medium">Connect with me</p>
                <div className="flex gap-3">
                  <a
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-gray-700 bg-gray-800/50 hover:border-indigo-500 hover:bg-indigo-500/10 transition-all duration-300"
                  >
                    <FaGithub className="text-xl text-gray-400" />
                    <span className="text-sm text-gray-300 font-medium">GitHub</span>
                  </a>
                  <a
                    href="https://linkedin.com/in/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-gray-700 bg-gray-800/50 hover:border-indigo-500 hover:bg-indigo-500/10 transition-all duration-300"
                  >
                    <FaLinkedin className="text-xl text-gray-400" />
                    <span className="text-sm text-gray-300 font-medium">LinkedIn</span>
                  </a>
                </div>
              </div>

              {/* Decorative gradient */}
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-indigo-500/5 to-transparent pointer-events-none" />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}