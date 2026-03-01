"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GraduationCap, ShieldCheck } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const timelineData = [
  {
    type: "education",
    title: "Honors 1st Year, Department of Social Work",
    institution: "National University Bangladesh (Abu Dharr Ghifari College)",
    date: "Currently Studying",
    description: "Pursuing overarching educational goals alongside technical mastery.",
    icon: GraduationCap,
  },
  {
    type: "certification",
    title: "Complete Web Development",
    institution: "Programming Hero",
    date: "2025 - 2026",
    description: "Learned complete web development with programming hero.",
    icon: GraduationCap,
  },
  {
    type: "certification",
    title: "Ethical Hacking Course",
    institution: "Creative IT Institute, Bangladesh",
    date: "6 Months Duration",
    description: "Extensive study covering cyber security fundamentals, penetration concepts, and defensive strategies.",
    icon: ShieldCheck,
  },
  {
    type: "certification",
    title: "Web Penetration Testing Course",
    institution: "Cyber Bangla Academy",
    date: "6 Months Duration",
    description: "Specialized training focused on securing web applications, identifying vulnerabilities, and creating robust digital experiences.",
    icon: ShieldCheck,
  }
];

export default function Experience() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".timeline-item", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        x: -50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.3,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" className="py-24 relative" ref={sectionRef}>
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 flex items-center justify-end">
          <span className="mr-4">Education & Certifications</span>
          <span className="text-gradient">03.</span>
        </h2>

        <div className="relative border-l-2 border-primary/30 ml-4 md:ml-12 pl-8 space-y-12">
          {timelineData.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="timeline-item relative group">
                {/* Timeline Dot */}
                <div className="absolute -left-[45px] top-1 w-10 h-10 rounded-full bg-background border-2 border-primary flex items-center justify-center group-hover:bg-primary transition-colors duration-300 z-10 text-primary group-hover:text-white">
                  <Icon size={20} />
                </div>
                
                {/* Content Card */}
                <div className="glass-panel p-6 md:p-8 rounded-2xl md:mr-12 hover:border-primary/50 transition-colors">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-gradient transition-all">{item.title}</h3>
                      <h4 className="text-lg text-primary/90 font-medium">{item.institution}</h4>
                    </div>
                    <span className="mt-2 md:mt-0 px-4 py-1 text-sm bg-primary/10 text-primary border border-primary/20 rounded-full inline-block font-mono font-medium">
                      {item.date}
                    </span>
                  </div>
                  <p className="text-gray-400 leading-relaxed text-base">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
