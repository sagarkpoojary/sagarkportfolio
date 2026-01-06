import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Command, Cpu, Layers } from 'lucide-react';
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
          
          <div className="lg:col-span-7">
            <motion.h1 
              initial={{ opacity: 0, filter: 'blur(20px)', x: -20 }}
              animate={{ opacity: 1, filter: 'blur(0px)', x: 0 }}
              transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
              className="text-6xl md:text-8xl font-extrabold tracking-tighter mb-6 leading-none uppercase"
            >
              {PERSONAL_INFO.name.split(' ')[0]} <br/> 
              <span className="text-gray-300 dark:text-gray-700">{PERSONAL_INFO.name.split(' ').slice(1).join(' ')}</span>
            </motion.h1>
            
            <motion.div 
              initial={{ opacity: 0, filter: 'blur(10px)' }}
              animate={{ opacity: 1, filter: 'blur(0px)' }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-3xl font-light mb-8 flex items-center h-10"
            >
              <span className="mr-3 opacity-30">/</span>
              <span>{displayText}</span>
              <span className="animate-pulse ml-2 inline-block w-3 h-8 bg-black dark:bg-white"></span>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, filter: 'blur(10px)' }}
              animate={{ opacity: 1, filter: 'blur(0px)' }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg text-gray-500 dark:text-gray-400 max-w-xl leading-relaxed mb-10 border-l border-gray-200 dark:border-gray-800 pl-6"
            >
              Engineering operational excellence through <span className="text-black dark:text-white font-semibold italic">autonomous systems</span>, 
              scalable AI architecture, and high-performance full-stack solutions.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex flex-wrap gap-6"
            >
              <a 
                href="#projects"
                className="group relative inline-flex items-center px-8 py-4 bg-black text-white dark:bg-white dark:text-black font-bold text-sm uppercase tracking-widest overflow-hidden transition-all"
              >
                <span className="relative z-10">Explore Archives</span>
                <div className="absolute inset-0 bg-gray-800 dark:bg-gray-200 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </a>
              <a 
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 border border-black dark:border-white font-bold text-sm uppercase tracking-widest hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
              >
                Consultation
              </a>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, filter: 'blur(30px)', scale: 0.9 }}
            animate={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3, ease: "circOut" }}
            className="lg:col-span-5 hidden lg:block"
          >
            <div className="relative p-8 border border-gray-100 dark:border-gray-900 bg-white/40 dark:bg-dark-card/20 backdrop-blur-xl shadow-2xl">
               <div className="absolute top-0 right-0 p-2 opacity-5">
                 <Command size={140} strokeWidth={1} />
               </div>
               
               <div className="space-y-8 font-mono relative z-10">
                  <div className="flex items-start gap-4">
                    <Cpu size={20} className="mt-1 text-gray-400" />
                    <div>
                      <p className="text-[10px] uppercase tracking-widest mb-1 opacity-40 font-bold">Protocol</p>
                      <p className="text-sm font-bold tracking-tight">PYTHON / TS / n8n</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Layers size={20} className="mt-1 text-gray-400" />
                    <div>
                      <p className="text-[10px] uppercase tracking-widest mb-1 opacity-40 font-bold">Deployment</p>
                      <p className="text-sm font-bold tracking-tight">AWS / GCP / DOCKER</p>
                    </div>
                  </div>
                  <div className="pt-8 border-t border-gray-100 dark:border-gray-800/50">
                    <div className="flex justify-between items-center text-[9px] opacity-30 uppercase tracking-[0.2em] font-bold">
                      <span className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                        Active
                      </span>
                      <span>v2.5.0_PRO</span>
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