import React from 'react';
import { motion } from 'framer-motion';
import myPic from "../assets/img.jpg";

const Home = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen w-full flex flex-col justify-center items-center text-center overflow-hidden bg-slate-950 text-white pt-20"
    >
     
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/10 blur-[120px] rounded-full z-0" />

      <div className="container mx-auto px-6 relative z-10">
        
        
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative w-44 h-44 md:w-56 md:h-56 mx-auto mb-10"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 animate-spin-slow opacity-70 blur-sm"></div>
          <img
            className="relative w-full h-full rounded-full object-cover border-4 border-slate-900 shadow-2xl"
            src={myPic}
            alt="Yash Shukla"
          />
        </motion.div>

      
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-indigo-400 font-mono font-bold tracking-[0.3em] uppercase text-sm mb-4"
          >
            Available for Internships
          </motion.h2>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-8xl font-black mb-6 tracking-tight"
          >
            Hi, I'm <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">Yash Shukla</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-2xl text-slate-400 font-medium leading-relaxed max-w-2xl mx-auto"
          >
            A <span className="text-white">Full Stack Developer</span> and 2nd Year BCA student focused on building high-performance, industry-ready web applications.
          </motion.p>

         
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col md:flex-row gap-5 justify-center mt-12"
          >
            <a 
              href="#projects" 
              className="px-10 py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold transition-all shadow-xl shadow-indigo-500/25 flex items-center justify-center gap-2 group"
            >
              View My Work
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
            </a>
            
            <a 
              href="#contact" 
              className="px-10 py-4 rounded-2xl border border-slate-700 bg-slate-900/50 hover:bg-slate-800 text-white font-bold transition-all backdrop-blur-sm"
            >
              Contact Me
            </a>
          </motion.div>
        </div>

      </div>

    
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-950 to-transparent"></div>
    </section>
  );
};

export default Home;