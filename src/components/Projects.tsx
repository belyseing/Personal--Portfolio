
"use client";

import React, { useState, useEffect, useRef } from "react";
import { ExternalLink, Github, ArrowRight, Zap } from "lucide-react";
import Image from "next/image";

interface Project {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  link: string;
  github?: string;
  category: string;
}

const projects: Project[] = [
  {
    title: "Recipe review",
    description:
      "A simple and clean platform where you can browse, explore, and read detailed recipes for all kinds of meals.",
    image: "/Recipe.png",
    techStack: ["TypeScript", "Javascript", "Tailwind css", "Firebase"],
    link: "https://recipe-viewer-nine.vercel.app/",
    github: "https://github.com/belyseing/Recipe-Viewer",
    category: "Web Application",
  },
  {
    title: "Journal App",
    description:
      "A beautifully designed app to write, save, and manage your daily thoughts and secure login.",
    image: "/Journal.png",
    techStack: ["TypeScript", "Javascript", "Tailwind Css", "Clerk"],
    link: "https://journal-app-virid-six.vercel.app/",
    github: "https://github.com/belyseing/Journal-app",
    category: "Web Application",
  },
  {
    title: "Book Management App",
    description:
      "An easy-to-use tool for adding, updating, and organizing books — perfect for keeping track of what you’ve read.",
    image: "/books.png",
    techStack: ["TypeScript", "Javascript", "Tailwind CSS"],
    link: "https://book-management-app-fawn.vercel.app/",
    github: "https://github.com/belyseing/Book-Management-app",
    category: "Web Application",
  },
];

const Projects: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
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
      id="projects"
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-black to-gray-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_80%,rgba(0,255,127,0.1),transparent_60%)] opacity-30"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(0,191,255,0.05),transparent_60%)] opacity-20"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div
          className={`text-center mb-20 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-5xl lg:text-6xl font-black text-white mb-6">
            <span className="relative inline-block ml-4">
              <span className="text-white">Pro</span>
              <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">jects</span>
              <div className="absolute -bottom-1 left-0 w-36 h-1 bg-gradient-to-r from-teal-400 to-transparent rounded-full"></div>
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover my latest work showcasing innovative solutions, cutting-edge technologies,
            and exceptional user experiences across various domains.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group relative transform transition-all duration-700 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
              onMouseEnter={() => setHoveredProject(project.title)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl overflow-hidden hover:border-emerald-400/30 transition-all duration-500">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent z-10" />
                  <div
                    className={`absolute inset-0 bg-black/60 flex items-center justify-center gap-4 z-20 transition-all duration-300 ${
                      hoveredProject === project.title ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-black p-3 rounded-full hover:scale-110 transition-transform duration-300"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/10 backdrop-blur-sm text-white p-3 rounded-full border border-white/20 hover:scale-110 transition-transform duration-300"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-emerald-400 text-xs font-medium uppercase tracking-wider">
                      {project.category}
                    </span>
                    <Zap className="w-4 h-4 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-emerald-300 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-6 text-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-400/20 text-emerald-300 rounded-full text-xs font-medium hover:from-emerald-500/20 hover:to-cyan-500/20 hover:border-emerald-400/40 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`text-center transform transition-all duration-1000 delay-600 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-black font-bold rounded-full overflow-hidden hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-emerald-500/25">
              <span className="relative z-10 flex items-center gap-2">
                View All Projects
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
            <a
              href="https://github.com/belyseing"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 border-2 border-teal-600 text-teal-400 font-bold rounded-full hover:bg-teal-400 hover:text-black transition-all duration-300 hover:scale-105 inline-flex items-center justify-center"
            >
              <Github className="w-5 h-5 mr-2" />
              View on GitHub
            </a>
          </div>
          <p className="text-gray-500 mt-6 text-sm">
            Interested in working together? Let&#39;s create something amazing.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;