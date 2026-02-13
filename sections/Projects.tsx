"use client";

import Reveal from "@/components/Reveal";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt, FaCode, FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

const projects = [
  {
    title: "100 Inventions That Changed The World",
    description:
      "A dynamic full-stack web application built using PHP and MySQL that showcases 100 groundbreaking inventions that shaped human history. The platform includes authentication, structured content management, and responsive design.",
    tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    features: [
      "User authentication (Login / Signup)",
      "Dynamic content rendering from database",
      "Admin content management system",
      "Responsive UI for all devices",
    ],
    role: "Designed and developed both frontend and backend. Managed database structure and implemented secure authentication.",
    image: "/project1.jpeg",
    github: "https://github.com/JagannathPrusty",
    liveDemo: "#",
    category: "Full Stack",
    year: "2024",
  },
  {
    title: "Student Record Portal",
    description:
      "A full-stack Student Management System built using JSP, Servlets, and MySQL that allows administrators to manage student records efficiently with authentication and search functionality.",
    tech: ["Java", "JSP", "Servlets", "MySQL", "HTML", "CSS"],
    features: [
      "Add, update, delete student records",
      "Secure admin login system",
      "Search and filter functionality",
      "Pagination support",
    ],
    role: "Implemented backend logic using Servlets and integrated MySQL database for persistent storage.",
    image: "/project2.png",
    github: "https://github.com/JagannathPrusty",
    liveDemo: "#",
    category: "Enterprise",
    year: "2025",
  },
  {
    title: "Face Recognition System Using Machine Learning",
    description:
      "A real-time face recognition system built using Python and deep learning techniques. The system detects and recognizes faces using trained models and computer vision.",
    tech: ["Python", "NumPy", "OpenCV", "Keras", "TensorFlow"],
    features: [
      "Real-time face detection",
      "Deep learning model training",
      "Image preprocessing and normalization",
      "High accuracy recognition",
    ],
    role: "Developed ML model using Keras and TensorFlow. Implemented real-time detection using OpenCV.",
    image: "/image.jpg",
    github: "https://github.com/JagannathPrusty",
    liveDemo: "#",
    category: "Machine Learning",
    year: "2025",
  },
];

export default function Projects() {
  return (
    <Reveal>
      <section
        id="projects"
        className="py-24 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-gray-900 via-slate-900 to-gray-900 relative overflow-hidden"
      >
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.03),transparent_70%)] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 backdrop-blur-sm mb-6"
            >
              <FaCode className="text-indigo-400" />
              <span className="text-sm font-medium text-indigo-300">
                Portfolio
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            >
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-400 text-lg max-w-2xl mx-auto"
            >
              Showcasing my best work in full-stack development, machine learning, and enterprise solutions
            </motion.p>
          </div>

          {/* Projects Grid */}
          <div className="space-y-16 md:space-y-24">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                {/* Card Container */}
                <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl overflow-hidden border border-gray-700/50 backdrop-blur-sm hover:border-indigo-500/50 transition-all duration-500">
                  
                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/0 via-purple-600/0 to-pink-600/0 group-hover:from-indigo-600/5 group-hover:via-purple-600/5 group-hover:to-pink-600/5 transition-all duration-500" />

                  <div className="grid md:grid-cols-2 gap-8 md:gap-12 p-8 md:p-12 relative">
                    
                    {/* Content Side */}
                    <div className={`space-y-6 flex flex-col justify-center ${
                      index % 2 !== 0 ? "md:order-2" : ""
                    }`}>
                      
                      {/* Category & Year Badge */}
                      <div className="flex items-center gap-3 flex-wrap">
                        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                          {project.category}
                        </span>
                        <span className="text-sm text-gray-500 font-medium">
                          {project.year}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight group-hover:text-indigo-300 transition-colors duration-300">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                        {project.description}
                      </p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1.5 text-sm font-medium rounded-lg bg-gray-700/50 text-indigo-300 border border-gray-600/50 hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Key Features */}
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                          Key Features
                        </h4>
                        <ul className="space-y-2">
                          {project.features.slice(0, 3).map((feature, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-sm text-gray-400"
                            >
                              <FaStar className="text-indigo-400 mt-1 flex-shrink-0 text-xs" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex items-center gap-4 pt-4">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-105 transition-all duration-300"
                        >
                          <FaGithub className="text-lg" />
                          View Code
                        </a>

                        
                      </div>
                    </div>

                    {/* Image Side */}
                    <div className={`relative ${
                      index % 2 !== 0 ? "md:order-1" : ""
                    }`}>
                      <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-gray-700/50 shadow-2xl group-hover:shadow-indigo-500/20 transition-all duration-500">
                        
                        {/* Gradient overlay on hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500 z-10" />
                        
                        {/* Image */}
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                        />

                        {/* Decorative corner accent */}
                        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-indigo-500/30 to-transparent blur-2xl" />
                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-500/30 to-transparent blur-2xl" />
                      </div>

                      {/* Role Badge - Floating */}
                      <div className="absolute -bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-xs">
                        <div className="bg-gray-800/90 backdrop-blur-md border border-gray-700 rounded-lg p-4 shadow-xl">
                          <p className="text-xs text-gray-400 font-medium mb-1">
                            My Role
                          </p>
                          <p className="text-sm text-gray-200 leading-relaxed">
                            {project.role}
                          </p>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Project Number Indicator */}
                <div className="absolute -left-4 top-8 w-16 h-16 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center text-2xl font-bold text-white shadow-lg shadow-indigo-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {String(index + 1).padStart(2, '0')}
                </div>
              </motion.div>
            ))}
          </div>

          {/* View More CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mt-20"
          >
            <p className="text-gray-400 mb-6">
              Want to see more of my work?
            </p>
            <a
              href="https://github.com/JagannathPrusty"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-indigo-500 text-indigo-300 font-semibold rounded-lg hover:bg-indigo-500 hover:text-white transition-all duration-300"
            >
              <FaGithub className="text-xl" />
              Visit My GitHub
            </a>
          </motion.div>
        </div>
      </section>
    </Reveal>
  );
}