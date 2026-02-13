"use client";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaDownload,
  FaEnvelope,
} from "react-icons/fa";
import { motion } from "framer-motion";
import TypingText from "@/components/TypingText";
import Image from "next/image";

export default function Hero() {
  const socialLinks = [
    {
      Icon: FaGithub,
      href: "https://github.com/JagannathPrusty",
      label: "GitHub",
    },
    {
      Icon: FaLinkedin,
      href: "https://www.linkedin.com/in/jagannath-prusty-25286132a",
      label: "LinkedIn",
    },
    {
      Icon: FaInstagram,
      href: "https://www.instagram.com/jagannath_prusty_18",
      label: "Instagram",
    },
    {
      Icon: FaFacebook,
      href: "https://www.facebook.com/jagannath.prusty",
      label: "Facebook",
    },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-6 md:px-20 lg:px-32 pt-20 relative"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.05),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.05),transparent_50%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 backdrop-blur-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-indigo-300">
                Available for opportunities
              </span>
            </div>

            {/* Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-white">Hi, I'm</span>
                <br />
                <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Jagannath
                </span>
              </h1>
            </div>

            {/* Typing */}
            <div className="text-xl md:text-2xl font-semibold text-indigo-300">
              <TypingText />
            </div>

            {/* Description */}
            <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
              Specializing in building scalable web applications with modern
              technologies. Passionate about creating elegant solutions that
              combine performance, clean architecture, and exceptional user
              experiences.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="/Jagannath_Prusty_CV.pdf"
                download
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all duration-300 hover:scale-105"
              >
                <FaDownload className="text-lg group-hover:animate-bounce" />
                Download Resume
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-lg border-2 border-gray-700 text-white font-semibold hover:border-indigo-500 hover:bg-indigo-500/10 transition-all duration-300"
              >
                <FaEnvelope className="text-lg" />
                Get in Touch
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-8 border-t border-gray-800">
              <span className="text-sm text-gray-400 font-medium">
                Connect with me:
              </span>
              <div className="flex gap-3">
                {socialLinks.map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-700 bg-gray-800/50 hover:border-indigo-500 hover:bg-indigo-500/10 hover:text-indigo-400 transition-all duration-300 hover:scale-110"
                  >
                    <Icon className="text-base" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-8 -left-8 w-72 h-72 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-gradient-to-tr from-pink-500/20 to-indigo-500/20 rounded-full blur-3xl animate-pulse delay-1000" />

              {/* Main image container */}
              <div className="relative">
                {/* Professional frame */}
                <div className="absolute -inset-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl blur opacity-20" />
                
                <div className="relative w-80 h-96 lg:w-96 lg:h-[480px] rounded-2xl overflow-hidden border border-gray-700/50 shadow-2xl bg-gradient-to-br from-gray-800 to-gray-900">
                  <Image
                    src="/profile.jpg"
                    alt="Jagannath Prusty - Full Stack Developer"
                    fill
                    className="object-cover object-center"
                    priority
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60" />
                </div>

                {/* Professional title badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.3 }}
                  className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-max"
                >
                  <div className="px-6 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg shadow-indigo-500/30 border border-indigo-400/30">
                    <p className="text-sm md:text-base font-bold tracking-wide text-white whitespace-nowrap">
                      ☕ JAVA Full Stack Developer
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Floating accent cards */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.5, duration: 0.6 }}
                className="hidden lg:block absolute -left-12 top-20 px-4 py-3 rounded-lg bg-gray-800/80 backdrop-blur-md border border-gray-700 shadow-lg"
              >
                <p className="text-xs text-gray-400 font-medium mb-1">
                  Years of Experience
                </p>
                <p className="text-2xl font-bold text-indigo-400">0+</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.7, duration: 0.6 }}
                className="hidden lg:block absolute -right-12 bottom-32 px-4 py-3 rounded-lg bg-gray-800/80 backdrop-blur-md border border-gray-700 shadow-lg"
              >
                <p className="text-xs text-gray-400 font-medium mb-1">
                  Projects Completed
                </p>
                <p className="text-2xl font-bold text-purple-400">5+</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}