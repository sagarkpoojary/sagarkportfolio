import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroTerminal } from './components/HeroTerminal';
import { ProjectsGrid } from './components/ProjectsGrid';
import { SkillsCloud } from './components/SkillsCloud';
import { AboutSection } from './components/AboutSection';
import { Footer } from './components/Footer';
import { motion, useScroll, useTransform } from 'framer-motion';

const App: React.FC = () => {
  const [isDark, setIsDark] = useState(true);
  const { scrollYProgress } = useScroll();
  
  // Parallax effects for background blobs
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 200]);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black bg-white dark:bg-dark-bg transition-colors duration-500">
      
      {/* Dynamic Blurry Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <motion.div 
          style={{ y: y1 }}
          className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-gray-200/30 dark:bg-white/5 blur-[120px]" 
        />
        <motion.div 
          style={{ y: y2 }}
          className="absolute top-[40%] -right-[10%] w-[50%] h-[50%] rounded-full bg-gray-300/20 dark:bg-white/5 blur-[150px]" 
        />
        <motion.div 
          style={{ y: y1 }}
          className="absolute -bottom-[10%] left-[20%] w-[30%] h-[30%] rounded-full bg-gray-200/30 dark:bg-white/5 blur-[100px]" 
        />
      </div>

      <div className="relative z-10">
        <Navbar isDark={isDark} toggleTheme={toggleTheme} />
        
        <main>
          <HeroTerminal />
          <ProjectsGrid />
          <SkillsCloud />
          <AboutSection />
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default App;