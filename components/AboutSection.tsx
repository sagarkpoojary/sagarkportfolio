import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Linkedin, Github } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

// AboutSection handles the contact information and social links with a clean, high-performance layout.
export const AboutSection: React.FC = () => {
  const whatsappNumber = PERSONAL_INFO.socials.phone.replace(/[^0-9]/g, '');

  return (
    <section id="contact" className="py-40 bg-white dark:bg-black border-t border-gray-50 dark:border-gray-950">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, filter: 'blur(40px)' }}
          whileInView={{ opacity: 1, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="border border-gray-100 dark:border-gray-900 bg-gray-50/50 dark:bg-dark-card/10 p-12 md:p-24 relative overflow-hidden backdrop-blur-md"
        >
          {/* Subtle Background Accent */}
          <div className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[50%] bg-gray-200 dark:bg-white/5 blur-[100px] rounded-full pointer-events-none"></div>

          <div className="max-w-3xl relative z-10">
            <h2 className="text-5xl md:text-8xl font-extrabold uppercase tracking-tighter mb-12 leading-none">
              Start the <br/> <span className="text-gray-300 dark:text-gray-800">Conversation</span>
            </h2>
            
            <p className="text-xl text-gray-500 dark:text-gray-400 mb-16 font-light leading-relaxed max-w-xl">
              Currently accepting limited project engagements and technical consulting for Q3-Q4 2024. Let's engineer something remarkable.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-16">
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400 mb-8 font-black">Direct Communication</p>
                <div className="space-y-6">
                  <a href={`mailto:${PERSONAL_INFO.socials.email}`} className="group flex items-center text-xl font-bold hover:translate-x-4 transition-transform duration-500">
                    <Mail size={22} className="mr-4 text-gray-300 dark:text-gray-700 group-hover:text-black dark:group-hover:text-white transition-colors" />
                    <span className="border-b border-transparent group-hover:border-black dark:group-hover:border-white">Email</span>
                  </a>
                  <a href={`https://wa.me/${whatsappNumber}`} target="_blank" className="group flex items-center text-xl font-bold hover:translate-x-4 transition-transform duration-500">
                    <MessageSquare size={22} className="mr-4 text-gray-300 dark:text-gray-700 group-hover:text-black dark:group-hover:text-white transition-colors" />
                    <span className="border-b border-transparent group-hover:border-black dark:group-hover:border-white">WhatsApp</span>
                  </a>
                </div>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400 mb-8 font-black">Professional Nodes</p>
                <div className="space-y-6">
                  <a href={PERSONAL_INFO.socials.linkedin} target="_blank" className="group flex items-center text-xl font-bold hover:translate-x-4 transition-transform duration-500">
                    <Linkedin size={22} className="mr-4 text-gray-300 dark:text-gray-700 group-hover:text-black dark:group-hover:text-white transition-colors" />
                    <span className="border-b border-transparent group-hover:border-black dark:group-hover:border-white">LinkedIn</span>
                  </a>
                  <a href={PERSONAL_INFO.socials.github} target="_blank" className="group flex items-center text-xl font-bold hover:translate-x-4 transition-transform duration-500">
                    <Github size={22} className="mr-4 text-gray-300 dark:text-gray-700 group-hover:text-black dark:group-hover:text-white transition-colors" />
                    <span className="border-b border-transparent group-hover:border-black dark:group-hover:border-white">GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};