"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";

const links = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mjh-dev", icon: Linkedin },
  { label: "GitHub", href: "https://github.com/mjh-dev", icon: Github },
  { label: "Email", href: "mailto:mjh.dev.bd@gmail.com", icon: Mail },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-border-subtle py-10 sm:py-12">
      <div className="pointer-events-none absolute inset-0 -z-20 bg-background-secondary" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_25%,rgba(34,211,238,0.12),transparent_32%),radial-gradient(circle_at_85%_70%,rgba(167,139,250,0.12),transparent_36%)]" />
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.04]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180' viewBox='0 0 180 180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='180' height='180' filter='url(%23n)' opacity='0.7'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-6 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.16em] text-muted-text">MJH Shikder</p>
          <p className="mt-2 max-w-lg text-sm text-text-secondary">
            Product-focused React and Next.js engineer building high-performance web experiences.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {links.map((item) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={item.href.startsWith("mailto:") ? undefined : "noreferrer"}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                aria-label={`Open ${item.label}`}
                className="inline-flex items-center gap-2 rounded-xl border border-border-subtle bg-card-background px-3.5 py-2 text-xs font-medium uppercase tracking-[0.13em] text-text-primary transition-colors duration-300 hover:border-accent-primary/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary/70"
              >
                <Icon className="h-3.5 w-3.5 text-accent-primary" />
                {item.label}
              </motion.a>
            );
          })}

          <Link
            href="#home"
            aria-label="Back to top"
            className="inline-flex items-center gap-2 rounded-xl border border-accent-primary/40 bg-accent-primary/10 px-3.5 py-2 text-xs font-medium uppercase tracking-[0.13em] text-accent-primary transition-all duration-300 hover:shadow-[0_0_24px_var(--accent-glow)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary/70"
          >
            Top
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>

      <div className="mx-auto mt-8 w-full max-w-7xl border-t border-border-subtle px-6 pt-6 sm:px-8">
        <p className="text-xs uppercase tracking-[0.14em] text-muted-text">
          © {year} MJH Shikder. Design with emotion. Build with logic. Ship with purpose.
        </p>
      </div>
    </footer>
  );
}
