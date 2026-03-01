"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Download } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-text", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        delay: 0.2,
      });

      gsap.from(".hero-image", {
        scale: 0.8,
        opacity: 0,
        duration: 1.2,
        ease: "back.out(1.7)",
        delay: 0.5,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20" ref={heroRef}>
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="order-2 md:order-1 text-center md:text-left">
          <p className="hero-text text-accent font-medium tracking-wide uppercase mb-2">Hello, World! I am</p>
          <h1 className="hero-text text-5xl md:text-7xl font-bold mb-4">
            <span className="text-gradient">Md</span> Jubair<span className="text-gradient"> Hossain</span>
          </h1>
          <h2 className="hero-text text-2xl md:text-3xl font-medium text-gray-300 mb-6">
            Fullstack web developer
          </h2>
          <p className="hero-text text-gray-400 max-w-lg mx-auto md:mx-0 mb-8 text-lg">
            I am a fullstack <span className="text-white font-semibold">React, Next.js</span> web developer with experience in building dynamic and responsive web applications. I am passionate about web development and I am always looking for new challenges.
          </p>

          <div className="hero-text flex flex-wrap justify-center md:justify-start gap-4">
            <button className="glass-card px-8 py-3 rounded-full font-medium text-white hover:text-primary transition-colors flex items-center gap-2 group">
              <Download size={20} className="group-hover:-translate-y-1 transition-transform" />
              Download Resume
            </button>
            <a href="#projects" className="px-8 py-3 rounded-full font-medium text-white border border-gray-600 hover:border-primary hover:bg-primary/10 transition-colors">
              View Work
            </a>
          </div>
        </div>

        {/* Image Content */}
        <div className="order-1 md:order-2 flex justify-center md:justify-end">
          <div className="hero-image relative w-64 h-64 md:w-96 md:h-96 rounded-full glass-panel overflow-hidden border-4 border-indigo-900/50 shadow-2xl flex items-center justify-center">
            {/* Placeholder for Photo */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 z-10 pointer-events-none mix-blend-overlay"></div>
            <div className="text-center p-6 flex flex-col items-center z-0">
               <svg className="w-24 h-24 text-gray-400 mb-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
               <span className="text-sm text-gray-400 font-medium">Add Photo Later</span>
            </div>
            
            
            Instructions: Uncomment this when you add your photo to the public folder.
            <Image 
              src="/photo.png" 
              alt="MJH Shikder" 
              fill 
              className="object-cover"
              priority
            /> 
           
          </div>
        </div>
      </div>
    </section>
  );
}
