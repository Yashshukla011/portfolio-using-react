import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-[100] transition-all duration-500 px-6 md:px-12 ${
        isScrolled ? 'top-4' : 'top-0'
      }`}
    >
      <div 
        className={`max-w-7xl mx-auto transition-all duration-500 ${
          isScrolled 
          ? 'bg-slate-900/70 backdrop-blur-md border border-slate-700/50 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)]' 
          : 'bg-transparent py-4'
        }`}
      >
        <div className="flex justify-between items-center py-4 px-8">
          
          {/* Logo with Gradient */}
          <a href="#home" className="relative group">
            <span className="text-2xl font-black tracking-tighter text-white">
              YASH<span className="text-indigo-500 group-hover:text-white transition-colors">.</span>
            </span>
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-500 group-hover:w-full transition-all duration-300"></div>
          </a>

          {/* Center Navigation - Pill Shape */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-sm font-bold text-slate-400 hover:text-white transition-all duration-300 rounded-lg hover:bg-white/5 uppercase tracking-wider"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Social / Contact Button */}
          <div className="hidden md:block">
            <a 
              href="#contact" 
              className="relative inline-flex items-center justify-center px-6 py-2.5 overflow-hidden font-bold text-white transition-all duration-300 bg-indigo-600 rounded-xl hover:bg-indigo-500 group shadow-lg shadow-indigo-500/20"
            >
              <span className="relative text-xs uppercase tracking-widest">Let's Talk</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-slate-900 border-t border-slate-800 rounded-b-2xl overflow-hidden"
            >
              <div className="flex flex-col p-6 space-y-4">
                {navLinks.map((link) => (
                  <a 
                    key={link.name}
                    href={link.href} 
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-slate-400 hover:text-indigo-400 font-bold uppercase tracking-widest text-sm"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Header;