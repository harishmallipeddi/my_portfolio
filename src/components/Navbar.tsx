"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "./ThemeProvider";
import { Sun, Moon, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { personalInfo } from "@/data/portfolioData";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Monitor scroll for shadow/transparency updates
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 shadow-md glass border-b"
          : "py-5 bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo / Brand Name */}
        <a href="#home" className="flex items-center space-x-2 group">
          <span className="font-extrabold text-xl tracking-tight bg-gradient-to-r from-primary-500 to-cyanCustom-500 bg-clip-text text-transparent group-hover:opacity-80 transition-opacity">
            {personalInfo.name.split(" ")[1].toUpperCase()}
          </span>
          <span className="text-xs px-2 py-0.5 rounded-full font-semibold bg-primary-100 dark:bg-primary-950 text-primary-600 dark:text-primary-300">
            AI & ML
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
          
          {personalInfo.resume && (
            <a
              href={personalInfo.resume}
              download
              className="text-xs font-semibold px-3.5 py-1.5 rounded-full bg-primary-600 text-white hover:bg-primary-700 transition-colors shadow-sm"
            >
              Resume
            </a>
          )}

          {/* Light/Dark Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5 text-yellow-400" />
            ) : (
              <Moon className="w-5 h-5 text-slate-700" />
            )}
          </button>
        </nav>

        {/* Mobile Navbar Buttons */}
        <div className="flex items-center space-x-4 md:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors focus:outline-none"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5 text-yellow-400" />
            ) : (
              <Moon className="w-5 h-5 text-slate-700" />
            )}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors focus:outline-none"
            aria-label="Open Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-b border-t mt-3"
          >
            <div className="px-4 pt-2 pb-6 space-y-3 flex flex-col items-start">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="w-full py-2 text-base font-semibold text-slate-700 dark:text-slate-300 hover:text-primary-500 dark:hover:text-primary-400 border-b border-slate-200/50 dark:border-slate-800/50"
                >
                  {link.name}
                </a>
              ))}
              {personalInfo.resume && (
                <a
                  href={personalInfo.resume}
                  download
                  onClick={() => setIsOpen(false)}
                  className="w-full py-2 text-base font-bold text-primary-600 dark:text-cyanCustom-400 border-b border-slate-200/50 dark:border-slate-800/50"
                >
                  Download Resume
                </a>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
