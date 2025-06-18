"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Download, MapPin } from "lucide-react";

const Home = () => {
  const expertise = [
    "Frontend Development",
    "UI/UX Design",
    "Performance Optimization",
  ];

  return (
    <section
      id="home"
      className="min-h-[120vh] flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-slate-800 to-gray-950 pb-16 sm:pb-16"
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

      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-24 sm:pt-28 pb-12 sm:pb-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-teal-300/10 border border-teal-300/30 rounded-full px-4 py-2"
            >
              <span className="text-teal-400 font-medium text-sm">Hello, I&#39;m</span>
            </motion.div>

            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
              >
                INGABIRE
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-teal-400 to-red-400">
                  Belyse
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg sm:text-xl lg:text-2xl text-gray-300 font-light"
              >
                Frontend Developer <span className="text-teal-500">&</span> UI/UX Designer
              </motion.p>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-2xl"
            >
              I build modern, responsive web applications that blend performance,
              accessibility, and visual excellence. With a passion for clean code and
              seamless user experiences, I transform ideas into scalable digital solutions
              using the latest in frontend technologies.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-3"
            >
              {expertise.map((skill, index) => (
                <span
                  key={index}
                  className={`px-4 py-2 border rounded-full text-sm backdrop-blur-sm transition-all duration-300 hover:scale-105 ${
                    index === 0 || index === 2
                      ? "bg-teal-600/10 border-teal-400/30 text-teal-600"
                      : "bg-white/5 border-white/10 text-gray-300"
                  }`}
                >
                  {skill}
                </span>
              ))}
            </motion.div>

            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-row flex-wrap items-center gap-3 text-sm text-gray-400"
            >
              <div className="flex items-center space-x-2">
                <MapPin size={16} className="text-teal-400" />
                <span>Kigali, Rwanda</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="inline-flex items-center px-2 py-1.5 bg-gradient-to-r from-green-600/30 to-emerald-600/30 rounded-full border border-green-400/40 backdrop-blur-sm animate-pulse-slow">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-ping" />
                  <span className="text-green-300 text-xs font-medium">Available for Projects</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <a
                href="#projects"
                className="group inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-teal-400 to-teal-600 text-black font-semibold rounded-xl hover:shadow-lg hover:shadow-teal-400/25 transition-all duration-300 hover:scale-105 whitespace-nowrap"
              >
                More Info
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="/Belyse's resume.pdf"
                download
                className="group inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 border-2 border-teal-400/30 text-white font-semibold rounded-xl hover:bg-teal-300/10 hover:border-teal-400/50 transition-all duration-300 whitespace-nowrap"
              >
                <Download size={18} className="mr-2 group-hover:translate-y-1 transition-transform" />
                Resume
              </a>
            </motion.div>
          </motion.div>

         
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center items-center relative mt-8 lg:mt-16 mb-6 sm:mb-10 lg:mb-8"
          >
            <div className="relative w-80 h-80 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px] rounded-full overflow-hidden">
              <Image
                src="/passport.PNG"
                alt="Profile"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;
