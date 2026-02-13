"use client";

import { FaHeart, FaCode } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-black border-t border-gray-800 overflow-hidden mt-20">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(99,102,241,0.05),transparent_70%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-8 relative z-10">
        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>© {new Date().getFullYear()} Jagannath Prusty.</span>
            <span className="hidden md:inline">All rights reserved.</span>
          </div>

          {/* Made with love */}
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Made with</span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <FaHeart className="text-red-500" />
            </motion.span>
            <span>and</span>
            <FaCode className="text-indigo-400" />
            <span>by Jagannath</span>
          </div>

          {/* Tech Stack Badge */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-800/50 border border-gray-700">
            <span className="text-xs text-gray-400">Built with</span>
            <span className="text-xs font-semibold text-indigo-400">Next.js & Tailwind CSS</span>
          </div>
        </div>
      </div>

      {/* Decorative gradient at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600" />
    </footer>
  );
}