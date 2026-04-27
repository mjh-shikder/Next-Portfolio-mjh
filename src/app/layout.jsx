import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import NavbarWrapper from "@/components/NavbarWrapper";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/theme/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



 
  export const metadata = {
    title: "MJH Shikder | React & Next.js Developer",
    description:
      "Portfolio of Md Jubair Hossain (MJH Shikder) — React & Next.js developer " +
      "building high-performance, scalable web applications in Bangladesh.",
    keywords: [
      "MJH Shikder",
      "Md Jubair Hossain",
      "React Developer",
      "Best React Developer",
      "Best Next.js Developer",
      "Frontend Engineer",
      "Best Frontend Engineer",
      "Full Stack Developer",
      "Best Full Stack Developer",
      "Web Developer Portfolio",
      "Performance Optimization",
    ],
    authors: [{ name: "Md Jubair Hossain", url: "https://www.mjhshikder.com/" }],
 
    // ── Base URL (required for og:url and canonical) ──────────────────────────
    metadataBase: new URL("https://www.mjhshikder.com/"),
    alternates: { canonical: "/" },
 
    // ── Robots ────────────────────────────────────────────────────────────────
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
 
    // ── Open Graph (Facebook, LinkedIn, WhatsApp) ─────────────────────────────
    openGraph: {
      title: "MJH Shikder | React & Next.js Developer",
      description:
        "High-performance web applications built with React, Next.js & Node.js.",
      url: "https://www.mjhshikder.com/",
      siteName: "MJH Shikder Portfolio",
      images: [
        {
          url: "https://i.ibb.co.com/Cpjg5LrR/mjh-shikder.png",   // Create a 1200×630 image and put it in /public
          width: 1200,
          height: 630,
          alt: "MJH Shikder — React & Next.js Developer",
        },
      ],
      locale: "en_US",
      type: "website",
    },
 
    // ── Twitter / X Card ──────────────────────────────────────────────────────
    twitter: {
      card: "summary_large_image",
      title: "MJH Shikder | React & Next.js Developer",
      description:
        "High-performance web applications built with React, Next.js & Node.js.",
      images: ["https://i.ibb.co.com/Cpjg5LrR/mjh-shikder.png"],
      creator: "@mjh_shikder", 
    },
 
    // ── Verification (add when you set up Google Search Console etc.) ─────────
    // verification: {
   //   google: "your-google-site-verification-token",
    //   yandex: "your-yandex-token",
    // },
  };
 
  



const themeScript = `
(() => {
  try {
    const stored = localStorage.getItem("theme");
    const system = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    const theme = stored === "light" || stored === "dark" || stored === "system" ? stored : "system";
    const resolved = theme === "system" ? system : theme;
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(resolved);
  } catch {
    document.documentElement.classList.add("dark");
  }
})();
`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background text-foreground flex flex-col relative`}
      >
        <ThemeProvider>
          <SmoothScroll>
            <NavbarWrapper />
            <main className="grow">
              {children}
            </main>
            <Footer />
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
