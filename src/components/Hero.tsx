"use client";

import React from "react";
import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolioData";
import { ArrowRight, Mail, Github, Linkedin, Brain, TrendingUp, FileDown } from "lucide-react";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 md:px-8 overflow-hidden"
    >
      {/* Decorative Animated Elements */}
      <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-gradient-to-tr from-primary-400 to-cyanCustom-300 rounded-full opacity-20 filter blur-3xl animate-float-slow -z-10" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-tr from-cyanCustom-500 to-indigo-500 rounded-full opacity-25 filter blur-3xl animate-float-medium -z-10" />

      <div className="max-w-4xl mx-auto text-center z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          {/* Greeting Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full glass text-sm font-semibold text-primary-600 dark:text-cyanCustom-400 border border-primary-500/20 shadow-sm"
          >
            <Brain className="w-4 h-4 text-primary-500 animate-pulse" />
            <span>AI & Machine Learning Specialist</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight"
          >
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-primary-500 via-indigo-500 to-cyanCustom-400 bg-clip-text text-transparent">
              {personalInfo.name}
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed"
          >
            A passionate <span className="font-semibold text-slate-800 dark:text-slate-100">B.Tech Computer Science student</span> specializing in building intelligent, data-driven systems. Focused on developing ML pipelines, API integrations, and robust analytics tools.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-wrap md:flex-row justify-center items-center gap-4 pt-4"
          >
            <a
              href="#projects"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full font-semibold text-white bg-gradient-to-r from-primary-600 to-indigo-600 hover:from-primary-700 hover:to-indigo-700 shadow-lg shadow-primary-500/20 hover:shadow-primary-700/30 flex items-center justify-center space-x-2 transition-all transform hover:-translate-y-0.5"
            >
              <span>View My Work</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            {personalInfo.resume && (
              <a
                href={personalInfo.resume}
                download
                className="w-full sm:w-auto px-8 py-3.5 rounded-full font-semibold text-white bg-gradient-to-r from-cyanCustom-600 to-primary-600 hover:from-cyanCustom-700 hover:to-primary-700 shadow-lg shadow-cyanCustom-500/20 hover:shadow-cyanCustom-700/30 flex items-center justify-center space-x-2 transition-all transform hover:-translate-y-0.5"
              >
                <FileDown className="w-4 h-4" />
                <span>Download Resume</span>
              </a>
            )}

            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full font-semibold text-slate-700 dark:text-slate-200 glass hover:bg-slate-100 dark:hover:bg-slate-900 border border-slate-300 dark:border-slate-800 flex items-center justify-center space-x-2 transition-all transform hover:-translate-y-0.5"
            >
              <Mail className="w-4 h-4" />
              <span>Contact Me</span>
            </a>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center items-center space-x-6 pt-8 text-slate-500 dark:text-slate-400"
          >
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-500 dark:hover:text-cyanCustom-400 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-500 dark:hover:text-cyanCustom-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="hover:text-primary-500 dark:hover:text-cyanCustom-400 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-1">
        <span className="text-[10px] uppercase tracking-widest text-slate-400 font-semibold">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-1.5 h-6 rounded-full bg-slate-400 dark:bg-slate-600"
        />
      </div>
    </section>
  );
}
