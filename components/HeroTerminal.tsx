import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Command, Cpu, Layers } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const TYPING_STRINGS = [
  "Solutions Architect",
  "AI & Automation Expert",
  "Full-Stack Engineer",
  "MLOps Strategist"
];

export const HeroTerminal: React.FC = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayText, setDisplayText] = useState("");

  const whatsappNumber = PERSONAL_INFO.socials.phone.replace(/[^0-9]/g, '');

  useEffect(() => {
    const currentString = TYPING_STRINGS[textIndex];
    const typingSpeed = isDeleting ? 30 : 60;
    const pauseTime = 2500;

    const type = () => {
      if (!isDeleting && charIndex < currentString.length) {
        setDisplayText(currentString.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setDisplayText(currentString.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === currentString.length) {
        setTimeout(() => setIsDeleting(true), pauseTime);
        return;
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % TYPING_STRINGS.length);
      }
    };

    const timer = setTimeout(type, typingSpeed);
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, textIndex]);

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <div className="inline-block px-3 py-1 bg-black text-white dark:bg-white dark:text-black text-xs font-bold tracking-widest uppercase mb-6">
              Based in United Kingdom
            </div>
            <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter mb-6 leading-none uppercase">
              {PERSONAL_INFO.name.split(' ')[0]} <br/> 
              <span className="text-gray-400 dark:text-gray-600">{PERSONAL_INFO.name.split(' ').slice(1).join(' ')}</span>
            </h1>
            
            <div className="text-xl md:text-3xl font-light mb-8 flex items-center h-10">
              <span className="mr-3 opacity-50">/</span>
              <span>{displayText}</span>
              <span className="animate-pulse ml-2 inline-block w-3 h-8 bg-black dark:bg-white"></span>
            </div>

            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl leading-relaxed mb-10 border-l border-gray-300 dark:border-gray-800 pl-6">
              Engineering operational excellence through <span className="text-black dark:text-white font-semibold italic">autonomous systems</span>, 
              scalable AI architecture, and high-performance full-stack solutions.
            </p>

            <div className="flex flex-wrap gap-6">
              <a 
                href="#projects"
                className="group relative inline-flex items-center px-8 py-4 bg-black text-white dark:bg-white dark:text-black font-bold text-sm uppercase tracking-widest overflow-hidden transition-all"
              >
                <span className="relative z-10">Explore Case Studies</span>
                <div className="absolute inset-0 bg-gray-800 dark:bg-gray-200 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </a>
              <a 
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 border border-black dark:border-white font-bold text-sm uppercase tracking-widest hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
              >
                Get In Touch
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-5 hidden lg:block"
          >
            <div className="relative p-8 border border-gray-200 dark:border-gray-900 bg-gray-50 dark:bg-dark-card/30 backdrop-blur-sm">
               <div className="absolute top-0 right-0 p-2 opacity-10">
                 <Command size={120} strokeWidth={1} />
               </div>
               
               <div className="space-y-8 font-mono">
                  <div className="flex items-start gap-4">
                    <Cpu size={20} className="mt-1 opacity-50" />
                    <div>
                      <p className="text-xs uppercase tracking-widest mb-1 opacity-40">Core Stack</p>
                      <p className="text-sm font-bold">PYTHON / TS / n8n</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Layers size={20} className="mt-1 opacity-50" />
                    <div>
                      <p className="text-xs uppercase tracking-widest mb-1 opacity-40">Infrastructure</p>
                      <p className="text-sm font-bold">AWS / GCP / DOCKER</p>
                    </div>
                  </div>
                  <div className="pt-8 border-t border-gray-200 dark:border-gray-800">
                    <div className="flex justify-between items-center text-[10px] opacity-40 uppercase tracking-widest">
                      <span>Status: Online</span>
                      <span>v2.0.25</span>
                    </div>
                  </div>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};