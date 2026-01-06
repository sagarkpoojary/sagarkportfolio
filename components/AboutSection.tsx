import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Linkedin, Github } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

export const AboutSection: React.FC = () => {
  const whatsappNumber = PERSONAL_INFO.socials.phone.replace(/[^0-9]/g, '');

  return (
    <section id="contact" className="py-32 bg-gray-50 dark:bg-dark-card/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="border border-gray-200 dark:border-gray-900 bg-white dark:bg-black p-12 md:p-20 relative overflow-hidden">
          
          <div className="absolute top-0 right-0 w-1/3 h-px bg-gradient-to-l from-black/10 dark:from-white/10 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-px bg-gradient-to-r from-black/10 dark:from-white/10 to-transparent"></div>

          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tighter mb-10 leading-tight">
              Ready for the <br/> <span className="text-gray-400">Next Evolution?</span>
            </h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 font-light">
              Currently open to strategic opportunities within the United Kingdom tech ecosystem. Let's discuss how we can automate your growth.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-4 font-bold">Direct Line</p>
                <div className="space-y-4">
                  <a href={`mailto:${PERSONAL_INFO.socials.email}`} className="group flex items-center text-lg font-bold hover:text-gray-500 transition-colors">
                    <Mail size={18} className="mr-3 text-gray-300" />
                    Email
                  </a>
                  <a href={`https://wa.me/${whatsappNumber}`} target="_blank" className="group flex items-center text-lg font-bold hover:text-gray-500 transition-colors">
                    <MessageSquare size={18} className="mr-3 text-gray-300" />
                    WhatsApp
                  </a>
                </div>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-4 font-bold">Digital Presence</p>
                <div className="space-y-4">
                  <a href={PERSONAL_INFO.socials.linkedin} target="_blank" className="group flex items-center text-lg font-bold hover:text-gray-500 transition-colors">
                    <Linkedin size={18} className="mr-3 text-gray-300" />
                    LinkedIn
                  </a>
                  <a href={PERSONAL_INFO.socials.github} target="_blank" className="group flex items-center text-lg font-bold hover:text-gray-500 transition-colors">
                    <Github size={18} className="mr-3 text-gray-300" />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};