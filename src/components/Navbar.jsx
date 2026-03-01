"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import ThemeToggleButton from "@/components/theme/ThemeToggleButton";
import { useTheme } from "@/components/theme/ThemeProvider";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Me", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const handleLinkClick = (event, href) => {
    event.preventDefault();
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled ? "pt-2" : "pt-8"}`}>
      <header className="relative z-10 px-4">
        <div className="mx-auto max-w-6xl">
          <nav className="glass-panel flex items-center justify-between rounded-full px-6 py-3">
            <button
              type="button"
              aria-label="Scroll to home"
              className="flex cursor-pointer items-center gap-2"
              onClick={(event) => handleLinkClick(event, "#home")}
            >
              <Image
                src={resolvedTheme === "dark" ? "/logo-dark.png" : "/logo-light.png"}
                alt="MJH logo"
                width={44}
                height={44}
                priority
              />
            </button>

            <ul className="hidden items-center gap-7 md:flex">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    className="text-sm font-medium tracking-wide text-text-secondary transition-colors hover:text-accent-primary"
                    href={link.href}
                    onClick={(event) => handleLinkClick(event, link.href)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-2">
              <ThemeToggleButton />
              <button
                onClick={(event) => handleLinkClick(event, "#projects")}
                className="rounded-full border border-accent-primary/40 bg-accent-primary/10 px-5 py-2 text-sm font-semibold text-accent-primary transition-all hover:bg-accent-primary hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary/60"
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
