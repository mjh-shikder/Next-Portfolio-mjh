"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  BadgeCheck,
  BookOpenCheck,
  ChevronDown,
  ExternalLink,
  GraduationCap,
  Medal,
} from "lucide-react";

const educationItems = [
  {
    degree: "BSS, Social Work",
    institution: "National University Bangladesh, Abu Dharr Ghifari College",
    year: "Ongoing",
    specialization: "Building strong social research foundations with analytical thinking.",
    honors: "Academic consistency while parallelly delivering production software projects.",
    coursework: ["Social Research Methods", "Community Development", "Public Policy Basics"],
  },
  {
    degree: "HSC, Humanities",
    institution: "Govt Shaheed Suhrawardy College",
    year: "2023",
    specialization: "Dhaka Board",
    honors: "Intermediate and Secondary Education Boards Bangladesh Examination",
    coursework: ["Social Work", "Economics", "Logic", "Civics"],
  },
  {
    degree: "SSC, Commerce",
    institution: "Jurain Govt High School",
    year: "2021",
    specialization: "Dhaka Board",
    honors: "Secondary School Certificate Examination",
    coursework: ["Business Studies", "Accounting", "Finance", "Entrepreneurship"],
  }

];

const certifications = [
  {
    title: "Next Level Web Development",
    issuer: "Programming Hero",
    year: "Ongoing",
    verified: true,
    link: "",
    focus: "Advanced full-stack engineering, AI-Driven Software Engineering, system design, and production-grade architecture.",
  },
  {
    title: "Complete Web Development",
    issuer: "Programming Hero",
    year: "2026",
    verified: true,
    link: "",
    focus: "Full-stack web engineering with modern React ecosystem practices.",
  },
  {
    title: "Web Penetration Testing Course",
    issuer: "Cyber Bangla Academy",
    year: "2025",
    verified: true,
    link: "",
    focus: "Hands-on vulnerability analysis and secure web application hardening.",
  },
  {
    title: "Ethical Hacking Course",
    issuer: "Creative IT Institute, Bangladesh",
    year: "2025",
    verified: true,
    link: "",
    focus: "Security fundamentals, threat modeling, and defensive engineering workflows.",
  }
];

const currentlyExploring = [
  "AI-assisted development",
  "Advanced system design",
  "Performance optimization",
  "Scalable backend architecture",
];

const containerMotion = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.09, delayChildren: 0.08 },
  },
};

const itemMotion = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function EducationSection() {
  const [expandedItem, setExpandedItem] = useState(null);

  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="relative overflow-hidden py-20 sm:py-24"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(34,211,238,0.12),transparent_34%),radial-gradient(circle_at_80%_78%,rgba(167,139,250,0.12),transparent_36%)]" />
      <div className="pointer-events-none absolute -left-20 top-14 -z-10 h-72 w-72 rounded-full bg-cyan-400/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-16 bottom-6 -z-10 h-72 w-72 rounded-full bg-violet-500/10 blur-[120px]" />

      <motion.div
        variants={containerMotion}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto w-full max-w-7xl px-6 sm:px-8"
      >
        <motion.div variants={itemMotion} className="mb-12">
          <p className="text-sm uppercase tracking-[0.2em] text-cyan-200/90">
            Education & Certifications
          </p>
          <div className="mt-3 flex flex-wrap items-end justify-between gap-5">
            <h2
              id="education-heading"
              className="max-w-4xl text-3xl font-semibold tracking-[-0.02em] text-text-primary sm:text-5xl"
            >
              Foundation driven learning with real world, production focused outcomes.
            </h2>
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/35 bg-cyan-300/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.14em] text-cyan-100">
              <Medal className="h-3.5 w-3.5" />
              Continuous learning mindset
            </span>
          </div>
          <p className="mt-4 text-sm text-text-secondary sm:text-base">
            Committed to continuous learning and evolving with modern technologies.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-12">
          <motion.div variants={itemMotion} className="space-y-5 lg:col-span-7">
            <h3 className="text-xs uppercase tracking-[0.16em] text-muted-text">Academic Foundation</h3>
            {educationItems.map((item, index) => {
              const isOpen = expandedItem === index;
              const detailsId = `coursework-${index}`;
              return (
                <article
                  key={`${item.degree}-${item.year}`}
                  className="rounded-[1.45rem] bg-linear-to-br from-cyan-300/30 via-violet-300/20 to-transparent p-px"
                >
                  <motion.div
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="rounded-[1.4rem] border border-border-subtle bg-card-background p-6 backdrop-blur sm:p-7"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <p className="inline-flex items-center gap-2 rounded-full border border-border-subtle bg-card-background px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-text-secondary">
                          <GraduationCap className="h-3.5 w-3.5 text-cyan-200" />
                          Education
                        </p>
                        <h4 className="mt-3 text-xl font-semibold text-text-primary sm:text-2xl">{item.degree}</h4>
                        <p className="mt-1 text-sm text-cyan-200/90">{item.institution}</p>
                      </div>
                      <span className="rounded-full border border-border-subtle bg-card-background px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.14em] text-text-secondary">
                        {item.year}
                      </span>
                    </div>

                    <p className="mt-4 text-sm leading-relaxed text-text-secondary">{item.specialization}</p>
                    <p className="mt-3 rounded-lg border border-emerald-300/20 bg-emerald-300/10 px-3 py-2 text-sm text-emerald-100">
                      {item.honors}
                    </p>

                    <div className="mt-5">
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={detailsId}
                        className="inline-flex items-center gap-2 rounded-lg border border-border-subtle px-3.5 py-2 text-sm text-text-primary transition-colors duration-300 hover:border-cyan-300/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/80"
                        onClick={() => setExpandedItem(isOpen ? null : index)}
                      >
                        <BookOpenCheck className="h-4 w-4 text-cyan-200" />
                        Key coursework
                        <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.24 }}>
                          <ChevronDown className="h-4 w-4" />
                        </motion.span>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen ? (
                          <motion.div
                            id={detailsId}
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                            className="overflow-hidden"
                          >
                            <ul className="mt-3 space-y-2 pl-1">
                              {item.coursework.map((course) => (
                                <li key={course} className="text-sm text-text-secondary">
                                  <span className="mr-2 text-cyan-300">-</span>
                                  {course}
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        ) : null}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                </article>
              );
            })}
          </motion.div>

          <motion.div variants={itemMotion} className="space-y-5 lg:col-span-5">
            <h3 className="text-xs uppercase tracking-[0.16em] text-muted-text">Certifications</h3>
            {certifications.map((item, index) => (
              <motion.article
                key={`${item.title}-${index}`}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="rounded-2xl border border-border-subtle bg-card-background p-5 backdrop-blur"
              >
                <div className="flex items-start justify-between gap-4">
                  <h4 className="text-base font-semibold text-text-primary sm:text-lg">{item.title}</h4>
                  <span className="rounded-full border border-border-subtle bg-background-secondary/60 px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-text-secondary">
                    {item.year}
                  </span>
                </div>
                <p className="mt-1 text-sm text-cyan-200/90">{item.issuer}</p>
                <p className="mt-3 text-sm text-text-secondary">{item.focus}</p>

                <div className="mt-4 flex flex-wrap items-center gap-2.5">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-2.5 py-1 text-[11px] uppercase tracking-[0.14em] text-emerald-100">
                    <BadgeCheck className="h-3.5 w-3.5" />
                    {item.verified ? "Credential Verified" : "Verification Pending"}
                  </span>
                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Verify ${item.title} credential`}
                      className="inline-flex items-center gap-1.5 rounded-full border border-border-subtle px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-text-primary transition-colors duration-300 hover:border-cyan-300/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/80"
                    >
                      Verify credential
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  ) : null}
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>

        <motion.div variants={itemMotion} className="mt-10 rounded-2xl border border-border-subtle bg-card-background p-5 sm:p-6">
          <p className="text-xs uppercase tracking-[0.16em] text-muted-text">Currently Exploring</p>
          <div className="mt-4 flex flex-wrap gap-2.5">
            {currentlyExploring.map((topic) => (
              <span
                key={topic}
                className="rounded-full border border-cyan-300/25 bg-cyan-300/10 px-3.5 py-1.5 text-xs font-medium text-cyan-100 shadow-[0_0_24px_rgba(34,211,238,0.12)]"
              >
                {topic}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
