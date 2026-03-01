"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  CalendarClock,
  Github,
  Linkedin,
  Mail,
  Send,
} from "lucide-react";

const projectTypes = [
  "SaaS Product",
  "AI-Powered Web App",
  "Performance Optimization",
  "Frontend Architecture",
  "Other",
];

const contactMethods = [
  {
    label: "Email",
    value: "mjh.dev.bd@gmail.com",
    href: "mailto:mjh.dev.bd@gmail.com",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "Connect professionally",
    href: "https://www.linkedin.com/in/mjh-dev",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    value: "github.com/mjh-dev",
    href: "https://github.com/mjh-dev",
    icon: Github,
  },
  {
    label: "Calendly",
    value: "Book a strategy call",
    href: "https://calendly.com/mjh-dev",
    icon: CalendarClock,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.68, ease: [0.22, 1, 0.36, 1] },
  },
};

const initialValues = {
  name: "",
  email: "",
  projectType: "",
  message: "",
  website: "",
};

export default function ContactSection() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [isSending, setIsSending] = useState(false);

  const hasValues = useMemo(
    () => ({
      name: values.name.trim().length > 0,
      email: values.email.trim().length > 0,
      projectType: values.projectType.trim().length > 0,
      message: values.message.trim().length > 0,
    }),
    [values]
  );

  function validate() {
    const nextErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!values.name.trim()) nextErrors.name = "Name is required.";
    if (!values.email.trim()) nextErrors.email = "Email is required.";
    else if (!emailRegex.test(values.email.trim())) nextErrors.email = "Enter a valid email address.";
    if (!values.projectType.trim()) nextErrors.projectType = "Select a project type.";
    if (!values.message.trim()) nextErrors.message = "Message is required.";
    else if (values.message.trim().length < 20) nextErrors.message = "Share at least 20 characters.";

    return nextErrors;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setSubmitError("");
    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length !== 0) return;

    try {
      setIsSending(true);
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const result = await response.json();

      if (!response.ok || !result?.success) {
        setSubmitError(result?.error || "Failed to send message. Please try again.");
        return;
      }

      setSubmitted(true);
      setValues(initialValues);
      setTimeout(() => setSubmitted(false), 4500);
    } catch {
      setSubmitError("Network error. Please try again.");
    } finally {
      setIsSending(false);
    }
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative isolate overflow-hidden bg-background-primary py-20 sm:py-24"
    >
      <div className="pointer-events-none absolute inset-0 -z-20 bg-background-primary" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_14%_18%,rgba(56,189,248,0.16),transparent_32%),radial-gradient(circle_at_82%_70%,rgba(167,139,250,0.16),transparent_34%)]" />
      <motion.div
        aria-hidden="true"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        className="pointer-events-none absolute -left-16 top-20 -z-10 h-72 w-72 rounded-full bg-cyan-400/10 blur-[120px]"
      />
      <motion.div
        aria-hidden="true"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 9, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        className="pointer-events-none absolute -right-20 bottom-8 -z-10 h-80 w-80 rounded-full bg-violet-500/10 blur-[130px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.05]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180' viewBox='0 0 180 180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.78' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='180' height='180' filter='url(%23n)' opacity='0.75'/%3E%3C/svg%3E\")",
        }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto w-full max-w-7xl px-6 sm:px-8"
      >
        <motion.div variants={itemVariants} className="mb-12">
          <span className="inline-flex items-center rounded-full border border-emerald-300/35 bg-emerald-300/10 px-4 py-1.5 text-xs uppercase tracking-[0.14em] text-emerald-100">
            Currently Available for Freelance
          </span>
          <h2
            id="contact-heading"
            className="mt-5 max-w-4xl text-3xl font-semibold tracking-[-0.02em] text-text-primary sm:text-5xl"
          >
            Let&apos;s Build Something Exceptional.
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-text-secondary sm:text-base">
            I help startups and businesses craft high-performance, scalable web applications.
          </p>
        </motion.div>

        <div className="grid gap-7 lg:grid-cols-12">
          <motion.div variants={itemVariants} className="space-y-5 lg:col-span-5">
            <p className="text-xs uppercase tracking-[0.16em] text-muted-text">Direct Channels</p>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {contactMethods.map((method) => {
                const Icon = method.icon;
                return (
                  <motion.a
                    key={method.label}
                    href={method.href}
                    target={method.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={method.href.startsWith("mailto:") ? undefined : "noreferrer"}
                    aria-label={`Open ${method.label}`}
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="group rounded-2xl border border-border-subtle bg-card-background p-4 backdrop-blur transition-colors duration-300 hover:border-cyan-300/45 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/80"
                  >
                    <div className="flex items-center gap-3">
                      <span className="rounded-xl border border-border-subtle bg-background-secondary/60 p-2.5 text-cyan-200">
                        <motion.span
                          animate={{ y: [0, -1.5, 0] }}
                          transition={{ duration: 2.4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                          className="block"
                        >
                          <Icon className="h-4 w-4" />
                        </motion.span>
                      </span>
                      <div>
                        <p className="text-xs uppercase tracking-[0.15em] text-muted-text">
                          {method.label}
                        </p>
                        <p className="text-sm font-medium text-text-primary">{method.value}</p>
                      </div>
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="lg:col-span-7">
            <div className="rounded-3xl border border-border-subtle bg-card-background p-[1px]">
              <div className="rounded-[1.45rem] border border-border-subtle bg-card-background p-5 backdrop-blur sm:p-7">
                <form className="space-y-4" onSubmit={handleSubmit} noValidate aria-label="Contact form">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="hidden" aria-hidden="true">
                      <label htmlFor="contact-website">Website</label>
                      <input
                        id="contact-website"
                        name="website"
                        type="text"
                        tabIndex={-1}
                        autoComplete="off"
                        value={values.website}
                        onChange={(e) =>
                          setValues((prev) => ({ ...prev, website: e.target.value }))
                        }
                      />
                    </div>

                    <div className="relative">
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        value={values.name}
                        onChange={(e) =>
                          setValues((prev) => ({ ...prev, name: e.target.value }))
                        }
                        aria-label="Name"
                        aria-invalid={Boolean(errors.name)}
                        aria-describedby={errors.name ? "name-error" : undefined}
                        className="peer h-12 w-full rounded-xl border border-border-subtle bg-background-secondary/60 px-3.5 pt-4 text-sm text-text-primary outline-none transition-all duration-300 placeholder-transparent focus:border-cyan-300/60 focus:shadow-[0_0_0_3px_rgba(34,211,238,0.12)]"
                        placeholder="Name"
                      />
                      <label
                        htmlFor="contact-name"
                        className={`pointer-events-none absolute left-3.5 transition-all duration-200 ${
                          hasValues.name
                            ? "top-1.5 text-[11px] uppercase tracking-[0.14em] text-cyan-200"
                            : "top-3.5 text-sm text-muted-text peer-focus:top-1.5 peer-focus:text-[11px] peer-focus:uppercase peer-focus:tracking-[0.14em] peer-focus:text-cyan-200"
                        }`}
                      >
                        Name
                      </label>
                      {errors.name ? (
                        <p id="name-error" className="mt-1 text-xs text-rose-300">
                          {errors.name}
                        </p>
                      ) : null}
                    </div>

                    <div className="relative">
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        value={values.email}
                        onChange={(e) =>
                          setValues((prev) => ({ ...prev, email: e.target.value }))
                        }
                        aria-label="Email"
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={errors.email ? "email-error" : undefined}
                        className="peer h-12 w-full rounded-xl border border-border-subtle bg-background-secondary/60 px-3.5 pt-4 text-sm text-text-primary outline-none transition-all duration-300 placeholder-transparent focus:border-cyan-300/60 focus:shadow-[0_0_0_3px_rgba(34,211,238,0.12)]"
                        placeholder="Email"
                      />
                      <label
                        htmlFor="contact-email"
                        className={`pointer-events-none absolute left-3.5 transition-all duration-200 ${
                          hasValues.email
                            ? "top-1.5 text-[11px] uppercase tracking-[0.14em] text-cyan-200"
                            : "top-3.5 text-sm text-muted-text peer-focus:top-1.5 peer-focus:text-[11px] peer-focus:uppercase peer-focus:tracking-[0.14em] peer-focus:text-cyan-200"
                        }`}
                      >
                        Email
                      </label>
                      {errors.email ? (
                        <p id="email-error" className="mt-1 text-xs text-rose-300">
                          {errors.email}
                        </p>
                      ) : null}
                    </div>
                  </div>

                  <div className="relative">
                    <select
                      id="project-type"
                      name="projectType"
                      value={values.projectType}
                      onChange={(e) =>
                        setValues((prev) => ({ ...prev, projectType: e.target.value }))
                      }
                      aria-label="Project type"
                      aria-invalid={Boolean(errors.projectType)}
                      aria-describedby={errors.projectType ? "project-type-error" : undefined}
                      className="h-12 w-full appearance-none rounded-xl border border-border-subtle bg-background-secondary/60 px-3.5 pt-4 text-sm text-text-primary outline-none transition-all duration-300 focus:border-cyan-300/60 focus:shadow-[0_0_0_3px_rgba(34,211,238,0.12)]"
                    >
                      <option value="" disabled>
                        Select project type
                      </option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                    <label
                      htmlFor="project-type"
                      className="pointer-events-none absolute left-3.5 top-1.5 text-[11px] uppercase tracking-[0.14em] text-cyan-200"
                    >
                      Project Type
                    </label>
                    {errors.projectType ? (
                      <p id="project-type-error" className="mt-1 text-xs text-rose-300">
                        {errors.projectType}
                      </p>
                    ) : null}
                  </div>

                  <div className="relative">
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      value={values.message}
                      onChange={(e) =>
                        setValues((prev) => ({ ...prev, message: e.target.value }))
                      }
                      aria-label="Message"
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={errors.message ? "message-error" : undefined}
                      className="peer w-full rounded-xl border border-border-subtle bg-background-secondary/60 px-3.5 pt-5 text-sm text-text-primary outline-none transition-all duration-300 placeholder-transparent focus:border-cyan-300/60 focus:shadow-[0_0_0_3px_rgba(34,211,238,0.12)]"
                      placeholder="Message"
                    />
                    <label
                      htmlFor="contact-message"
                      className={`pointer-events-none absolute left-3.5 transition-all duration-200 ${
                        hasValues.message
                          ? "top-1.5 text-[11px] uppercase tracking-[0.14em] text-cyan-200"
                          : "top-3.5 text-sm text-muted-text peer-focus:top-1.5 peer-focus:text-[11px] peer-focus:uppercase peer-focus:tracking-[0.14em] peer-focus:text-cyan-200"
                      }`}
                    >
                      Message
                    </label>
                    {errors.message ? (
                      <p id="message-error" className="mt-1 text-xs text-rose-300">
                        {errors.message}
                      </p>
                    ) : null}
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    disabled={isSending}
                    className="group inline-flex items-center gap-2 rounded-xl border border-cyan-300/45 bg-gradient-to-r from-cyan-300/16 to-violet-300/15 px-5 py-3 text-sm font-medium text-cyan-100 shadow-[0_0_0_rgba(34,211,238,0)] transition-all duration-300 hover:shadow-[0_0_26px_rgba(34,211,238,0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/80 disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {isSending ? "Sending..." : "Start a Conversation"}
                    <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </motion.button>

                  {submitted ? (
                    <p
                      className="rounded-lg border border-emerald-300/25 bg-emerald-300/10 px-3 py-2 text-sm text-emerald-100"
                      role="status"
                      aria-live="polite"
                    >
                      Message captured. I will get back with a focused response.
                    </p>
                  ) : null}

                  {submitError ? (
                    <p
                      className="rounded-lg border border-rose-300/25 bg-rose-300/10 px-3 py-2 text-sm text-rose-100"
                      role="alert"
                    >
                      {submitError}
                    </p>
                  ) : null}
                </form>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.p
          variants={itemVariants}
          className="mt-10 text-center text-xs uppercase tracking-[0.16em] text-muted-text sm:text-sm"
        >
          Design with emotion. Build with logic. Ship with purpose.
        </motion.p>
      </motion.div>
    </section>
  );
}
