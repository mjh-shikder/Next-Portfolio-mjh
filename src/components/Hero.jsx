"use client";

import Image from "next/image";
import { Download, FolderOpen, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const revealContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const revealItem = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
};

const techBadges = ["React", "Next.js", "Node.js", "PostgreSQL"];

export default function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden bg-background-primary pt-28 pb-14 sm:pt-32 sm:pb-20"
    >
      <div className="pointer-events-none absolute inset-0 -z-20 bg-background-primary" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_18%,rgba(6,182,212,0.18),transparent_34%),radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.2),transparent_35%),radial-gradient(circle_at_52%_80%,rgba(99,102,241,0.16),transparent_40%)]" />
      <div className="pointer-events-none absolute -left-20 top-16 -z-10 h-72 w-72 rounded-full bg-cyan-400/20 blur-[110px]" />
      <div className="pointer-events-none absolute -right-16 top-24 -z-10 h-72 w-72 rounded-full bg-violet-500/20 blur-[115px]" />
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180' viewBox='0 0 180 180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='180' height='180' filter='url(%23n)' opacity='0.8'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8">
        <motion.div
          variants={revealContainer}
          initial="hidden"
          animate="show"
          className="grid items-center gap-14 lg:grid-cols-12"
        >
          <div className="lg:col-span-7">
            <motion.div variants={revealItem} className="mb-5 inline-flex">
              <span className="inline-flex items-center gap-2 rounded-full border border-border-subtle bg-card-background px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-accent-primary">
                <Sparkles className="h-3.5 w-3.5" />
                Available for freelance collaborations
              </span>
            </motion.div>

            <motion.h1
              id="hero-heading"
              variants={revealItem}
              className="max-w-3xl text-balance text-[2.4rem] font-semibold leading-[1.04] tracking-[-0.03em] text-text-primary sm:text-6xl lg:text-7xl"
            >
              <span className="block text-text-primary">Md Jubair Hossain</span>
              <span className="mt-2 block bg-gradient-to-r from-cyan-300 via-sky-300 to-violet-300 bg-clip-text text-transparent">
                React & Next.js Engineer
              </span>
              <span className="mt-2 block text-text-secondary">
                building high-performance SaaS & AI-powered web applications.
              </span>
            </motion.h1>

            <motion.p
              variants={revealItem}
              className="mt-7 max-w-2xl text-pretty text-base leading-relaxed text-text-secondary sm:text-lg"
            >
              I architect fast, scalable products that convert business goals into
              measurable outcomes, from clean user journeys to resilient backend
              systems designed for growth and long-term maintainability.
            </motion.p>

            <motion.div
              variants={revealItem}
              className="mt-8 flex flex-wrap gap-3 text-sm text-text-secondary"
            >
              <span className="rounded-full border border-border-subtle bg-card-background px-4 py-2">
                Built 15+ production apps
              </span>
              <span className="rounded-full border border-border-subtle bg-card-background px-4 py-2">
                Optimized performance up to 40%
              </span>
              <span className="rounded-full border border-border-subtle bg-card-background px-4 py-2">
                Focused on scalable architecture
              </span>
            </motion.div>

            <motion.div variants={revealItem} className="mt-9 flex flex-wrap gap-4">
              <motion.a
                href="#projects"
                aria-label="View Projects"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl border border-border-subtle bg-card-background px-6 py-3.5 text-sm font-medium text-text-primary outline-none transition-all duration-300 focus-visible:ring-2 focus-visible:ring-accent-primary/70"
              >
                <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-cyan-300/20 to-violet-300/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <FolderOpen className="relative h-4 w-4" />
                <span className="relative">View Projects</span>
              </motion.a>

              <motion.a
                href="/resume.pdf"
                aria-label="Download Resume"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="group relative inline-flex items-center gap-2 rounded-xl border border-accent-primary/45 bg-gradient-to-r from-cyan-400/18 to-violet-400/16 px-6 py-3.5 text-sm font-medium text-accent-primary shadow-[0_0_0_rgba(6,182,212,0)] outline-none transition-all duration-300 hover:shadow-[0_0_30px_var(--accent-glow)] focus-visible:ring-2 focus-visible:ring-accent-primary/70"
                download
              >
                <span className="pointer-events-none absolute -inset-[1px] rounded-xl border border-transparent bg-[linear-gradient(120deg,rgba(34,211,238,0.55),rgba(167,139,250,0.5),rgba(34,211,238,0.55))] opacity-0 blur-[0.5px] transition-opacity duration-300 group-hover:opacity-100" />
                <Download className="relative h-4 w-4" />
                <span className="relative">Download Resume</span>
              </motion.a>
            </motion.div>
          </div>

          <motion.div variants={revealItem} className="lg:col-span-5 lg:pl-6">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="relative ml-auto w-full max-w-md"
            >
              <div className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-cyan-400/25 via-sky-300/10 to-violet-400/25 blur-2xl" />
              <div className="relative overflow-hidden rounded-[1.9rem] border border-border-subtle bg-card-background p-2 shadow-[0_28px_80px_-34px_rgba(0,0,0,0.45)]">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem]">
                  <Image
                    src="/photo.png"
                    alt="Portrait of Md Jubair Hossain"
                    fill
                    className="object-cover object-center"
                    priority
                    sizes="(max-width: 1024px) 90vw, 430px"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background-secondary/80 via-transparent to-transparent" />
                </div>
                <div className="absolute bottom-5 left-5 right-5 rounded-xl border border-border-subtle bg-card-background/85 p-4 backdrop-blur">
                  <p className="text-[11px] uppercase tracking-[0.16em] text-cyan-200/90">
                    Product-ready engineering
                  </p>
                  <p className="mt-1 text-sm text-text-secondary">
                    Architecture-first builds with measurable velocity and quality.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="mt-14 rounded-2xl border border-border-subtle bg-card-background p-5 backdrop-blur-sm sm:p-6"
        >
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs uppercase tracking-[0.16em] text-muted-text">
              Core stack
            </span>
            {techBadges.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-border-subtle bg-card-background px-3 py-1.5 text-xs font-medium text-text-secondary"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="mt-5 grid gap-4 text-sm text-text-secondary sm:grid-cols-3">
            <div className="rounded-xl border border-border-subtle bg-card-background p-4">
              <p className="text-[11px] uppercase tracking-[0.14em] text-muted-text">Delivery</p>
              <p className="mt-1 text-lg font-semibold text-text-primary">15+ Apps</p>
            </div>
            <div className="rounded-xl border border-border-subtle bg-card-background p-4">
              <p className="text-[11px] uppercase tracking-[0.14em] text-muted-text">
                Performance Impact
              </p>
              <p className="mt-1 text-lg font-semibold text-text-primary">Up to 40% gain</p>
            </div>
            <div className="rounded-xl border border-border-subtle bg-card-background p-4">
              <p className="text-[11px] uppercase tracking-[0.14em] text-muted-text">Focus</p>
              <p className="mt-1 text-lg font-semibold text-text-primary">Scalable architecture</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
