import React from 'react';
import { motion } from 'framer-motion';

const projectData = [
  { 
    id: 1, 
    title: 'E-commerce Platform', 
    description: 'A full-scale digital marketplace featuring secure user authentication, product management, and an integrated payment gateway for seamless transactions.', 
    tech: ['JavaScript', 'API Integration', 'CSS3', 'HTML5'], 
    link: 'https://e-commerse-first.vercel.app/' 
  },
  { 
    id: 2, 
    title: 'Quiz Battle Engine', 
    description: 'A competitive real-time gaming application built with React, featuring dynamic question fetching, state-managed scoring, and synchronized countdown timers.', 
    tech: ['React.js', 'Tailwind CSS', 'Framer Motion'], 
    link: 'https://quizegame-cyan.vercel.app/' 
  },
  { 
    id: 3, 
    title: 'Precision Weather App', 
    description: 'A data-driven forecast application utilizing REST APIs to deliver real-time meteorological updates with a sleek, responsive glassmorphism UI.', 
    tech: ['React.js', 'Context API', 'Tailwind CSS'], 
    link: 'https://weather-app-using-react-alpha-one.vercel.app/' 
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-32 px-6 md:px-20 bg-slate-950 text-white relative">
      {/* Background glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-4 uppercase tracking-tighter">
            Featured <span className="text-indigo-500">Projects</span>
          </h2>
          <div className="h-1.5 w-24 bg-indigo-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -12 }}
              className="group relative bg-slate-900/40 backdrop-blur-xl border border-slate-800 rounded-[2.5rem] p-8 transition-all duration-500 hover:border-indigo-500/50 hover:bg-slate-900/60 shadow-2xl overflow-hidden"
            >
              {/* Decorative numbering */}
              <span className="absolute -top-4 -right-2 text-9xl font-black text-white/5 pointer-events-none group-hover:text-indigo-500/10 transition-colors">
                0{project.id}
              </span>

              <h3 className="text-2xl font-extrabold text-white mb-4 group-hover:text-indigo-400 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-slate-400 mb-8 line-clamp-3 text-sm leading-relaxed font-light">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map(tech => (
                  <span 
                    key={tech} 
                    className="text-[10px] uppercase tracking-widest font-bold bg-slate-800 text-indigo-300 border border-slate-700 px-3 py-1 rounded-lg group-hover:border-indigo-500/30 group-hover:bg-indigo-500/5 transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-800/50">
                <a 
                  href={project.link} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-bold text-sm uppercase tracking-widest group/link"
                >
                  Live Demo 
                  <svg 
                    className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;