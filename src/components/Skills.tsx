"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skills, Skill } from "@/data/portfolioData";
import { Hammer, Brain, BarChart3, Database, Layers, CheckCircle } from "lucide-react";

type CategoryFilter = "all" | "data-analysis" | "data-science" | "data-visualization" | "databases" | "tools" | "soft-skills";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("all");

  const categories = [
    { key: "all", name: "All Skills", icon: <Layers className="w-4 h-4" /> },
    { key: "data-analysis", name: "Data Analysis", icon: <BarChart3 className="w-4 h-4" /> },
    { key: "data-science", name: "AI & ML", icon: <Brain className="w-4 h-4" /> },
    { key: "databases", name: "Databases", icon: <Database className="w-4 h-4" /> },
    { key: "tools", name: "Tools", icon: <Hammer className="w-4 h-4" /> },
    { key: "soft-skills", name: "Soft Skills", icon: <CheckCircle className="w-4 h-4" /> },
  ];

  const filteredSkills = skills.filter((skill) => {
    if (activeCategory === "all") return true;
    return skill.category === activeCategory;
  });

  return (
    <section id="skills" className="py-20 px-4 md:px-8 bg-slate-100/50 dark:bg-slate-900/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">Skills & Expertise</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-primary-500 to-cyanCustom-500 mx-auto rounded-full" />
          <p className="text-slate-500 dark:text-slate-400 mt-4 max-w-xl mx-auto">
            A comprehensive list of my technical skillset, tools, databases, and core professional competencies.
          </p>
        </div>

        {/* Categories Tab Selector */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key as CategoryFilter)}
              className={`flex items-center space-x-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat.key
                  ? "bg-primary-600 text-white shadow-lg shadow-primary-500/20"
                  : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 border"
              }`}
            >
              {cat.icon}
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={skill.name}
                className="p-5 rounded-2xl glass border hover:border-primary-500/20 transition-colors flex flex-col justify-between"
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="font-bold text-slate-800 dark:text-slate-100">{skill.name}</span>
                  {skill.level && (
                    <span className="text-xs font-semibold px-2 py-0.5 rounded bg-primary-50 dark:bg-primary-950/80 text-primary-600 dark:text-primary-300 border border-primary-500/10">
                      {skill.level}%
                    </span>
                  )}
                </div>

                {skill.level && (
                  <div className="w-full bg-slate-200 dark:bg-slate-800 h-2 rounded-full overflow-hidden mt-1">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="bg-gradient-to-r from-primary-500 to-cyanCustom-400 h-full rounded-full"
                    />
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
