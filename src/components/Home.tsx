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
      className="min-h-[120vh] flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-950 via-slate-900 to-gray-950 pb-16 sm:pb-16"
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
              className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-6 text-sm text-gray-400"
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
            
            <div className="absolute -top-32 -left-32 w-64 h-64 bg-gradient-to-r from-sky-300/25 to-blue-300/25 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-gradient-to-r from-violet-300/25 to-pink-300/25 rounded-full blur-3xl animate-pulse delay-1000" />
            <div className="absolute top-16 -right-16 w-32 h-32 bg-gradient-to-r from-emerald-300/20 to-teal-300/20 rounded-full blur-2xl animate-pulse delay-500" />
            

            
            <div className="relative group">
              
              <div className="absolute -inset-8 bg-gradient-conic from-sky-300/30  via-violet-300/30 to-sky-300/30 rounded-full blur-2xl opacity-60 group-hover:opacity-85 transition-opacity duration-700" />
              <div className="absolute -inset-6 bg-gradient-radial from-sky-300/25 to-transparent rounded-full blur-xl opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
              
              
              <div className="relative w-80 h-80 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px]">
               
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 via-white/15 to-white/5 backdrop-blur-xl border-2 border-white/30 shadow-2xl">
                  
                  <div className="absolute inset-2 rounded-full bg-gradient-to-br from-sky-300/20 via-blue-300/15 to-violet-300/20 border border-sky-300/40" />
                  
                 
                  <div className="absolute inset-4 rounded-full overflow-hidden bg-gradient-to-br from-slate-100/95 via-gray-50/98 to-white/95 shadow-inner">
                   
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.08),transparent_70%)] rounded-full" />
                    
                    
                    <div className="relative w-full h-full rounded-full overflow-hidden group-hover:scale-105 transition-transform duration-700 ease-out">
                      <Image
                        src="/passport.PNG"
                        alt="Profile"
                        fill
                        className="object-cover object-center filter group-hover:brightness-110 group-hover:contrast-110 transition-all duration-700"
                        priority
                      />
                      
                      
                      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-gray-200/20 rounded-full" />
                    </div>
                  </div>
                  
                  
                  <div className="absolute inset-0 rounded-full">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-transparent via-sky-400 to-transparent animate-pulse" />
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-pulse delay-1000" />
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0.5 h-12 bg-gradient-to-b from-transparent via-violet-400 to-transparent animate-pulse delay-500" />
                    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-0.5 h-14 bg-gradient-to-b from-transparent via-emerald-400 to-transparent animate-pulse delay-1500" />
                  </div>
                </div>
                
                
                <div className="absolute -top-4 -right-4 w-3 h-3 bg-sky-400 rounded-full animate-ping opacity-80" />
                <div className="absolute -bottom-6 -left-6 w-2 h-2 bg-blue-400 rounded-full animate-ping delay-700 opacity-70" />
                <div className="absolute top-8 -left-8 w-1.5 h-1.5 bg-violet-400 rounded-full animate-ping delay-1200 opacity-60" />
                
               
                <div className="absolute inset-0 rounded-full bg-gradient-conic from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 animate-spin-slow" style={{ animationDuration: '3s' }} />
              </div>
              
             
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                <div className="flex items-center justify-center w-12 h-6 bg-gradient-to-r from-green-400/30 to-emerald-400/30 rounded-full border border-green-400/50 backdrop-blur-sm">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute left-1/2 transform -translate-x-1/2 -bottom-6 sm:bottom-12"
        >
          <div className="flex flex-col items-center space-y-2">
            <div className="w-5 h-8 border border-teal-400/50 rounded-full flex justify-center">
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-2 bg-teal-400 rounded-full mt-2"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;