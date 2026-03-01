"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";

const caseStudies = [
  {
    id: "1",
    name: "E-Commerce Platform Redesign",
    tagline: "Conversion-focused storefront architecture for faster buying journeys.",
    summary: [
      "Problem: Legacy storefront had slow load time and weak checkout completion.",
      "Solution: Rebuilt with Next.js App Router, modular UI system, and optimized data flow.",
      "Technologies: Next.js, Tailwind CSS, Framer Motion, API Routes.",
      "Impact: 40% faster page load and improved conversion quality through better UX flow.",
    ],
    tech: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "Node API"],
    metrics: [
      { label: "Load Time", value: "-40%" },
      { label: "Users Served", value: "25K+" },
      { label: "Revenue Impact", value: "+18%" },
      { label: "API Integrations", value: "6" },
      { label: "Performance Score", value: "96/100" },
    ],
    liveDemo: "https://example.com/ecommerce",
    viewCode: "https://github.com/mjh-dev/ecommerce-redesign",
    preview: "/window.svg",
    glow: "from-cyan-300/40 via-sky-300/20 to-violet-300/35",
  },
  {
    id: "3",
    name: "Cyber Security Dashboard",
    tagline: "Real-time threat intelligence experience for actionable security insights.",
    summary: [
      "Problem: Security teams lacked a clear real-time visualization layer for fast triage.",
      "Solution: Designed a performance-conscious dashboard for high-frequency data updates.",
      "Technologies: React, D3.js, Tailwind CSS, WebSocket streams.",
      "Impact: Reduced signal-to-insight time by 35% with better observability UX.",
    ],
    tech: ["React", "D3.js", "Tailwind CSS", "WebSocket", "Data Viz"],
    metrics: [
      { label: "Load Time", value: "1.2s" },
      { label: "Users Served", value: "8.4K+" },
      { label: "Revenue Impact", value: "Risk Cost ↓" },
      { label: "API Integrations", value: "4" },
      { label: "Performance Score", value: "93/100" },
    ],
    liveDemo: "https://example.com/dash",
    viewCode: "https://github.com/mjh-dev/cyber-dashboard",
    preview: "/globe.svg",
    glow: "from-violet-300/35 via-cyan-300/20 to-sky-300/30",
  },
  {
    id: "5",
    name: "Animated Landing Platform",
    tagline: "Premium marketing surface engineered for speed, clarity, and interaction quality.",
    summary: [
      "Problem: Existing campaign pages had visual inconsistency and weak engagement retention.",
      "Solution: Built a reusable motion system with polished scroll flow and strict performance budgets.",
      "Technologies: Next.js, GSAP, Lenis, Tailwind CSS.",
      "Impact: Increased time-on-page by 31% while maintaining strong Core Web Vitals.",
    ],
    tech: ["Next.js", "GSAP", "Lenis", "Tailwind CSS", "SEO"],
    metrics: [
      { label: "Load Time", value: "1.5s" },
      { label: "Users Served", value: "12K+" },
      { label: "Revenue Impact", value: "+11%" },
      { label: "API Integrations", value: "3" },
      { label: "Performance Score", value: "95/100" },
    ],
    liveDemo: "https://example.com/landing",
    viewCode: "https://github.com/mjh-dev/animated-landing",
    preview: "/next.svg",
    glow: "from-sky-300/40 via-cyan-300/20 to-indigo-300/30",
  },
];

const sectionReveal = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function FeaturedProjects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="relative overflow-hidden py-20 sm:py-24"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_10%_20%,rgba(34,211,238,0.1),transparent_34%),radial-gradient(circle_at_86%_74%,rgba(167,139,250,0.12),transparent_36%)]" />
      <div className="pointer-events-none absolute -left-20 top-24 -z-10 h-72 w-72 rounded-full bg-cyan-400/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-20 bottom-10 -z-10 h-72 w-72 rounded-full bg-violet-400/10 blur-[120px]" />

      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          variants={sectionReveal}
          className="mb-12"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-cyan-200/90">Selected Work</p>
            <h2
              id="projects-heading"
              className="mt-3 max-w-4xl text-3xl font-semibold tracking-[-0.02em] text-text-primary sm:text-5xl"
            >
            Featured Projects
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-text-secondary sm:text-base">
            Real-world products built with performance, scalability, and user experience in
            mind.
          </p>
        </motion.div>

        <div className="space-y-9">
          {caseStudies.map((project, index) => {
            const reverseLayout = index % 2 !== 0;

            return (
              <motion.article
                key={project.id}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.22 }}
                variants={sectionReveal}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="group rounded-3xl border border-border-subtle bg-card-background p-5 backdrop-blur sm:p-7"
              >
                <div className="grid items-center gap-7 lg:grid-cols-12">
                  <div className={`${reverseLayout ? "lg:order-2" : ""} lg:col-span-5`}>
                    <div
                      className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${project.glow} p-[1px]`}
                    >
                      <div className="relative overflow-hidden rounded-[15px] border border-border-subtle bg-background-secondary">
                        <div className="pointer-events-none absolute -top-16 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full bg-cyan-300/20 blur-3xl" />
                        <div className="relative aspect-[16/10]">
                          <Image
                            src={project.preview}
                            alt={`${project.name} preview`}
                            fill
                            sizes="(max-width: 1024px) 100vw, 40vw"
                            className="object-contain p-12 transition-transform duration-500 ease-out group-hover:scale-105"
                          />
                          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background-secondary/70 via-transparent to-transparent" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={`${reverseLayout ? "lg:order-1" : ""} lg:col-span-7`}>
                    <h3 className="text-2xl font-semibold tracking-[-0.02em] text-text-primary sm:text-3xl">
                      {project.name}
                    </h3>
                    <p className="mt-2 text-base text-cyan-200/90">{project.tagline}</p>

                    <ul className="mt-5 space-y-2.5">
                      {project.summary.map((point) => (
                        <li key={point} className="text-sm leading-relaxed text-text-secondary sm:text-[0.95rem]">
                          <span className="mr-2 text-cyan-300">-</span>
                          {point}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tech.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-border-subtle bg-card-background px-3 py-1 text-xs font-medium text-text-secondary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 grid gap-2.5 sm:grid-cols-3 lg:grid-cols-5">
                      {project.metrics.map((metric) => (
                        <div
                          key={metric.label}
                          className="rounded-xl border border-border-subtle bg-background-secondary/60 px-3 py-3"
                        >
                          <p className="text-[11px] uppercase tracking-[0.14em] text-muted-text">
                            {metric.label}
                          </p>
                          <p className="mt-1 text-sm font-semibold text-text-primary">{metric.value}</p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 flex flex-wrap gap-3">
                      <motion.a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Open live demo for ${project.name}`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        className="group/btn inline-flex items-center gap-2 rounded-xl border border-cyan-300/40 bg-cyan-300/10 px-4 py-2.5 text-sm font-medium text-cyan-100 shadow-[0_0_0_rgba(34,211,238,0)] transition-all duration-300 hover:shadow-[0_0_24px_rgba(34,211,238,0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/80"
                      >
                        Live Demo
                        <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                      </motion.a>

                      {project.viewCode ? (
                        <motion.a
                          href={project.viewCode}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`Open source code for ${project.name}`}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          transition={{ duration: 0.2, ease: "easeInOut" }}
                          className="group/btn inline-flex items-center gap-2 rounded-xl border border-border-subtle bg-card-background px-4 py-2.5 text-sm font-medium text-text-primary transition-colors duration-300 hover:border-cyan-300/45 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/80"
                        >
                          View Code
                          <Github className="h-4 w-4 transition-transform duration-300 group-hover/btn:-translate-y-0.5" />
                        </motion.a>
                      ) : null}

                      <Link
                        href={`/projects/${project.id}`}
                        aria-label={`Read case study for ${project.name}`}
                        className="group/btn inline-flex items-center gap-2 rounded-xl border border-border-subtle px-4 py-2.5 text-sm font-medium text-text-primary transition-colors duration-300 hover:border-cyan-300/45 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/80"
                      >
                        Case Study
                        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 text-center"
        >
          <Link
            href="/#projects"
            aria-label="Explore all projects"
            className="inline-flex items-center gap-2 rounded-2xl border border-cyan-300/35 bg-gradient-to-r from-cyan-300/12 to-violet-300/12 px-7 py-3.5 text-sm font-medium text-cyan-100 shadow-[0_0_0_rgba(34,211,238,0)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/80"
          >
            Explore All Projects
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
