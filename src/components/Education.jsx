import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "JIMS, Rohini Sector-3, Delhi",
      duration: "2024 – Present",
      description: "Currently in 2nd Year. Specializing in Data Structures, Object-Oriented Programming, Database Management Systems, and modern Full Stack Web Development.",
      icon: "🎓"
    },
    {
      degree: "Higher Secondary (12th Grade)",
      institution: "Seva Mandir Inter College, Kanpur, UP",
      duration: "2022 – 2024",
      description: "Successfully completed with a core focus on Mathematics and Computer Science, building a strong analytical foundation.",
      icon: "🏫"
    }
  ];

  return (
    <section
      id="education"
      className="py-32 px-6 md:px-20 bg-slate-950 text-white relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/5 blur-[100px] rounded-full"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-4 uppercase tracking-tighter">
            Academic <span className="text-indigo-500">Journey</span>
          </h2>
          <div className="h-1.5 w-24 bg-indigo-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="group relative bg-slate-900/40 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 transition-all duration-500 hover:border-indigo-500/50 hover:bg-slate-900/60 shadow-2xl"
            >
              {/* Floating Icon */}
              <div className="flex justify-between items-start mb-6">
                <div className="p-4 bg-indigo-500/10 rounded-2xl text-3xl group-hover:scale-110 transition-transform duration-300">
                  {edu.icon}
                </div>
                <span className="px-4 py-1.5 text-xs font-bold uppercase tracking-widest rounded-full bg-slate-800 text-indigo-400 border border-slate-700 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                  {edu.duration}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                {edu.degree}
              </h3>
              
              <p className="text-indigo-300/80 font-medium mt-2 flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                {edu.institution}
              </p>

              <p className="mt-6 text-slate-400 leading-relaxed text-base font-light">
                {edu.description}
              </p>

              {/* Decorative accent */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-indigo-500 transition-all duration-500 group-hover:w-full rounded-b-3xl"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;