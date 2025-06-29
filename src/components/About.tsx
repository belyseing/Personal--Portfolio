"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Github } from "lucide-react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen relative overflow-hidden px-4 sm:px-6 lg:px-9 py-20"
      id="about"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-black to-gray-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_80%,rgba(0,255,127,0.1),transparent_60%)] opacity-30"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(0,191,255,0.05),transparent_60%)] opacity-20"></div>
      </div>

      <div className="relative z-10 max-w-7xl w-full mx-auto">
        <div className="mb-12 sm:mb-16 lg:mb-20 text-center">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 sm:mb-6 relative inline-block">
              <span className="text-white">About</span>
              <span className="text-teal-400"> Me</span>
              <div className="absolute -bottom-1 left-0 w-24 sm:w-32 lg:w-36 h-1 bg-gradient-to-r from-teal-400 to-transparent rounded-full animate-expand"></div>
            </h2>
            <p className="text-lg sm:text-xl text-gray-500 font-light">
              From Curiosity to Mastery
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-10 lg:gap-20 items-center lg:px-8">
          {/* IMAGE SIDE */}
          <div
            className={`relative transform transition-all duration-1000 delay-300 order-2 lg:order-1 ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
            }`}
          >
            <div className="relative w-full">
              <div className="relative w-full aspect-square">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-cyan-400/20 blur-sm rounded-none"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/60 to-cyan-500/60 p-0 rounded-none">
                  <div className="w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-black p-0 rounded-none">
                    <div className="relative w-full h-full overflow-hidden bg-gradient-to-br from-emerald-400/5 to-cyan-400/5">
                      <Image
                        src="/image.png"
                        alt="Ingabire Belyse Professional Portrait"
                        fill
                        className="w-full h-auto object-cover"
                        priority
                        sizes="100vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Labels - Added more spacing from corners */}
              <div className="absolute right-4 sm:right-6 top-1/4 bg-gradient-to-r from-emerald-500 to-cyan-500 backdrop-blur-sm rounded-md p-2 border border-emerald-400/50 shadow-lg">
                <div className="text-center">
                  <div className="text-xs sm:text-sm md:text-lg font-bold text-black">10+</div>
                  <div className="text-[10px] sm:text-xs text-black/80">Projects</div>
                </div>
              </div>

              <div className="absolute left-4 sm:left-6 bottom-1/4 bg-black/90 backdrop-blur-sm rounded-md p-2 border border-cyan-400/50 shadow-lg">
                <div className="text-center">
                  <div className="text-xs sm:text-sm md:text-lg font-bold text-cyan-400">1+</div>
                  <div className="text-[10px] sm:text-xs text-gray-300">Years</div>
                </div>
              </div>

              <div className="absolute top-1/2 right-3 sm:right-4 w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full animate-bounce delay-500"></div>
              <div className="absolute top-1/3 left-3 sm:left-4 w-2 h-2 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full animate-bounce delay-700"></div>
              <div className="absolute bottom-1/2 right-1/4 w-2 h-2 bg-emerald-400/60 rounded-full animate-ping delay-300"></div>
            </div>
          </div>

          {/* TEXT SIDE */}
          <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
            <div
              className={`space-y-4 sm:space-y-6 transform transition-all duration-1000 delay-500 ${
                isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
              }`}
            >
              <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
                I&apos;m <span className="text-teal-500 font-semibold">Ingabire Belyse</span>, a
                passionate Web Developer and UI/UX Designer based in{" "}
                <span className="text-teal-700 font-semibold">Kigali, Rwanda</span>.
              </p>
              <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
                Currently pursuing a degree in Software Engineering at AUCA, I combine academic
                learning with hands-on experience to grow as a creative, impact-driven developer.
              </p>
              <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
                My skills span the entire web development process—from crafting clean, engaging
                user interfaces to building responsive, high-performance applications.
              </p>
            </div>

            <div
              className={`transform transition-all duration-1000 delay-700 ${
                isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
              }`}
            >
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                Core Expertise
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
                {[
                  "Frontend Development",
                  "React & Next.js",
                  "UI/UX Design",
                  "Performance Optimization",
                  "TypeScript",
                  "Node.js & APIs",
                ].map((skill) => (
                  <div key={skill} className="flex items-start lg:items-center space-x-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full flex-shrink-0 mt-2 lg:mt-0"></div>
                    <span className="text-gray-400 text-base leading-tight">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div
              className={`flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 pt-4 sm:pt-6 transform transition-all duration-1000 delay-900 ${
                isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
              }`}
            >
              <a href="/Belyse's resume.pdf" download className="w-full sm:w-auto">
                <button className="group relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-black font-bold rounded-full overflow-hidden hover:scale-105 transition-all duration-300">
                  <span className="relative z-10 flex items-center justify-center space-x-2">
                    <span>Download Resume</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </a>

              <a
                href="https://github.com/belyseing?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-teal-600 text-teal-400 font-bold rounded-full hover:bg-teal-400 hover:text-black transition-all duration-300 hover:scale-105 inline-flex items-center justify-center"
              >
                <Github className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                View Projects
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default About;