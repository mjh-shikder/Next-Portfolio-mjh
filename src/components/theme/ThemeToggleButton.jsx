"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export default function ThemeToggleButton() {
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <motion.button
      type="button"
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-border-subtle bg-card-background text-text-secondary shadow-[0_0_0_rgba(2,132,199,0)] outline-none backdrop-blur transition-all duration-300 hover:shadow-[0_0_20px_var(--accent-glow)] focus-visible:ring-2 focus-visible:ring-accent-primary/70"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={resolvedTheme}
          initial={{ opacity: 0, rotate: -40, scale: 0.75 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 40, scale: 0.75 }}
          transition={{ duration: 0.24, ease: "easeInOut" }}
          className="absolute"
        >
          {isDark ? (
            <Sun className="h-4 w-4 text-amber-400" />
          ) : (
            <Moon className="h-4 w-4 text-sky-500" />
          )}
        </motion.span>
      </AnimatePresence>
    </motion.button>
  );
}
