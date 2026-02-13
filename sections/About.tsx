"use client";

import Reveal from "@/components/Reveal";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaCode,
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaDatabase,
  FaGitAlt,
  FaAward,
  FaLightbulb,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiMysql,
  SiOracle,
} from "react-icons/si";

const skillCategories = [
  {
    title: "Frontend",
    icon: FaReact,
    skills: [
      { name: "React", icon: FaReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    title: "Backend",
    icon: FaNodeJs,
    skills: [
      { name: "Java", icon: FaJava },
      { name: "SQL", icon: SiMysql },
      { name: "Oracle", icon: SiOracle },
    ],
  },
  {
    title: "Languages",
    icon: FaCode,
    skills: [
      { name: "C", icon: FaCode },
      { name: "Python", icon: FaPython },
      { name: "Java", icon: FaJava },
    ],
  },
  {
    title: "Tools & Others",
    icon: FaGitAlt,
    skills: [
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGitAlt },
      { name: "VS Code", icon: FaCode },
      { name: "Eclipse", icon: FaCode },
    ],
  },
];

export default function About() {
  return (
    <Reveal>
      <section
        id="about"
        className="py-24 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-gray-900 via-slate-900 to-gray-900 relative overflow-hidden"
      >
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(139,92,246,0.03),transparent_70%)] pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-pink-500/30 bg-pink-500/10 backdrop-blur-sm mb-6"
            >
              <FaLightbulb className="text-pink-400" />
              <span className="text-sm font-medium text-pink-300">
                Get to know me
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                About Me
              </span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-4xl space-y-4"
            >
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
                I'm{" "}
                <span className="text-indigo-400 font-bold">
                  Jagannath Prusty
                </span>
                , a passionate Full Stack Developer dedicated to crafting
                exceptional digital experiences. I thrive on solving complex
                problems and transforming ideas into scalable, high-performance
                applications.
              </p>
              <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                My expertise lies in modern web technologies including{" "}
                <span className="text-indigo-400 font-semibold">
                  React, Next.js, and Tailwind CSS
                </span>
                , with a strong foundation in backend development using{" "}
                <span className="text-pink-400 font-semibold">
                  Java and SQL
                </span>
                . I believe in writing clean, maintainable code and creating
                intuitive user interfaces that make a difference.
              </p>
            </motion.div>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
            {/* EDUCATION CARD */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Tilt
                glareEnable={true}
                glareMaxOpacity={0.15}
                glareColor="#ec4899"
                glarePosition="all"
                tiltMaxAngleX={8}
                tiltMaxAngleY={8}
                className="h-full"
              >
                <div className="relative h-full p-8 md:p-10 rounded-2xl bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl border border-gray-700/50 shadow-2xl hover:shadow-pink-500/20 transition-all duration-500 overflow-hidden">
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center shadow-lg">
                      <FaGraduationCap className="text-2xl text-white" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">
                      Education
                    </h3>
                  </div>

                  {/* Education Items */}
                  <div className="space-y-8">
                    <div className="relative pl-6 border-l-2 border-pink-500/30">
                      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-pink-500 shadow-lg shadow-pink-500/50" />
                      
                      <div className="space-y-2">
                        <h4 className="text-lg md:text-xl font-bold text-white">
                          C. V Raman Global University
                        </h4>
                        <p className="text-gray-400 font-medium">
                          Bachelor of Technology in Computer Science
                        </p>
                        <div className="flex items-center gap-4 text-sm">
                          <span className="text-gray-500">2023 - 2027</span>
                          <span className="text-indigo-400 font-bold">
                            Odisha, India
                          </span>
                        </div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/20 border border-pink-500/30 mt-2">
                          <FaAward className="text-pink-400 text-sm" />
                          <span className="text-pink-300 font-bold text-sm">
                            CGPA: 8.1
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="relative pl-6 border-l-2 border-indigo-500/30">
                      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-indigo-500 shadow-lg shadow-indigo-500/50" />
                      
                      <div className="space-y-2">
                        <h4 className="text-lg md:text-xl font-bold text-white">
                          Shree Ladukesh Anchalika H.S. School
                        </h4>
                        <p className="text-gray-400 font-medium">
                          Intermediate Science (10+2)
                        </p>
                        <div className="flex items-center gap-4 text-sm">
                          <span className="text-gray-500">2021 - 2023</span>
                        </div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-500/30 mt-2">
                          <FaAward className="text-indigo-400 text-sm" />
                          <span className="text-indigo-300 font-bold text-sm">
                            80.33%
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Decorative glow */}
                  <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br from-pink-500/20 to-rose-500/20 blur-3xl rounded-full" />
                </div>
              </Tilt>
            </motion.div>

            {/* SKILLS OVERVIEW CARD */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Tilt
                glareEnable={true}
                glareMaxOpacity={0.15}
                glareColor="#6366f1"
                glarePosition="all"
                tiltMaxAngleX={8}
                tiltMaxAngleY={8}
                className="h-full"
              >
                <div className="relative h-full p-8 md:p-10 rounded-2xl bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl border border-gray-700/50 shadow-2xl hover:shadow-indigo-500/20 transition-all duration-500 overflow-hidden">
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center shadow-lg">
                      <FaCode className="text-2xl text-white" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">
                      Technical Arsenal
                    </h3>
                  </div>

                  {/* Skills Categories */}
                  <div className="space-y-6">
                    {skillCategories.map((category, idx) => (
                      <div key={idx} className="space-y-3">
                        <div className="flex items-center gap-2">
                          <category.icon className="text-indigo-400 text-lg" />
                          <h4 className="font-bold text-white text-base">
                            {category.title}
                          </h4>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {category.skills.map((skill, i) => (
                            <div
                              key={i}
                              className="group flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-700/40 border border-gray-600/40 hover:border-indigo-500/60 hover:bg-indigo-500/10 transition-all duration-300"
                            >
                              <skill.icon className="text-indigo-400 text-sm group-hover:scale-110 transition-transform" />
                              <span className="text-sm font-medium text-gray-300 group-hover:text-indigo-300">
                                {skill.name}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Decorative glow */}
                  <div className="absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 blur-3xl rounded-full" />
                </div>
              </Tilt>
            </motion.div>
          </div>

          {/* Additional Stats/Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
          >
            {/* {[
              { value: "3+", label: "Years Experience", color: "indigo" },
              { value: "25+", label: "Projects Completed", color: "purple" },
              { value: "10+", label: "Technologies", color: "pink" },
              { value: "100%", label: "Client Satisfaction", color: "rose" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="relative p-6 rounded-xl bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700/50 hover:border-indigo-500/50 transition-all duration-300 text-center group"
              >
                <div
                  className={`text-3xl md:text-4xl font-bold bg-gradient-to-r from-${stat.color}-400 to-${stat.color}-500 bg-clip-text text-transparent mb-2`}
                >
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400 font-medium">
                  {stat.label}
                </div>
                <div className={`absolute inset-0 bg-gradient-to-br from-${stat.color}-500/5 to-transparent opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300`} />
              </div>
            ))} */}
          </motion.div>
        </div>
      </section>
    </Reveal>
  );
}