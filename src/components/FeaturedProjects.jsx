"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";

// Featured Projects Data
const caseStudies = [
  {
    id: "1",
    name: "Red Hope Blood Donation Platform",
    tagline: "A comprehensive blood donation platform connecting donors with recipients, ensuring timely and efficient blood supply to those in need.",
    summary: [
      "Problem: Lack of a centralized blood donation platform in Bangladesh",
      "Solution: Developed a comprehensive blood donation platform",
      "Technologies: React, React-Router, Axios, Tailwind CSS, Firebase, Node API",
      "Impact: Just a Prototype no real life impact yet, but it has the potential to save lives",
    ],
    tech: ["React", "React-Router", "Axios", "Tailwind CSS", "Firebase", "Node API"],
    metrics: [
      { label: "Largest Contentful Paint (LCP)", value: "1.1s" },
      { label: "Accessibility", value: "90/100" },
      { label: "Best Practices", value: "100/100" },
      { label: "SEO", value: "90/100" },
      { label: "Performance Score", value: "91/100" },
    ],
    liveDemo: "https://dulcet-biscotti-7b5c0b.netlify.app/",
    viewCode: "https://github.com/mjh-shikder/A-11-Red-Hope-Front-end",
    preview: "/images/redhope.png",
    glow: "from-cyan-300/40 via-sky-300/20 to-violet-300/35",
  },
  {
    id: "2",
    name: "Paw Mart A Community Driven Platform for Pet Lovers",
    tagline: "A platform where pet lovers can connect, share and shop.",
    summary: [
      "Problem: Pet lovers in Bangladesh lack a centralized platform to connect, share and shop.",
      "Solution: Designed a community driven platform for pet lovers",
      "Technologies: React, Axios, Tailwind CSS, Firebase, Node API",
      "Impact: Just a Prototype no real life impact yet, but it has the potential to save lives",
    ],
    tech: ["React", "React-Router", "Axios", "Tailwind CSS", "Firebase"],
    metrics: [
      { label: "Largest Contentful Paint (LCP)", value: "1.5s" },
      { label: "Accessibility", value: "86/100" },
      { label: "Best Practices", value: "96/100" },
      { label: "SEO", value: "83/100" },
      { label: "Performance Score", value: "90/100" },
    ],
    liveDemo: "https://mjhpawmart.netlify.app/",
    viewCode: "https://github.com/mjh-shikder/A-10-PawMart-Web-App-Clint",
    preview: "/images/pawmart.png",
    glow: "from-violet-300/35 via-cyan-300/20 to-sky-300/30",
  },
  {
    id: "3",
    name: "Toy Kingdom",
    tagline: "Online Ecommerce Kids Toy store platform", 
    summary: [
      "Problem: Need a Ecommerce platform for kids toys and other excessoris ",
      "Solution: Developed a Ecommerce platform for kids toys and other excessoris ",
      "Technologies: React, React-Router, Firebase, Tailwind CSS.",
      "Impact: Just a Prototype no real life impact yet, but it has the potential to save lives",
    ],
    tech: ["React","React-Router", "Firebase", "Tailwind CSS"],
    metrics: [
      { label: "Largest Contentful Paint (LCP)", value: "2.1s" },
      { label: "Accessibility", value: "90/100" },
      { label: "Best Practices", value: "90/100" },
      { label: "SEO", value: "90/100" },
      { label: "Performance Score", value: "90/100" },
    ],
    liveDemo: "https://mjhtoykingdom.netlify.app/",
    viewCode: "https://github.com/mjh-shikder/A-09-Toy-Kingdom-Web-App",
    preview: "/images/toykingdom.png",
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
                      className={`relative overflow-hidden rounded-2xl bg-linear-to-br ${project.glow} p-px`}
                    >
                      <div className="relative overflow-hidden rounded-[15px] border border-border-subtle bg-background-secondary">
                        <div className="pointer-events-none absolute -top-16 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full bg-cyan-300/20 blur-3xl" />
                        <div className="relative aspect-16/10">
                          <Image
                            src={project.preview}
                            alt={`${project.name} preview`}
                            fill
                            sizes="(max-width: 1024px) 100vw, 40vw"
                            className=" object-cover object-top transition-transform duration-500 ease-out hover:object-bottom"
                          />
                          <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-background-secondary/70 via-transparent to-transparent" />
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
            href="/projects"
            aria-label="Explore all projects"
            className="inline-flex items-center gap-2 rounded-2xl border border-cyan-300/35 bg-linear-to-r from-cyan-300/12 to-violet-300/12 px-7 py-3.5 text-sm font-medium text-cyan-100 shadow-[0_0_0_rgba(34,211,238,0)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/80"
          >
            Explore All Projects
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
