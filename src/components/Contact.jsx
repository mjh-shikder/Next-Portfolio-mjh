"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, Phone, MessageSquare } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-item", {
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" className="py-24 relative bg-black/40" ref={sectionRef}>
      <div className="container mx-auto px-6 max-w-5xl text-center">
        <h2 className="contact-item text-3xl md:text-5xl font-bold mb-6">
          <span className="text-gradient">05.</span> What&apos;s Next?
        </h2>
        <h3 className="contact-item text-4xl md:text-6xl font-bold text-white mb-8">
          Get In Touch
        </h3>
        <p className="contact-item text-gray-400 text-lg max-w-2xl mx-auto mb-16 leading-relaxed">
          Whether you have an exciting project, a question regarding 3D animated assets, or just want to say hi, I&apos;ll try my best to get back to you!
        </p>

        <div className="contact-item grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* Email */}
          <a href="mailto:mjh.dev.bd@gmail.com" className="glass-card p-8 rounded-2xl flex flex-col items-center group">
            <div className="w-16 h-16 rounded-full bg-primary/20 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Mail size={32} />
            </div>
            <h4 className="text-xl font-bold text-white mb-2">Email</h4>
            <span className="text-gray-400 break-all text-sm md:text-base">mjh.dev.bd@gmail.com</span>
          </a>

          {/* Phone */}
          <a href="tel:+8801995321799" className="glass-card p-8 rounded-2xl flex flex-col items-center group">
            <div className="w-16 h-16 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Phone size={32} />
            </div>
            <h4 className="text-xl font-bold text-white mb-2">Phone</h4>
            <span className="text-gray-400 break-all text-sm md:text-base">+880 1995321799</span>
          </a>

          {/* WhatsApp */}
          <a href="https://wa.me/8801995321799" target="_blank" rel="noopener noreferrer" className="glass-card p-8 rounded-2xl flex flex-col items-center group">
            <div className="w-16 h-16 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <MessageSquare size={32} />
            </div>
            <h4 className="text-xl font-bold text-white mb-2">WhatsApp</h4>
            <span className="text-gray-400 break-all text-sm md:text-base">+880 1995321799</span>
          </a>
        </div>
      </div>
    </section>
  );
}
