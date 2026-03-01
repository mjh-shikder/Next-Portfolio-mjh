"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, BriefcaseBusiness, LayoutTemplate, Rocket } from "lucide-react";

const journey = [
  {
    year: "2020-2024",
    title: "3D & Creative Specialist",
    detail: "Delivered 300+ global projects with precision in visual storytelling and client execution.",
  },
  {
    year: "2024-Present",
    title: "Product Engineer",
    detail: "Building production web platforms with React, Next.js, Node.js, and performance-first architecture.",
  },
];

const proofCards = [
  {
    icon: BriefcaseBusiness,
    label: "Production Builds",
    value: "15+ launched apps",
  },
  {
    icon: Rocket,
    label: "Performance Focus",
    value: "Up to 40% improvement",
  },
  {
    icon: LayoutTemplate,
    label: "Engineering Style",
    value: "Clean, scalable systems",
  },
];

export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="relative py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_20%,rgba(56,189,248,0.11),transparent_32%),radial-gradient(circle_at_80%_75%,rgba(167,139,250,0.12),transparent_34%)]" />

      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 flex items-center gap-5"
        >
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-200/90">About</p>
          <h2
            id="about-heading"
            className="text-3xl font-semibold tracking-[-0.02em] text-text-primary sm:text-5xl"
          >
            Building products where design intelligence meets engineering rigor.
          </h2>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-12">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
            className="relative overflow-hidden rounded-3xl border border-border-subtle bg-card-background p-7 backdrop-blur md:p-9 lg:col-span-7"
          >
            <div className="pointer-events-none absolute -right-10 -top-14 h-36 w-36 rounded-full bg-cyan-300/10 blur-3xl" />
            <p className="text-sm uppercase tracking-[0.18em] text-muted-text">My Approach</p>
            <p className="mt-5 text-pretty text-base leading-relaxed text-text-secondary sm:text-lg">
              I started in visual production, where details, timing, and story quality decide whether a result feels
              premium. That background now shapes how I engineer web products: clarity in architecture, speed in
              interaction, and maintainability from day one.
            </p>
            <p className="mt-5 text-pretty text-base leading-relaxed text-text-secondary sm:text-lg">
              My current focus is SaaS and AI-powered applications that need strong frontend performance and dependable
              backend structures. I work from product outcomes backward, so decisions in code directly support growth,
              reliability, and business impact.
            </p>
            <a
              href="#projects"
              aria-label="Explore selected projects"
              className="mt-7 inline-flex items-center gap-2 rounded-lg border border-border-subtle px-4 py-2 text-sm text-text-primary transition-colors duration-300 hover:border-accent-primary/50 hover:text-accent-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary/70"
            >
              Explore selected projects <ArrowUpRight className="h-4 w-4" />
            </a>
          </motion.article>

          <div className="space-y-6 lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
              className="rounded-3xl border border-border-subtle bg-card-background p-6"
            >
              <p className="text-sm uppercase tracking-[0.16em] text-muted-text">Journey</p>
              <div className="mt-4 space-y-4">
                {journey.map((item) => (
                  <div key={item.title} className="rounded-xl border border-border-subtle bg-card-background p-4">
                    <p className="text-xs uppercase tracking-[0.15em] text-cyan-200/85">{item.year}</p>
                    <h3 className="mt-2 text-base font-semibold text-text-primary">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-text-secondary">{item.detail}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
              className="grid gap-4"
            >
              {proofCards.map((card) => {
                const Icon = card.icon;
                return (
                  <div
                    key={card.label}
                    className="group rounded-2xl border border-border-subtle bg-card-background p-4 transition-colors duration-300 hover:border-accent-primary/45"
                  >
                    <div className="flex items-center gap-3">
                      <span className="rounded-lg border border-border-subtle bg-card-background p-2 text-accent-primary">
                        <Icon className="h-4 w-4" />
                      </span>
                      <div>
                        <p className="text-xs uppercase tracking-[0.14em] text-muted-text">{card.label}</p>
                        <p className="text-sm font-medium text-text-primary">{card.value}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
