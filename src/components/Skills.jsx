"use client";

import { motion } from "framer-motion";
import { Database, Gauge, Layers3, ServerCog, Sparkle } from "lucide-react";

const capabilities = [
  {
    title: "Frontend Systems",
    summary: "Fast, scalable interfaces built for conversion and maintainability.",
    impact: "Component architecture + motion strategy",
    icon: Layers3,
    tools: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend & Data",
    summary: "Stable APIs and data models ready for SaaS growth and integration.",
    impact: "Structured service layer + predictable contracts",
    icon: ServerCog,
    tools: ["Node.js", "Express", "REST", "PostgreSQL"],
  },
  {
    title: "Performance Engineering",
    summary: "Monitoring and optimization that improve real product responsiveness.",
    impact: "Up to 40% gains on key performance paths",
    icon: Gauge,
    tools: ["Core Web Vitals", "Code Splitting", "Caching", "Profiling"],
  },
];

const stack = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "PostgreSQL",
  "Prisma",
  "Tailwind CSS",
  "Framer Motion",
  "GSAP",
  "Figma",
  "Vercel",
];

const highlights = [
  { label: "Scalable Architecture", value: "System-first coding standards" },
  { label: "Shipping Velocity", value: "Rapid iteration without quality loss" },
  { label: "Product Thinking", value: "Engineering choices tied to business goals" },
];

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="relative py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_8%_18%,rgba(34,211,238,0.1),transparent_33%),radial-gradient(circle_at_86%_75%,rgba(167,139,250,0.1),transparent_35%)]" />

      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 flex items-center justify-between gap-4"
        >
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-200/90">Skills</p>
            <h2
              id="skills-heading"
              className="mt-2 max-w-3xl text-3xl font-semibold tracking-[-0.02em] text-text-primary sm:text-5xl"
            >
              Capability stack for modern Web Applications.
            </h2>
          </div>
          <span className="hidden rounded-full border border-border-subtle bg-card-background px-4 py-2 text-xs uppercase tracking-[0.14em] text-text-secondary md:inline-flex md:items-center md:gap-2">
            <Sparkle className="h-3.5 w-3.5 text-cyan-200" />
            Production-focused
          </span>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-12">
          {capabilities.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.65,
                  ease: [0.22, 1, 0.36, 1],
                  delay: index * 0.08,
                }}
                whileHover={{ y: -4 }}
                className="group relative overflow-hidden rounded-3xl border border-border-subtle bg-card-background p-6 backdrop-blur sm:p-7 lg:col-span-4"
              >
                <div className="pointer-events-none absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-cyan-300/10 blur-2xl" />
                <div className="mb-5 flex items-center gap-3">
                  <span className="rounded-xl border border-border-subtle bg-background-secondary/60 p-2.5 text-accent-primary">
                    <Icon className="h-4 w-4" />
                  </span>
                  <h3 className="text-lg font-semibold text-text-primary">{item.title}</h3>
                </div>
                <p className="text-sm leading-relaxed text-text-secondary">{item.summary}</p>
                <p className="mt-4 text-xs uppercase tracking-[0.14em] text-muted-text">Impact</p>
                <p className="mt-1 text-sm text-text-secondary">{item.impact}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border border-border-subtle bg-card-background px-3 py-1 text-xs font-medium text-text-secondary"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
          className="mt-8 rounded-3xl border border-border-subtle bg-card-background p-6 sm:p-7"
        >
          <div className="grid gap-6 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="text-xs uppercase tracking-[0.16em] text-muted-text">Tech Stack</p>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-border-subtle bg-card-background px-3 py-1.5 text-xs font-medium text-text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-border-subtle bg-card-background p-4">
                <p className="mb-3 flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-muted-text">
                  <Database className="h-4 w-4 text-cyan-200" />
                  Delivery strengths
                </p>
                <div className="space-y-2.5">
                  {highlights.map((point) => (
                    <div key={point.label} className="rounded-lg border border-border-subtle bg-background-secondary/60 p-3">
                      <p className="text-xs uppercase tracking-[0.14em] text-muted-text">{point.label}</p>
                      <p className="mt-1 text-sm text-text-secondary">{point.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
