import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';
import { PROJECTS } from '../constants';
import { Project } from '../types';

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, filter: 'blur(15px)', y: 40 }}
      whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
      className="group relative border border-gray-100 dark:border-gray-900 overflow-hidden bg-white dark:bg-black"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-gray-50 dark:bg-gray-950">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover filter grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 scale-100 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 backdrop-blur-sm transition-all duration-500 flex items-center justify-center gap-6">
          <a href={project.githubUrl} target="_blank" className="p-4 bg-white text-black hover:scale-110 transition-transform rounded-full shadow-lg">
            <Github size={22} />
          </a>
          <a href={project.liveUrl} className="p-4 bg-black text-white hover:scale-110 transition-transform rounded-full border border-white/20 shadow-lg">
            <ArrowUpRight size={22} />
          </a>
        </div>
      </div>
      
      <div className="p-10">
        <div className="flex items-center justify-between mb-6">
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400">
            {project.tags[0]}
          </span>
          <span className="text-[10px] font-mono text-gray-200 dark:text-gray-800 font-bold">PROJECT_ID: {String(index + 1).padStart(2, '0')}</span>
        </div>
        <h3 className="text-3xl font-extrabold mb-4 uppercase tracking-tighter group-hover:tracking-normal transition-all duration-500">
          {project.title}
        </h3>
        <p className="text-base text-gray-500 dark:text-gray-400 font-light leading-relaxed line-clamp-2">
          {project.description}
        </p>
        <div className="mt-8 pt-6 border-t border-gray-50 dark:border-gray-900 flex flex-wrap gap-2">
          {project.tags.slice(1).map(tag => (
            <span key={tag} className="text-[9px] font-mono px-2 py-1 bg-gray-50 dark:bg-gray-900 text-gray-400 uppercase tracking-widest">{tag}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export const ProjectsGrid: React.FC = () => {
  return (
    <section id="projects" className="py-32 bg-white dark:bg-black relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-12">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, filter: 'blur(20px)' }}
              whileInView={{ opacity: 1, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="text-6xl md:text-8xl font-extrabold uppercase tracking-tighter mb-8"
            >
              Strategic <br/> <span className="text-gray-200 dark:text-gray-800">Implementations</span>
            </motion.h2>
            <p className="text-gray-400 text-lg font-light leading-relaxed max-w-lg">
              High-performance systems engineered to solve enterprise bottlenecks through intelligent automation and rigorous design logic.
            </p>
          </div>
          <div className="hidden md:block">
            <div className="w-24 h-px bg-gray-200 dark:bg-gray-800 mb-4"></div>
            <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">Scroll to Navigate</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};