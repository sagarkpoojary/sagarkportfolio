import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';
import { PROJECTS } from '../constants';
import { Project } from '../types';

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative border border-gray-100 dark:border-gray-900 overflow-hidden"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-gray-100 dark:bg-gray-900">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          <a href={project.githubUrl} target="_blank" className="p-3 bg-white text-black hover:scale-110 transition-transform">
            <Github size={20} />
          </a>
          <a href={project.liveUrl} className="p-3 bg-black text-white hover:scale-110 transition-transform">
            <ArrowUpRight size={20} />
          </a>
        </div>
      </div>
      
      <div className="p-8">
        <div className="flex items-center justify-between mb-4">
          <span className="text-[10px] font-bold tracking-widest uppercase text-gray-400">
            {project.tags[0]}
          </span>
          <span className="text-[10px] font-mono text-gray-300">#{String(index + 1).padStart(2, '0')}</span>
        </div>
        <h3 className="text-2xl font-bold mb-3 uppercase tracking-tight group-hover:text-gray-500 transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-2">
          {project.description}
        </p>
      </div>
    </motion.div>
  );
};

export const ProjectsGrid: React.FC = () => {
  return (
    <section id="projects" className="py-32 bg-white dark:bg-black border-y border-gray-100 dark:border-gray-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-xl">
            <h2 className="text-5xl md:text-7xl font-extrabold uppercase tracking-tighter mb-6">
              Selected <br/> <span className="text-gray-300 dark:text-gray-800 underline decoration-1 underline-offset-8">Archives</span>
            </h2>
          </div>
          <p className="text-gray-400 text-sm font-mono max-w-xs uppercase leading-loose">
            Explorations in high-precision machine learning and complex enterprise-grade automation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-100 dark:bg-gray-900 border border-gray-100 dark:border-gray-900">
          {PROJECTS.map((project, index) => (
            <div key={project.id} className="bg-white dark:bg-black">
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};