import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';

export const SkillsCloud: React.FC = () => {
  return (
    <section id="skills" className="py-32 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          <div className="lg:col-span-4">
            <h2 className="text-4xl font-extrabold uppercase tracking-tighter mb-8">
              Technical <br/> Protocol
            </h2>
            <div className="w-12 h-px bg-black dark:bg-white mb-8"></div>
            <p className="text-gray-500 text-sm leading-relaxed mb-10">
              A comprehensive stack designed for reliability and scalability in modern enterprise environments. Focused on the intersection of AI logic and operational efficiency.
            </p>
            <div className="flex flex-col gap-4 text-xs font-mono uppercase tracking-widest">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-black dark:bg-white"></div>
                <span>AI & Workflow Automation</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-gray-300 dark:bg-gray-700"></div>
                <span>Backend Architecture</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 border border-black dark:border-white"></div>
                <span>UI & Frontend Systems</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-px bg-gray-200 dark:bg-gray-800 border border-gray-200 dark:border-gray-800">
            {SKILLS.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white dark:bg-black p-8 group relative overflow-hidden h-40 flex flex-col justify-between"
              >
                <div className="absolute top-0 left-0 w-1 h-0 bg-black dark:bg-white group-hover:h-full transition-all duration-300"></div>
                <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">{skill.category.replace('-', ' ')}</span>
                <span className="text-sm font-bold uppercase tracking-tight">{skill.name}</span>
                {skill.highlight && (
                  <div className="absolute top-4 right-4 w-1.5 h-1.5 bg-black dark:bg-white"></div>
                )}
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};