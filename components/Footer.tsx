import React from 'react';
import { PERSONAL_INFO } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-black py-16 border-t border-gray-100 dark:border-gray-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="font-bold text-xl tracking-tighter uppercase">
              {PERSONAL_INFO.name}
            </h3>
            <p className="text-[10px] font-mono uppercase tracking-[0.3em] mt-2 opacity-30">
              Technology & Solutions Architect
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end text-[10px] uppercase tracking-widest text-gray-400 gap-2">
            <p>© {new Date().getFullYear()} All Rights Reserved.</p>
            <p className="opacity-50">Designed for performance & authority.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};