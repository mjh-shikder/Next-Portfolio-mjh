"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Me", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "pt-2" : "pt-8"}`}>
      <header className="relative z-10 px-4">
        <div className="mx-auto max-w-5xl">
          <nav className="glass-panel flex items-center justify-between rounded-full px-6 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)] border border-white/10">
            <div className="flex items-center gap-2 cursor-pointer" onClick={(e) => handleLinkClick(e, "#home")}>
              <Image src="/mjhLogo.png" alt="Logo" width={50} height={50} />
            </div>

            <ul className="hidden items-center gap-8 text-sm font-medium text-slate-400 md:flex">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    className="transition-colors hover:text-primary tracking-wide text-gray-300"
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <div>
              <button 
                onClick={(e) => handleLinkClick(e, "#projects")}
                className="rounded-full border border-primary/50 bg-primary/10 hover:bg-primary hover:text-white px-6 py-2 text-sm font-semibold text-primary transition-all"
              >
                View Work
              </button>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
}
