"use client";

import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-8 bg-[#020205] border-t border-white/5 relative">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <p className="text-gray-500 text-sm font-medium tracking-wide mb-4 md:mb-0">
          Designed & Built by <span className="text-primary font-bold">MJH Shikder</span>
        </p>
        
        <button 
          onClick={scrollToTop}
          className="p-3 bg-gray-900 rounded-full hover:bg-primary text-gray-400 hover:text-white transition-colors duration-300 border border-gray-800"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>
      </div>
    </footer>
  );
}
