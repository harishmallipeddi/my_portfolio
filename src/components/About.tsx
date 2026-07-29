"use client";

import React from "react";
import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolioData";
import { Award, BookOpen, Heart, User, Sparkles, GraduationCap, FileDown } from "lucide-react";

export default function About() {
  const cards = [
    {
      icon: <GraduationCap className="w-6 h-6 text-primary-500" />,
      title: "B.Tech Student",
      desc: "Computer Science specializing in AI & ML (2022-2026). CGPA: 7.6",
    },
    {
      icon: <Award className="w-6 h-6 text-indigo-500" />,
      title: "ML Developer",
      desc: "Building systems with Gemini API, regression models, classification tools.",
    },
    {
      icon: <Heart className="w-6 h-6 text-red-500" />,
      title: "Core Values",
      desc: "Committed to growth mindset, technical excellence, and collaboration.",
    },
  ];

  return (
    <section id="about" className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">About Me</h2>
        <div className="w-12 h-1 bg-gradient-to-r from-primary-500 to-cyanCustom-500 mx-auto rounded-full" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column - Story Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 space-y-6"
        >
          <div className="flex items-center space-x-2 text-primary-600 dark:text-cyanCustom-400 font-semibold text-sm">
            <User className="w-4 h-4" />
            <span>My Journey</span>
          </div>
          
          <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100">
            Passionate about coding the future with Artificial Intelligence
          </h3>

          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            {personalInfo.summary}
          </p>

          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            {personalInfo.aboutStory}
          </p>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="p-4 rounded-2xl glass border flex flex-col justify-center">
              <span className="text-2xl font-bold text-slate-800 dark:text-slate-100">7.6</span>
              <span className="text-xs text-slate-500 dark:text-slate-400">B.Tech CGPA</span>
            </div>
            <div className="p-4 rounded-2xl glass border flex flex-col justify-center">
              <span className="text-2xl font-bold text-slate-800 dark:text-slate-100">3+</span>
              <span className="text-xs text-slate-500 dark:text-slate-400">Core ML Projects</span>
            </div>
          </div>

          {/* Resume Download CTA */}
          {personalInfo.resume && (
            <div className="pt-2">
              <a
                href={personalInfo.resume}
                download
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl font-semibold text-white bg-gradient-to-r from-primary-600 to-indigo-600 hover:from-primary-700 hover:to-indigo-700 transition-all text-sm shadow-md shadow-primary-500/10 hover:shadow-primary-600/20"
              >
                <FileDown className="w-4 h-4" />
                <span>Download My Full Resume</span>
              </a>
            </div>
          )}
        </motion.div>

        {/* Right Column - Cards Layout */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 space-y-6"
        >
          {cards.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              className="p-6 rounded-2xl glass border hover:shadow-lg hover:border-primary-500/30 transition-all flex items-start space-x-4 group"
            >
              <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800/80 group-hover:scale-110 transition-transform">
                {card.icon}
              </div>
              <div>
                <h4 className="font-bold text-slate-800 dark:text-slate-100 text-lg mb-1 flex items-center gap-1.5">
                  {card.title}
                  {idx === 1 && <Sparkles className="w-4 h-4 text-amber-500 animate-pulse" />}
                </h4>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
