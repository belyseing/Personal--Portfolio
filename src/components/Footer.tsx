'use client';

import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Instagram, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const [dots, setDots] = useState<
    { left: string; top: string; animationDelay: string; animationDuration: string }[]
  >([]);

  useEffect(() => {
    const generatedDots = Array.from({ length: 15 }).map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 3}s`,
      animationDuration: `${3 + Math.random() * 2}s`,
    }));
    setDots(generatedDots);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  const services = [
    'Frontend Development',
    'React Applications',
    'UI/UX Design',
    'Website Optimization',
  ];

  return (
    <footer className="relative text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br bg-black "></div>
     
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

     
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="sm:col-span-2 lg:col-span-1 flex justify-center sm:justify-start lg:justify-end pr-20">
            <div>
             
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">IB</span>
                </div>
                <h3 className="text-gray-500 text-sm gap-6">Frontend Developer</h3>
              </div>

              <div className="flex space-x-3">
                <a
                  href="https://github.com/belyseing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-slate-800 hover:bg-teal-900 rounded-full flex items-center justify-center transition-colors"
                >
                  <Github size={16} />
                </a>
                <a
                  href="https://www.linkedin.com/in/ingabire-belyse/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-slate-800 hover:bg-teal-900 rounded-full flex items-center justify-center transition-colors"
                >
                  <Linkedin size={16} />
                </a>
                <a
                  href="https://www.instagram.com/ms.belyse/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-slate-800 hover:bg-teal-900 rounded-full flex items-center justify-center transition-colors"
                >
                  <Instagram size={16} />
                </a>
              </div>
            </div>
          </div>

         
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
            <div className="space-y-5 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h4 className="text-base font-semibold text-white relative">
                Links
                <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-teal-400 to-transparent rounded-full animate-expand"></div>
              </h4>
              <ul className="space-y-1.5">
                {navLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="group text-gray-400 hover:text-white transition-all duration-300 text-sm relative inline-block hover:translate-x-2"
                    >
                      <span className="relative z-10">{link.label}</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-teal-400/20 to-transparent rounded px-2 py-1 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left -mx-2 -my-1"></div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-5 space-x-3 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <h4 className="text-base font-semibold text-white relative">
                Services
                <div className="absolute -bottom-1 left-0 w-14 h-0.5 bg-gradient-to-r from-teal-400 to-transparent rounded-full animate-expand"></div>
              </h4>
              <ul className="space-y-1.5">
                {services.map((service, index) => (
                  <li
                    key={index}
                    className="text-gray-400 text-sm group hover:text-gray-200 transition-colors duration-300"
                  >
                    <span className="group-hover:translate-x-1 inline-block transition-transform duration-300">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-5 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <h4 className="text-base font-semibold text-white relative">
              Contact
              <div className="absolute -bottom-1 left-0 w-14 h-0.5 bg-gradient-to-r from-teal-400 to-transparent rounded-full animate-expand"></div>
            </h4>
            <div className="space-y-2.5">
              <div className="flex items-center space-x-2 group hover:translate-x-1 transition-transform duration-300">
                <div className="w-8 h-8 bg-gradient-to-br from-gray-800 to-gray-700 rounded-lg flex items-center justify-center border border-gray-600 group-hover:border-teal-400/50 transition-colors group-hover:shadow-sm group-hover:shadow-teal-400/20">
                  <MapPin size={14} className="text-teal-600" />
                </div>
                <span className="text-gray-300 text-sm">Kigali, Rwanda</span>
              </div>
              <div className="flex items-center space-x-2 group hover:translate-x-1 transition-transform duration-300">
                <div className="w-8 h-8 bg-gradient-to-br from-gray-800 to-gray-700 rounded-lg flex items-center justify-center border border-gray-600 group-hover:border-teal-400/50 transition-colors group-hover:shadow-sm group-hover:shadow-teal-400/20">
                  <Mail size={14} className="text-teal-600" />
                </div>
                <a
                  href="mailto:aimeishimwe25@gmail.com"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  belyseing@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2 group hover:translate-x-1 transition-transform duration-300">
                <div className="w-8 h-8 bg-gradient-to-br from-gray-800 to-gray-700 rounded-lg flex items-center justify-center border border-gray-600 group-hover:border-teal-400/50 transition-colors group-hover:shadow-sm group-hover:shadow-teal-400/20">
                  <Phone size={14} className="text-teal-600" />
                </div>
                <a href="tel:+250788123456" className="text-gray-300 hover:text-white transition-colors text-sm">
                  +250 791692126
                </a>
              </div>

              <div className="inline-flex items-center px-2 py-1.5 bg-gradient-to-r from-green-600/30 to-emerald-600/30 rounded-full border border-green-400/40 backdrop-blur-sm animate-pulse-slow">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-ping"></div>
                <span className="text-green-300 text-xs font-medium">Available</span>
              </div>
            </div>
          </div>
        </div>

       
         {/* footer */}
        <div className="border-t border-slate-700/50 mt-4 pt-3 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm mb-3 md:mb-0">
            © {currentYear} Belyse INGABIRE. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a
              href="#privacy"
              className="text-slate-400 hover:text-white transition-all duration-300 text-sm relative group"
            >
              Privacy
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-400 to-cyan-400 group-hover:w-full transition-all duration-300 rounded-full"></div>
            </a>
            <a
              href="#terms"
              className="text-slate-400 hover:text-white transition-all duration-300 text-sm relative group"
            >
              Terms
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-400 to-cyan-400 group-hover:w-full transition-all duration-300 rounded-full"></div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
