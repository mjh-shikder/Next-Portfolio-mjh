"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  {
    title: "Web Development",
    skills: [
      { name: "HTML & CSS", level: 95 },
      { name: "JavaScript", level: 90 },
      { name: "React & Next.js", level: 85 },
      { name: "Tailwind CSS", level: 95 },
    ]
  },
  {
    title: "3D Animation (Blender Expert)",
    skills: [
      { name: "3D Modeling", level: 98 },
      { name: "Animation & Rigging", level: 95 },
      { name: "Texturing & Lighting", level: 90 },
      { name: "Fiverr Success (>300 Clients)", level: 100 },
    ]
  },
  {
    title: "Graphic Design & Video",
    skills: [
      { name: "Adobe Photoshop", level: 90 },
      { name: "Adobe Illustrator", level: 85 },
      { name: "Premiere Pro", level: 75 },
    ]
  }
];

export default function Skills() {
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate category cards
      gsap.from(".skill-category", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
      });

      // Animate skill bars inside each category
      gsap.utils.toArray(".skill-progress").forEach((bar) => {
        const width = bar.getAttribute("data-width");
        gsap.to(bar, {
          scrollTrigger: {
            trigger: bar,
            start: "top 90%",
          },
          width: `${width}%`,
          duration: 1.5,
          ease: "power3.out",
          delay: 0.2
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" className="py-24 relative bg-black/20" ref={sectionRef}>
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 flex items-center justify-center">
          <span className="text-gradient">02.</span>
          <span className="ml-4">My Skills</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category glass-panel p-8 rounded-2xl flex flex-col h-full">
              <h3 className="text-xl font-bold text-white mb-6 pb-4 border-b border-gray-700/50">
                {category.title}
              </h3>
              
              <div className="space-y-6 flex-grow">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="w-full">
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-gray-500 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div 
                        className="skill-progress h-full bg-gradient-to-r from-primary to-accent relative"
                        data-width={skill.level}
                        style={{ width: "0%" }}
                      >
                         <div className="absolute top-0 right-0 bottom-0 w-8 bg-white/20 blur-[2px]"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
