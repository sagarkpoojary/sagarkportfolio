import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroTerminal } from './components/HeroTerminal';
import { ProjectsGrid } from './components/ProjectsGrid';
import { SkillsCloud } from './components/SkillsCloud';
import { AboutSection } from './components/AboutSection';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  // Theme State
  const [isDark, setIsDark] = useState(true);

  // Initialize theme based on preference or system
  useEffect(() => {
    // Check if user has a saved preference or prefers dark mode
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

  // Toggle Handler
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
    <div className="min-h-screen relative overflow-x-hidden selection:bg-brand-500 selection:text-white bg-white dark:bg-dark-bg transition-colors duration-300">
      {/* Main Content Overlay */}
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