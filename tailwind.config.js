/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "background-primary": "var(--background-primary)",
        "background-secondary": "var(--background-secondary)",
        "text-primary": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",
        "muted-text": "var(--muted-text)",
        "border-subtle": "var(--border-subtle)",
        "accent-primary": "var(--accent-primary)",
        "accent-glow": "var(--accent-glow)",
        "card-background": "var(--card-background)",
      },
    },
  },
};
