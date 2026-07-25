"use client";

import React, { useEffect, useState } from "react";
import { ArrowUp, Heart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { personalInfo } from "@/data/portfolioData";

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200/50 dark:border-slate-800/50 bg-white/20 dark:bg-slate-950/20 backdrop-blur-sm py-12 px-4 relative">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Navigation Quick Links */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
          <a href="#home" className="text-xs font-semibold text-slate-500 hover:text-primary-500 dark:text-slate-400 dark:hover:text-primary-400 transition-colors">
            Home
          </a>
          <a href="#about" className="text-xs font-semibold text-slate-500 hover:text-primary-500 dark:text-slate-400 dark:hover:text-primary-400 transition-colors">
            About
          </a>
          <a href="#skills" className="text-xs font-semibold text-slate-500 hover:text-primary-500 dark:text-slate-400 dark:hover:text-primary-400 transition-colors">
            Skills
          </a>
          <a href="#experience" className="text-xs font-semibold text-slate-500 hover:text-primary-500 dark:text-slate-400 dark:hover:text-primary-400 transition-colors">
            Experience
          </a>
          <a href="#projects" className="text-xs font-semibold text-slate-500 hover:text-primary-500 dark:text-slate-400 dark:hover:text-primary-400 transition-colors">
            Projects
          </a>
          <a href="#contact" className="text-xs font-semibold text-slate-500 hover:text-primary-500 dark:text-slate-400 dark:hover:text-primary-400 transition-colors">
            Contact
          </a>
        </div>

        {/* Brand Copyright */}
        <div className="text-center md:text-right space-y-1">
          <p className="text-xs text-slate-400 dark:text-slate-500">
            &copy; {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          <p className="text-[10px] text-slate-400 dark:text-slate-500 flex items-center justify-center md:justify-end gap-1">
            Built with Next.js & Tailwind <Heart className="w-3 h-3 text-red-500 fill-red-500" />
          </p>
        </div>
      </div>

      {/* Floating Back-To-Top Button */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 p-3 rounded-full bg-primary-600 hover:bg-primary-700 dark:bg-cyanCustom-600 dark:hover:bg-cyanCustom-700 text-white shadow-lg shadow-primary-500/20 hover:shadow-primary-600/30 transition-all z-40 focus:outline-none focus:ring-2 focus:ring-primary-500"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}
