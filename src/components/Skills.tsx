"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  const [dots, setDots] = useState<
    { left: string; top: string; animationDelay: string; animationDuration: string }[]
  >([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) observer.observe(currentRef);

    const generatedDots = Array.from({ length: 20 }).map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 3}s`,
      animationDuration: `${3 + Math.random() * 2}s`,
    }));
    setDots(generatedDots);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
      observer.disconnect();
    };
  }, []);

  const technicalSkills = [
    {
      category: "Frontend Development",
      skills: [
        { name: "HTML5/CSS3", proficiency: 98 },
        { name: "JavaScript", proficiency: 90 },
        { name: "Tailwind CSS", proficiency: 98 },
        { name: "React.js", proficiency: 90 },
        { name: "Next.js", proficiency: 80 },
        { name: "TypeScript", proficiency: 85 },
      ],
    },
    {
      category: "Tools & Technologies",
      skills: [
        { name: "Git/GitHub", proficiency: 95 },
        { name: "Figma", proficiency: 90 },
        { name: "Firebase", proficiency: 80 },
        { name: "MongoDB", proficiency: 65 },
        { name: "Vercel/Netlify", proficiency: 90 },
        { name: "Node.js", proficiency: 70 },
      ],
    },
  ];

  const professionalSkills = [
    "Technical Leadership & Mentoring",
    "Agile & Scrum Methodologies",
    "Cross-Team Collaboration",
    "Problem-Solving & Debugging",
    "Project Planning & Execution",
    "Performance Optimization",
    "Code Review & Quality Assurance",
    "Deployment & Maintenance",
  ];

  const buildSteps = [
    {
      title: "Think",
      description: "Strategize and innovate, turning ideas into clear, actionable plans.",
      icon: (
        <svg className="w-8 h-8 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.75 17L9 20l-1.5-1.5L6 20l-.75-3m9-3h4.5m-12-6h4.5m4.5 6h4.5m-12-6h4.5M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
          />
        </svg>
      ),
    },
    {
      title: "Design",
      description: "Create stunning, user-centric interfaces with seamless experiences.",
      icon: (
        <svg className="w-8 h-8 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
          />
        </svg>
      ),
    },
    {
      title: "Develop",
      description: "Build fast, scalable apps with cutting-edge tech and precision.",
      icon: (
        <svg className="w-8 h-8 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-20 scroll-mt-20 text-white overflow-hidden px-4 sm:px-6 lg:px-8 flex justify-start items-start lg:justify-center lg:items-center bg-gradient-to-br from-gray-900 via-slate-800 to-gray-950"
    >
     
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,from-teal-900/20,via-transparent,to-transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,from-indigo-800/15,via-transparent,to-transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,from-emerald-800/18,via-transparent,to-transparent)]" />
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {dots.map((dot, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-teal-400 rounded-full opacity-30 animate-bounce"
            style={{
              left: dot.left,
              top: dot.top,
              animationDelay: dot.animationDelay,
              animationDuration: dot.animationDuration,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            <span className="relative inline-block">
              <span className="text-white">Sk</span>
              <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">ills</span>
              <div className="absolute -bottom-0 left-0 w-20 h-1 bg-gradient-to-r from-teal-400 to-transparent rounded-full"></div>
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto"
          >
            Comprehensive skill set focused on modern web development technologies and best practices
          </motion.p>
        </div>

        {/* Skills grid */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="w-full lg:w-2/3">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="bg-gray-700 rounded-2xl shadow-xl p-8 lg:ml-8"
            >
              <h3 className="text-2xl font-bold text-white mb-8">Technical Skills</h3>
              <div className="space-y-8">
                {technicalSkills.map((category, categoryIndex) => (
                  <div key={categoryIndex}>
                    <h4 className="text-lg font-semibold text-teal-400 mb-4 border-b border-gray-700 pb-2">
                      {category.category}
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skillIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ duration: 1, delay: 0.4 + skillIndex * 0.2 }}
                          className="p-4 bg-gray-700 rounded-xl hover:shadow-md transition-shadow"
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-medium text-white">{skill.name}</span>
                            <span className="text-sm text-gray-400">{skill.proficiency}%</span>
                          </div>
                          <div className="w-full bg-gray-600 rounded-full h-2">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={isVisible ? { width: `${skill.proficiency}%` } : { width: 0 }}
                              transition={{ duration: 1, delay: 0.4 + skillIndex * 0.2 }}
                              className="bg-gradient-to-r from-teal-300 to-slate-500 h-2 rounded-full"
                            />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="w-full lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="bg-gray-700 rounded-2xl shadow-xl p-8 mb-8"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Professional Skills</h3>
              <div className="space-y-3">
                {professionalSkills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ duration: 1, delay: 0.6 + index * 0.2 }}
                    className="flex items-center p-3 bg-teal-600/20 rounded-lg"
                  >
                    <div className="w-2 h-2 bg-teal-600 rounded-full mr-3"></div>
                    <span className="text-gray-300 font-medium">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 1.2, delay: 0.9 }}
          className="text-center"
        >
          <h3 className="text-4xl md:text-5xl font-extrabold mt-16 mb-12 relative">
            <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Create magic
            </span>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-teal-400 to-transparent rounded-full animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-teal-400/20 to-cyan-400/20 blur-3xl opacity-30 -z-10"></div>
          </h3>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {buildSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.9 }}
                  transition={{ duration: 1, delay: 0.9 + index * 0.3, type: "spring", stiffness: 100 }}
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  className="relative bg-gray-900/50 backdrop-blur-md rounded-2xl p-8 shadow-2xl transition-all duration-300 border border-teal-400/30 hover:border-teal-400/70"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-400/10 to-cyan-400/10 opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                  <div className="flex items-center justify-center mb-6 w-12 h-12 bg-teal-400/20 rounded-full mx-auto">
                    {step.icon}
                  </div>
                  <h4 className="text-xl font-bold text-white mb-4 text-center">{step.title}</h4>
                  <p className="text-gray-300 text-sm leading-relaxed text-center">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
