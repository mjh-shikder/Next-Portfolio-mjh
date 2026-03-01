"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-content", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" className="py-24 relative" ref={sectionRef}>
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="about-content text-3xl md:text-5xl font-bold mb-12 flex items-center">
          <span className="text-gradient">01.</span>
          <span className="ml-4">About Me</span>
          <div className="ml-6 flex-grow h-px bg-gray-700/50"></div>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
            <p className="about-content">
              My journey into the digital world started with a profound interest in bringing static elements to life. Between 2020 and 2024, I thrived as a <strong className="text-white">Professional 3D Animator</strong> and a Level 2 Fiverr seller, collaborating with over 300 clients worldwide.
            </p>
            <p className="about-content">
              While I loved modeling and rendering with Blender and perfecting compositions in Adobe Photoshop, Illustrator, and Premiere Pro, I found my true calling in Web Development. This transition allowed me to combine my aesthetic design sense with logic to build interactive, functional user experiences.
            </p>
            <p className="about-content">
              Today, I focus on crafting scalable Web Applications utilizing <strong className="text-primary">Next.js</strong>, React, and modern motion libraries. I enjoy projects that challenge both my technical problem-solving skills and my creative vision.
            </p>
            <p className="about-content">
              Outside of programming, you can often find me exploring new Graphic Design techniques, watching animated films (evaluating their 3D mechanics, of course!), or continuously pushing my artistic boundaries.
            </p>
          </div>

          <div className="about-content relative group hidden md:block mt-8">
            <div className="absolute inset-0 border-2 border-primary rounded-xl translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300 z-0"></div>
            <div className="relative z-10 glass-panel rounded-xl h-full flex flex-col justify-center items-center p-8 text-center border border-gray-700 group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300 bg-black/40">
              <div className="w-20 h-20 rounded-full border border-primary/50 flex items-center justify-center mb-6 text-primary shadow-[0_0_15px_rgba(139,92,246,0.3)]">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Creative & Logical</h3>
              <p className="text-gray-400">Transforming artistic vision into robust code.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
