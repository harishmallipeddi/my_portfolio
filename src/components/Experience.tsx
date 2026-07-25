"use client";

import React from "react";
import { motion } from "framer-motion";
import { timeline, achievements } from "@/data/portfolioData";
import { Briefcase, GraduationCap, Award, Calendar, ChevronRight } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">Experience & Education</h2>
        <div className="w-12 h-1 bg-gradient-to-r from-primary-500 to-cyanCustom-500 mx-auto rounded-full" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Timeline (Left 7 cols on large screens) */}
        <div className="lg:col-span-7 space-y-8">
          <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2 mb-8">
            <Briefcase className="w-6 h-6 text-primary-500" />
            <span>Timeline</span>
          </h3>

          <div className="relative border-l border-slate-200 dark:border-slate-800 ml-4 md:ml-6 space-y-12">
            {timeline.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="relative pl-8 md:pl-10"
              >
                {/* Timeline Dot with Icon */}
                <span className="absolute -left-5 top-0 flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 shadow-sm z-10">
                  {item.type === "experience" ? (
                    <Briefcase className="w-4 h-4 text-primary-500" />
                  ) : (
                    <GraduationCap className="w-5 h-5 text-indigo-500" />
                  )}
                </span>

                <div className="p-6 rounded-2xl glass border hover:border-primary-500/20 transition-all">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.period}
                    </span>
                    <span className="text-xs font-semibold text-primary-600 dark:text-cyanCustom-400 uppercase tracking-wider">
                      {item.type}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-0.5">
                    {item.title}
                  </h4>
                  <p className="text-sm font-semibold text-slate-600 dark:text-slate-400 mb-4">
                    {item.organization} {item.location && `• ${item.location}`}
                  </p>

                  <ul className="space-y-2">
                    {item.description.map((bullet, bIdx) => (
                      <li key={bIdx} className="text-sm text-slate-500 dark:text-slate-400 flex items-start">
                        <ChevronRight className="w-4 h-4 text-primary-500 mr-1.5 flex-shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievements & Certifications (Right 5 cols on large screens) */}
        <div className="lg:col-span-5 space-y-8">
          <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2 mb-8">
            <Award className="w-6 h-6 text-indigo-500" />
            <span>Certifications & Achievements</span>
          </h3>

          <div className="space-y-4">
            {achievements.map((ach, idx) => (
              <motion.div
                key={ach.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-5 rounded-2xl glass border hover:border-indigo-500/20 transition-all flex items-start gap-4 group"
              >
                <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 text-indigo-500 group-hover:scale-110 transition-transform">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 dark:text-slate-100 text-sm md:text-base leading-snug">
                    {ach.name}
                  </h4>
                  <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-0.5">
                    {ach.issuer}
                  </p>
                  {ach.description && (
                    <p className="text-xs text-slate-400 dark:text-slate-500 mt-2 leading-relaxed">
                      {ach.description}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
