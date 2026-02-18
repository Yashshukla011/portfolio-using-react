import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaCode } from 'react-icons/fa6';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { 
      name: 'GitHub', 
      icon: FaGithub, 
      url: 'https://github.com/Yashshukla011',
      color: 'hover:text-white' 
    },
    { 
      name: 'LinkedIn', 
      icon: FaLinkedin, 
      url: 'https://www.linkedin.com/in/yash-shukla-7b1b3b2b/', // Apni actual ID yahan dalein
      color: 'hover:text-blue-400' 
    },
    { 
      name: 'Email', 
      icon: FaEnvelope, 
      url: 'mailto:yashshuklashuklas6@gmail.com',
      color: 'hover:text-rose-400' 
    },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-slate-950 text-white pt-20 pb-10 border-t border-slate-900 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-24 bg-indigo-500/10 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center">
          
          {/* Logo or Name */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mb-8 flex items-center gap-2"
          >
            <FaCode className="text-indigo-500 text-2xl" />
            <span className="text-2xl font-black uppercase tracking-tighter">
              Yash <span className="text-indigo-500">Shukla</span>
            </span>
          </motion.div>

          {/* Quick Navigation */}
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-10">
            {quickLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className="text-slate-400 hover:text-indigo-400 text-sm font-medium transition-colors uppercase tracking-widest"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="flex justify-center space-x-8 mb-12">
            {socialLinks.map((link) => (
              <motion.a 
                key={link.name}
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                whileHover={{ y: -5 }}
                className={`text-slate-500 text-2xl transition-all duration-300 ${link.color}`}
                aria-label={link.name}
              >
                <link.icon />
              </motion.a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full max-w-md h-[1px] bg-gradient-to-r from-transparent via-slate-800 to-transparent mb-8" />

          {/* Copyright Section */}
          <div className="text-center space-y-2">
            <p className="text-xs text-slate-500 font-mono tracking-widest uppercase">
              &copy; {currentYear} • Designed & Engineered with 
              <span className="text-rose-500 animate-pulse mx-1">❤️</span> 
              by Yash
            </p>
            <p className="text-[10px] text-slate-600 uppercase tracking-[0.3em]">
              React.js • Tailwind CSS • Framer Motion
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;