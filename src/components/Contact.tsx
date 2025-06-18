"use client";

import React, { useState, useEffect, useRef } from "react";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type FormErrors = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};

const Contact: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Animated dots state (from footer)
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

    return () => {
      if (currentRef) observer.unobserve(currentRef);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const generatedDots = Array.from({ length: 15 }).map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 3}s`,
      animationDuration: `${3 + Math.random() * 2}s`,
    }));
    setDots(generatedDots);
  }, []);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      console.log('Submitting form data:', formData);

      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('subject', formData.subject);
      formDataToSend.append('message', formData.message);

      const response = await fetch('https://formspree.io/f/xkgbreoo', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formDataToSend,
      });

      if (response.ok) {
        setFormData({ name: '', email: '', subject: '', message: '' });
        alert('Message sent successfully!');
      } else {
        const errorData = await response.json();
        alert(errorData.message || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-20 flex items-center justify-center p-6 scroll-mt-20 text-white overflow-hidden bg-gradient-to-br from-gray-900 via-slate-800 to-gray-950"
    >
      {/* Background layers matching home page */}
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

      {/* Animated dots */}
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
      <div className="relative z-10">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2
            className={`text-3xl font-bold text-white relative inline-block transform transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <span className="relative inline-block">
              Contact
              <div className="absolute -bottom-1 left-0 w-36 h-1 bg-gradient-to-r from-teal-400 to-transparent rounded-full animate-expand"></div>
            </span>{" "}
            <span className="text-teal-400">Me</span>
          </h2>
        </div>

        <p
          className={`text-gray-400 mt-4 max-w-xl mx-auto text-center transform duration-1000 delay-200 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          Ready to bring your ideas to life? I&#39;m just a message away!
        </p>

        <div className="flex flex-col md:flex-row gap-12 mt-14">
          <div className="md:w-3/5">
            <h3
              className={`text-xl font-bold text-gray-400 mb-6 transform transition-all duration-1000 delay-400 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              Let&#39;s Connect!
            </h3>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-300 mb-2 font-medium"
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-700 rounded-lg bg-gray-900/50 backdrop-blur-sm text-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    placeholder="Belyse Ingabire"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-300 mb-2 font-medium"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-700 rounded-lg bg-gray-900/50 backdrop-blur-sm text-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    placeholder="belyseing@gmail.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-gray-300 mb-2 font-medium"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-700 rounded-lg bg-gray-900/50 backdrop-blur-sm text-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Your project"
                />
                {errors.subject && (
                  <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-300 mb-2 font-medium"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-700 rounded-lg bg-gray-900/50 backdrop-blur-sm text-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  rows={5}
                  placeholder="Tell me about your project ..."
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full md:w-auto bg-teal-700 hover:bg-teal-600 text-white px-4 py-2 rounded-lg font-medium transition duration-300 shadow-md transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send!"}
              </button>
            </div>
          </div>

          {/* Contact Information Card */}
          <div className="md:w-2/5 md:mt-20">
            <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 p-8 rounded-lg shadow-md">
              <h3
                className={`text-2xl font-bold text-white mb-6 transform transition-all duration-1000 delay-600 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
              >
                Contact Information
              </h3>

              <address
                className={`space-y-6 not-italic transform transition-all duration-1000 delay-800 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
              >
                <div className="flex items-start">
                  <div className="bg-teal-600 p-3 rounded-full text-white mr-4">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Email</h4>
                    <a
                      href="mailto:belyseing@gmail.com"
                      className="text-teal-400 hover:text-teal-500"
                    >
                      belyseing@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-teal-600 p-3 rounded-full text-white mr-4">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Phone</h4>
                    <p className="text-teal-400 hover:text-teal-500">+250 791692126</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-teal-600 p-3 rounded-full text-white mr-4">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Location</h4>
                    <p className="text-teal-400 hover:text-teal-500">Kigali, Rwanda</p>
                  </div>
                </div>
              </address>

              <div
                className={`border-t border-gray-700/50 my-6 transform transition-all duration-1000 delay-900 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
              ></div>

              <div
                className={`flex justify-center space-x-6 transform transition-all duration-1000 delay-1000 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
              >
                <a
                  href="https://github.com/belyseing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-teal-500"
                >
                  <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/ingabire-belyse/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-teal-500"
                >
                  <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="https://x.com/belyseing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-teal-500"
                >
                  <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;