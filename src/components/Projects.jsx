"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
// import Image from "next/image"; // To be used when actual images are available

gsap.registerPlugin(ScrollTrigger);

import { demoProjects } from "@/data/projects";

// export const demoProjects = ... removed inline definition

export default function Projects() {
  const sectionRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 3;

  const totalPages = Math.ceil(demoProjects.length / projectsPerPage);
  const startIndex = (currentPage - 1) * projectsPerPage;
  const currentProjects = demoProjects.slice(startIndex, startIndex + projectsPerPage);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".project-card",
        { y: 50, opacity: 0 },
        {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.2,
          ease: "power2.out",
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [currentPage]); // Re-run animation when page changes

  return (
    <section id="projects" className="py-24 relative" ref={sectionRef}>
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 flex items-center">
          <span className="text-gradient">04.</span>
          <span className="ml-4">Featured Projects</span>
          <div className="ml-6 flex-grow h-px bg-gray-700/50"></div>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 min-h-[450px]">
          {currentProjects.map((project) => (
            <div key={project.id} className="project-card glass-card flex flex-col rounded-2xl overflow-hidden group">
              {/* Image Placeholder */}
              <div className="h-48 bg-gray-800 relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-80 z-10"></div>
                {/* 
                <Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-500 group-hover:scale-110" /> 
                */}
                <span className="text-gray-500 text-sm z-0">Project Image / Video</span>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-6 flex-grow">
                  {project.shortDesc}
                </p>
                <Link href={`/projects/${project.id}`} className="mt-auto inline-flex items-center text-sm font-bold text-white hover:text-primary transition-colors group/btn">
                  View Details
                  <ArrowRight size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center items-center space-x-4">
          <button 
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="p-2 rounded-full glass hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            <ChevronLeft size={24} />
          </button>
          
          <div className="flex space-x-2">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentPage(idx + 1)}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentPage === idx + 1 ? "bg-primary scale-125" : "bg-gray-600 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>

          <button 
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="p-2 rounded-full glass hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
