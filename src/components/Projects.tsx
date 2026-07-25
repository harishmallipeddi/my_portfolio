"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, Project } from "@/data/portfolioData";
import { Github, ExternalLink, Code2, FolderGit2 } from "lucide-react";

type ProjectCategory = "all" | "ai-ml" | "software";

export default function Projects() {
  const [filter, setFilter] = useState<ProjectCategory>("all");

  const filterTabs = [
    { key: "all", name: "All Projects" },
    { key: "ai-ml", name: "AI & Machine Learning" },
  ];

  const filteredProjects = projects.filter((project) => {
    if (filter === "all") return true;
    return project.category === filter;
  });

  return (
    <section id="projects" className="py-20 px-4 md:px-8 bg-slate-100/50 dark:bg-slate-900/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">Featured Projects</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-primary-500 to-cyanCustom-500 mx-auto rounded-full" />
          <p className="text-slate-500 dark:text-slate-400 mt-4 max-w-xl mx-auto">
            A showcase of systems and applications I've designed and built, highlighting ML architectures, conversational AI, and data pipelines.
          </p>
        </div>

        {/* Filters */}
        <div className="flex justify-center space-x-2 mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setFilter(tab.key as ProjectCategory)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all border ${
                filter === tab.key
                  ? "bg-indigo-600 text-white border-indigo-600 shadow-md shadow-indigo-500/10"
                  : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 border-slate-200 dark:border-slate-800"
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.article
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                className="group rounded-2xl glass border overflow-hidden flex flex-col justify-between hover:shadow-xl hover:border-indigo-500/20 hover:-translate-y-1 transition-all duration-300"
              >
                {/* Visual Card Header */}
                <div className="relative p-6 pb-0 flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-indigo-50 dark:bg-indigo-950/80 text-indigo-500">
                    {project.category === "ai-ml" ? (
                      <Code2 className="w-6 h-6" />
                    ) : (
                      <FolderGit2 className="w-6 h-6" />
                    )}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    {project.category === "ai-ml" ? "AI / ML" : "Software"}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2 group-hover:text-indigo-500 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Action Icons */}
                <div className="p-6 pt-0 border-t border-slate-200/50 dark:border-slate-800/50 mt-6 flex justify-between items-center">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-slate-500 hover:text-indigo-500 dark:text-slate-400 dark:hover:text-indigo-400 flex items-center gap-1.5 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>View Repository</span>
                  </a>

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-indigo-600 hover:text-indigo-700 dark:text-cyanCustom-400 dark:hover:text-cyanCustom-300 flex items-center gap-1.5 transition-colors"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
