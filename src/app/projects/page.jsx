"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Github,
  ExternalLink,
  ArrowLeft,
  Layers,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { demoProjects } from "@/data/projects";
import Image from "next/image";

const PER_PAGE = 4;

const glows = [
  "from-cyan-300/40 via-sky-300/20 to-violet-300/35",
  "from-violet-300/35 via-cyan-300/20 to-sky-300/30",
  "from-sky-300/40 via-cyan-300/20 to-indigo-300/30",
  "from-indigo-300/35 via-violet-300/20 to-cyan-300/30",
  "from-cyan-300/30 via-violet-300/25 to-sky-300/35",
  "from-violet-300/40 via-sky-300/20 to-cyan-300/30",
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] },
  }),
  exit: { opacity: 0, y: 10, transition: { duration: 0.2 } },
};

const headerVariants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const allTags = ["All", ...Array.from(new Set(demoProjects.flatMap((p) => p.tech)))];

export default function ProjectsPage() {
  const [activeTag, setActiveTag] = useState("All");
  const [page, setPage] = useState(1);

  const filtered = useMemo(
    () =>
      activeTag === "All"
        ? demoProjects
        : demoProjects.filter((p) => p.tech.includes(activeTag)),
    [activeTag]
  );

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const paginated = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  function handleTagChange(tag) {
    setActiveTag(tag);
    setPage(1); // always reset to first page on filter change
  }

  function handlePageChange(next) {
    setPage(next);
    // scroll grid back into view smoothly
    document.getElementById("projects-grid")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

 

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Ambient background */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_12%_15%,rgba(34,211,238,0.09),transparent_38%),radial-gradient(circle_at_82%_78%,rgba(167,139,250,0.11),transparent_40%)]" />
      <div className="pointer-events-none fixed -left-24 top-32 -z-10 h-80 w-80 rounded-full bg-cyan-400/8 blur-[140px]" />
      <div className="pointer-events-none fixed -right-24 bottom-20 -z-10 h-80 w-80 rounded-full bg-violet-400/8 blur-[140px]" />

      <div className="mx-auto w-full max-w-7xl px-6 py-24 sm:px-8 sm:py-28">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Link
            href="/#projects"
            className="group inline-flex items-center gap-2 text-sm text-text-secondary transition-colors duration-200 hover:text-cyan-300"
          >
            <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1" />
            Back to Portfolio
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={headerVariants}
          className="mt-10 mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex items-center justify-center rounded-xl border border-cyan-300/30 bg-cyan-300/10 p-2.5">
              <Layers className="h-5 w-5 text-cyan-300" />
            </span>
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-200/90">Full Catalogue</p>
          </div>

          <h1 className="max-w-3xl text-4xl font-semibold tracking-[-0.02em] text-text-primary sm:text-5xl md:text-6xl">
            All <span className="text-gradient">Projects</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
            Every project I&apos;ve shipped — from e-commerce platforms and security dashboards to 3D
            experiences and mobile apps. Filter by technology to find what interests you.
          </p>
        </motion.div>

        {/* Tag filter */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mb-6 flex flex-wrap gap-2"
        >
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => handleTagChange(tag)}
              className={`rounded-full border px-4 py-1.5 text-xs font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/80 ${
                activeTag === tag
                  ? "border-cyan-300/50 bg-cyan-300/15 text-cyan-200 shadow-[0_0_14px_rgba(34,211,238,0.15)]"
                  : "border-border-subtle bg-card-background text-text-secondary hover:border-cyan-300/35 hover:text-cyan-200"
              }`}
            >
              {tag}
            </button>
          ))}
        </motion.div>

        {/* Count + page info */}
        <motion.div
          key={`${filtered.length}-${page}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-8 flex items-center justify-between"
        >
          <p className="text-xs uppercase tracking-widest text-muted-text">
            {filtered.length} project{filtered.length !== 1 ? "s" : ""}
          </p>
          {totalPages > 1 && (
            <p className="text-xs text-muted-text">
              Page <span className="text-text-secondary font-medium">{page}</span> of{" "}
              <span className="text-text-secondary font-medium">{totalPages}</span>
            </p>
          )}
        </motion.div>

        {/* Project grid — 2 cols on sm, 2 cols on xl (4 per page) */}
        <div id="projects-grid" className="scroll-mt-8">
          <div className="grid gap-6 sm:grid-cols-2">
            <AnimatePresence mode="popLayout">
              {paginated.map((project, i) => {
                const glow = glows[Number(project.id) % glows.length];
                return (
                  <motion.article
                    key={`${project.id}-${page}`}
                    custom={i}
                    variants={cardVariants}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    layout
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.22, ease: "easeInOut" }}
                    className="group flex flex-col rounded-3xl border border-border-subtle bg-card-background backdrop-blur-sm overflow-hidden"
                  >
                    {/* Top gradient bar */}
                    <div
                      className={`h-[2px] w-full bg-linear-to-r ${glow} opacity-70`}
                    />

                    {/* Preview area */}
                    <div
                      className={`relative overflow-hidden bg-linear-to-br ${glow} p-px mx-5 mt-5 rounded-2xl`}
                    >
                      <div className="relative rounded-[15px] bg-background-secondary overflow-hidden">
                        <div className="pointer-events-none absolute -top-12 left-1/2 h-24 w-24 -translate-x-1/2 rounded-full bg-cyan-300/15 blur-3xl" />
                        <div className="flex h-36 items-center justify-center">
                          <span className="text-4xl font-bold tracking-tight text-gradient select-none">
                            {/* {project.title.split(" ").map((w) => w[0]).join("").slice(0, 3)} */}
                            <Image src={project.image} alt={project.title} fill className="object-cover object-top transition-transform duration-500 ease-out hover:object-bottom" />
                          
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Card body */}
                    <div className="flex flex-1 flex-col p-5 pt-4">
                      <h2 className="text-lg font-semibold tracking-[-0.02em] text-text-primary leading-snug">
                        {project.title}
                      </h2>
                      <p className="mt-2 text-sm leading-relaxed text-text-secondary line-clamp-2 flex-1">
                        {project.shortDesc}
                      </p>

                      {/* Tech pills */}
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {project.tech.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-border-subtle bg-background-secondary/60 px-2.5 py-0.5 text-[11px] font-medium text-muted-text"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Actions */}
                      <div className="mt-5 flex items-center gap-2 border-t border-border-subtle pt-4">
                        {/* Live Demo — big full-width button */}
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`Live demo for ${project.title}`}
                          className="group/btn inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-cyan-300/35 bg-cyan-300/8 px-3 py-2 text-xs font-medium text-cyan-100 transition-all duration-200 hover:bg-cyan-300/14 hover:shadow-[0_0_18px_rgba(34,211,238,0.15)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/80"
                        >
                          Live Demo
                          <ExternalLink className="h-3.5 w-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                        </a>

                        {/* Case Study — small icon button */}
                        <Link
                          href={`/projects/${project.id}`}
                          aria-label={`Case study for ${project.title}`}
                          className="group/btn inline-flex items-center justify-center gap-1.5 rounded-xl border border-border-subtle bg-card-background px-3 py-2 text-xs font-medium text-text-secondary transition-colors duration-200 hover:border-cyan-300/40 hover:text-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/80"
                        >
                          Case Study
                          <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                        </Link>

                        {/* GitHub — small icon button */}
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`GitHub repo for ${project.title}`}
                          className="inline-flex items-center justify-center rounded-xl border border-border-subtle bg-card-background p-2 text-text-secondary transition-colors duration-200 hover:border-cyan-300/40 hover:text-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/80"
                        >
                          <Github className="h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Empty state */}
          {filtered.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-16 text-center text-text-secondary"
            >
              <p className="text-lg font-medium">No projects match that filter.</p>
              <button
                onClick={() => handleTagChange("All")}
                className="mt-4 text-sm text-cyan-300 underline underline-offset-4"
              >
                Clear filter
              </button>
            </motion.div>
          )}
        </div>

        {/* Pagination controls */}
        {totalPages > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="mt-12 flex items-center justify-center gap-2"
          >
            {/* Prev */}
            <button
              onClick={() => handlePageChange(page - 1)}
              disabled={page === 1}
              aria-label="Previous page"
              className="inline-flex items-center justify-center rounded-xl border border-border-subtle bg-card-background p-2.5 text-text-secondary transition-all duration-200 hover:border-cyan-300/40 hover:text-cyan-300 disabled:pointer-events-none disabled:opacity-30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/80"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            {/* Page numbers */}
            {Array.from({ length: totalPages }, (_, idx) => idx + 1).map((num) => (
              <button
                key={num}
                onClick={() => handlePageChange(num)}
                aria-label={`Go to page ${num}`}
                aria-current={num === page ? "page" : undefined}
                className={`h-9 w-9 rounded-xl border text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/80 ${
                  num === page
                    ? "border-cyan-300/50 bg-cyan-300/15 text-cyan-200 shadow-[0_0_14px_rgba(34,211,238,0.18)]"
                    : "border-border-subtle bg-card-background text-text-secondary hover:border-cyan-300/35 hover:text-cyan-200"
                }`}
              >
                {num}
              </button>
            ))}

            {/* Next */}
            <button
              onClick={() => handlePageChange(page + 1)}
              disabled={page === totalPages}
              aria-label="Next page"
              className="inline-flex items-center justify-center rounded-xl border border-border-subtle bg-card-background p-2.5 text-text-secondary transition-all duration-200 hover:border-cyan-300/40 hover:text-cyan-300 disabled:pointer-events-none disabled:opacity-30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/80"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
