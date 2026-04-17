"use client";

import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <section className="relative isolate flex min-h-[80vh] flex-col items-center justify-center overflow-hidden bg-background-primary px-6 py-24 sm:py-32 lg:px-8">
      <div className="pointer-events-none absolute inset-0 -z-20 bg-background-primary" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.15),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.15),transparent_35%)]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/20 blur-[110px]" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto max-w-2xl text-center"
      >
        <p className="font-semibold leading-8 text-5xl text-accent-primary">404</p>
        <h1 className="mt-4 text-balance text-[2.4rem] font-semibold leading-[1.04] tracking-[-0.03em] text-text-primary sm:text-6xl lg:text-7xl">
          Page not found
        </h1>
        <p className="mt-6 text-pretty text-lg font-medium text-text-secondary sm:text-xl/8 max-w-xl mx-auto">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been moved or doesn&apos;t exist.
        </p>
        
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative inline-flex items-center gap-2 rounded-xl border border-accent-primary/45 bg-linear-to-r from-cyan-400/18 to-violet-400/16 px-6 py-3.5 text-sm font-medium text-accent-primary shadow-[0_0_0_rgba(6,182,212,0)] outline-none transition-all duration-300 hover:shadow-[0_0_30px_var(--accent-glow)] focus-visible:ring-2 focus-visible:ring-accent-primary/70"
            >
              <span className="pointer-events-none absolute -inset-1px rounded-xl border border-transparent bg-[linear-gradient(120deg,rgba(34,211,238,0.55),rgba(167,139,250,0.5),rgba(34,211,238,0.55))] opacity-0 blur-[0.5px] transition-opacity duration-300 group-hover:opacity-100" />
              <Home className="relative h-4 w-4" />
              <span className="relative">Back to home</span>
            </motion.div>
          </Link>
          <button onClick={() => window.history.back()} className="text-sm font-semibold leading-6 text-text-primary hover:text-accent-primary transition-colors flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" /> Go back
          </button>
        </div>
      </motion.div>
    </section>
  );
}
