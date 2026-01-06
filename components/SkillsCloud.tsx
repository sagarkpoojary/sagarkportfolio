import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';

export const SkillsCloud: React.FC = () => {
  return (
    <section id="skills" className="py-32 bg-white dark:bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl font-extrabold uppercase tracking-tighter mb-8 leading-none">
                Technical <br/> Ecosystem
              </h2>
              <div className="w-16 h-1 bg-black dark:bg-white mb-8"></div>
              <p className="text-gray-500 dark:text-gray-400 text-lg font-light leading-relaxed mb-10">
                A hardened stack designed for zero-latency operations and resilient system architectures.
              </p>
              
              <div className="space-y-6">
                {['AI & Automation Flow', 'Infrastructure Strategy', 'UX Architecture'].map((label, i) => (
                  <div key={label} className="flex items-center gap-4 group">
                    <div className={`w-3 h-3 border border-black dark:border-white transition-all duration-300 ${i === 0 ? 'bg-black dark:bg-white' : 'bg-transparent group-hover:bg-black dark:group-hover:bg-white'}`}></div>
                    <span className="text-xs font-bold uppercase tracking-[0.2em]">{label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-px bg-gray-100 dark:bg-gray-900 border border-gray-100 dark:border-gray-900 shadow-2xl">
            {SKILLS.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, filter: 'blur(8px)', scale: 0.95 }}
                whileInView={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05, ease: "easeOut" }}
                className="bg-white dark:bg-black p-8 group relative overflow-hidden h-44 flex flex-col justify-between"
              >
                <div className="absolute inset-0 bg-gray-50 dark:bg-gray-950 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-0 left-0 w-full h-0.5 bg-black dark:bg-white origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                
                <span className="text-[9px] font-mono text-gray-400 uppercase tracking-widest relative z-10">{skill.category.replace('-', ' ')}</span>
                <span className="text-base font-extrabold uppercase tracking-tight relative z-10 group-hover:translate-x-2 transition-transform duration-300">{skill.name}</span>
                
                {skill.highlight && (
                  <div className="absolute top-4 right-4 w-1.5 h-1.5 bg-black dark:bg-white rounded-full animate-pulse z-10"></div>
                )}
                
                <div className="text-[10px] font-mono text-gray-200 dark:text-gray-800 absolute bottom-4 right-4 font-black z-10 group-hover:opacity-100 transition-opacity duration-300 opacity-0">
                  READY
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};