"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaAward,
  FaCertificate,
  FaExternalLinkAlt,
  FaCalendar,
  FaBuilding,
} from "react-icons/fa";

const certifications = [
  {
    image: "/CTTC Cirtificate.jpeg",
    title: "Full Stack Development",
    institution: "CTTC Bhubaneswar",
    year: "2024",
    category: "Development",
    link: "/CTTC Cirtificate.jpeg",
  },
  {
    image: "/unified_mentor.png",
    title: "Web Development Internship",
    institution: "Unified Mentor",
    year: "2024",
    category: "Internship",
    link: "unified_mentor.png",
  },
  {
    image: "/eureka.png",
    title: "Innovation & Research",
    institution: "C.V Raman Global University",
    year: "2025",
    category: "Research",
    link: "eureka.png",
  },
  {
    image: "/pod.png",
    title: "AI & Machine Learning",
    institution: "POD AI Internship",
    year: "2024",
    category: "AI/ML",
    link: "pod.png",
  },
  {
    image: "/academer.png",
    title: "Software Engineering",
    institution: "Academer",
    year: "2023",
    category: "Development",
    link: "academer.png",
  },
  {
    image: "/ey.png",
    title: "Professional Certificate",
    institution: "EY Global",
    year: "2024",
    category: "Professional",
    link: "ey.png",
  },
  {
    image: "/paloalto.png",
    title: "Cybersecurity Fundamentals",
    institution: "Palo Alto Networks",
    year: "2024",
    category: "Security",
    link: "paloalto.png",
  },
];

export default function Certifications() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section
      id="certifications"
      className="py-24 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-gray-900 via-slate-900 to-gray-900 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.03),transparent_70%)] pointer-events-none" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-sm mb-6"
          >
            <FaAward className="text-purple-400" />
            <span className="text-sm font-medium text-purple-300">
              Professional Credentials
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Certifications & Achievements
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Continuous learning through industry-recognized certifications and professional development programs
          </motion.p>
        </div>

        {/* Stats Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {[
            { value: certifications.length, label: "Total Certifications" },
            { value: "5+", label: "Top Institutions" },
            { value: "2023-2025", label: "Years Active" },
            { value: "100%", label: "Verified" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="relative p-4 rounded-xl bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 text-center group"
            >
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent mb-1">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-gray-400 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Infinite Scroll Carousel */}
        <div className="relative overflow-hidden py-8">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-900 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-900 to-transparent z-10 pointer-events-none" />

          <motion.div
            className="flex gap-6"
            animate={{ x: isPaused ? undefined : ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 40,
              ease: "linear",
            }}
            onHoverStart={() => setIsPaused(true)}
            onHoverEnd={() => setIsPaused(false)}
          >
            {[...certifications, ...certifications].map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative min-w-[320px] md:min-w-[360px] flex-shrink-0"
              >
                <div className="relative h-full rounded-2xl bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl border border-gray-700/50 overflow-hidden shadow-xl hover:shadow-purple-500/20 transition-all duration-500 hover:scale-105 hover:border-purple-500/50">
                  
                  {/* Image Section */}
                  <div className="relative w-full h-[220px] overflow-hidden">
                    <Image
                      src={cert.image}
                      alt={cert.title || "Certificate"}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-purple-500/90 backdrop-blur-sm border border-purple-400/30 shadow-lg">
                      <span className="text-xs font-bold text-white">
                        {cert.category}
                      </span>
                    </div>

                    {/* Verified Badge */}
                    <div className="absolute top-4 left-4 flex items-center gap-1 px-2 py-1 rounded-full bg-green-500/90 backdrop-blur-sm border border-green-400/30">
                      <FaCertificate className="text-white text-xs" />
                      <span className="text-xs font-bold text-white">Verified</span>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6 space-y-4">
                    {/* Title */}
                    <h3 className="text-lg md:text-xl font-bold text-white line-clamp-2 group-hover:text-purple-300 transition-colors">
                      {cert.title}
                    </h3>

                    {/* Institution */}
                    <div className="flex items-center gap-2 text-gray-300">
                      <FaBuilding className="text-indigo-400 flex-shrink-0" />
                      <p className="text-sm font-medium line-clamp-1">
                        {cert.institution}
                      </p>
                    </div>

                    {/* Year */}
                    <div className="flex items-center gap-2 text-gray-400">
                      <FaCalendar className="text-purple-400 flex-shrink-0 text-sm" />
                      <p className="text-sm">Issued: {cert.year}</p>
                    </div>

                    {/* View Certificate Link */}
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-purple-400 hover:text-purple-300 transition-colors group/link"
                    >
                      View Certificate
                      <FaExternalLinkAlt className="text-xs group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  </div>

                  {/* Decorative corner accent */}
                  <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-purple-500/20 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Pause Instruction */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center text-sm text-gray-500 mt-8"
        >
          Hover over any certificate to pause and explore
        </motion.p>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500/10 to-indigo-500/10 border border-purple-500/30">
            <FaAward className="text-purple-400 text-xl" />
            <p className="text-gray-300 text-sm md:text-base">
              All certificates are verified and can be validated through official channels
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}