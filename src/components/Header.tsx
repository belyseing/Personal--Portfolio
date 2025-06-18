"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";

const navigationItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleNavClick = (href: string) => {
    setActiveSection(href.substring(1));
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleSectionChange = () => {
      navigationItems.forEach((item) => {
        const section = document.querySelector(item.href);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom > 100) {
            setActiveSection(item.href.substring(1));
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleSectionChange);
    handleSectionChange();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleSectionChange);
    };
  }, []);


  const currentHighlight = hoveredSection ?? activeSection;

  return (
    <header
      className={`fixed top-0 w-full z-50 py-2 transition-all duration-300 ${
        isScrolled
          ? "bg-gradient-to-r from-greenBlue/80 via-cyan-700/70 to-cyan-800/70 backdrop-blur-md border-b border-gray-900/60"
          : "bg-gradient-to-r from-greenBlue/50 via-cyan-700/40 to-cyan-800/40 backdrop-blur-sm border-b border-gray-900/20"
      }`}
    >
      <div className="w-full flex justify-between items-center px-4 sm:pl-16">
    
        <div className="flex items-center group cursor-pointer">
          <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
            <span className="text-black font-bold text-sm">IB</span>
          </div>
          <div className="hidden sm:block">
            <p className="text-xs text-gray-300 mt-0">Frontend Developer</p>
          </div>
        </div>

   
        <nav role="navigation" className="hidden lg:flex items-center space-x-8">
          {navigationItems.map((item) => {
            const isActive = currentHighlight === item.href.substring(1);
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={() => handleNavClick(item.href)}
                onMouseEnter={() => setHoveredSection(item.href.substring(1))}
                onMouseLeave={() => setHoveredSection(null)}
                aria-current={isActive ? "page" : undefined}
                className={`relative text-sm font-medium transition-all duration-300 cursor-pointer
                  hover:text-emerald-300 ${
                    isActive ? "text-emerald-400" : "text-gray-300"
                  }`}
              >
                {item.name}
                <span
                  className={`absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-emerald-400 to-cyan-400 transform origin-left transition-transform duration-300 ${
                    isActive ? "scale-x-100" : "scale-x-0 hover:scale-x-100"
                  }`}
                />
              </a>
            );
          })}
        </nav>

        
        <a
          href="/Belyse's resume.pdf"
          download
          className="hidden lg:flex items-center px-4 py-2 bg-gradient-to-r from-emerald-500 to-cyan-500 text-black font-semibold rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 group cursor-pointer"
        >
          <Download className="w-4 h-4 mr-2" />
          <span>Resume</span>
        </a>

       
        <button
          onClick={toggleMenu}
          className="lg:hidden w-10 h-10 flex items-center justify-center text-white hover:text-emerald-400 transition-colors duration-300 cursor-pointer"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

     
      <div
        className={`lg:hidden absolute top-full left-0 w-full border-b border-gray-900/80 transition-all duration-300 z-50 ${
          isMenuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        } bg-gradient-to-r from-cyan-950  to-cyan-900`}
      >
        <nav role="navigation" className="container mx-auto px-6 py-6">
          <ul className="space-y-4">
            {navigationItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={() => handleNavClick(item.href)}
                    aria-current={isActive ? "page" : undefined}
                    className={`block text-lg font-medium transition-all duration-300 py-2 px-3 rounded-lg cursor-pointer
                      ${
                        isActive
                          ? "text-emerald-300 bg-black/20 shadow-lg"
                          : "text-white hover:text-emerald-600 hover:bg-black/10 active:bg-black/20 active:scale-95"
                      } 
                      hover:scale-105 hover:shadow-md`}
                  >
                    {item.name}
                  </a>
                </li>
              );
            })}
          </ul>

          <a
     href="/belyse's resume.pdf"
     download
    className="mt-6 block text-center px-2 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 text-black font-semibold rounded-lg shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-xl lg:px-4"
    >
    <span className="flex justify-center items-center gap-2">
    <Download className="w-4 h-4" />
    Resume
  </span>
   </a>

    </nav>
    </div>
    </header>
  );
};

export default Header;
