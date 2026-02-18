import React from "react";
import { motion } from "framer-motion";
import myResume from "../assets/resume.pdf";

const skills = [
  { name: "React.js", level: "90%", icon: "⚛️" },
  { name: "Node.js & Express", level: "75%", icon: "🚀" },
  { name: "JavaScript (ES6+)", level: "85%", icon: "📜" },
  { name: "Data Structures", level: "80%", icon: "🧠" },
  { name: "Tailwind CSS", level: "95%", icon: "🎨" },
  { name: "MongoDB / SQL", level: "70%", icon: "💾" },
];

const About = () => {
  return (
    <section id="about" className="py-32 px-6 md:px-20 bg-slate-950 text-white relative overflow-hidden">
      {/* Background Decorative Blobs */}
      <div className="absolute top-0 -left-20 w-96 h-96 bg-indigo-600/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 -right-20 w-96 h-96 bg-purple-600/10 blur-[120px] rounded-full" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          className="flex flex-col items-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tight">
           About <span className="text-indigo-500">Me.</span>
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Side: Bio Card */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.6 }}
            className="bg-slate-900/40 backdrop-blur-md border border-slate-800 p-8 md:p-10 rounded-[2.5rem] shadow-2xl"
          >
            <h3 className="text-2xl font-bold mb-6 text-white">Who is Yash?</h3>
            <div className="space-y-5 text-slate-400 text-lg font-light leading-relaxed">
              <p>
                Currently a <span className="text-white font-semibold">2nd-year BCA student</span>, I am deeply invested in the art of 
                <span className="text-indigo-400 font-semibold"> Full Stack Development</span>. I don't just write code; I build digital experiences.
              </p>
              <p>
                My strength lies in my ability to handle both the <span className="text-white font-medium">Creative Frontend</span> and the 
                <span className="text-white font-medium"> Logical Backend</span>. With a strong grip on <span className="text-indigo-400">DSA</span>, I focus on writing code that is not just functional, but highly optimized.
              </p>
              <p className="text-sm italic text-slate-500 pt-4">
                "Turning complex problems into elegant, user-centric solutions."
              </p>
            </div>

            <div className="pt-10">
              <motion.a 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={myResume} 
                download 
                className="inline-flex items-center gap-4 px-10 py-4 rounded-2xl bg-indigo-600 text-white font-bold hover:bg-indigo-500 transition-all shadow-[0_10px_30px_-10px_rgba(79,70,229,0.5)]"
              >
                <span>Grab My Resume</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                </svg>
              </motion.a>
            </div>
          </motion.div>

          {/* Right Side: Skills Matrix */}
          <div className="grid gap-5">
            <h3 className="text-xl font-bold mb-4 px-2 flex items-center gap-3">
               <span className="w-8 h-[2px] bg-indigo-500"></span>
               Technical Arsenal
            </h3>
            {skills.map((skill, index) => (
              <motion.div 
                key={skill.name} 
                initial={{ opacity: 0, x: 40 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-slate-900/20 border border-slate-800/50 p-5 rounded-2xl hover:border-indigo-500/50 hover:bg-slate-900/40 transition-all group"
              >
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl group-hover:scale-125 transition-transform duration-300">{skill.icon}</span>
                    <span className="text-sm font-bold tracking-wide text-slate-200 uppercase">{skill.name}</span>
                  </div>
                  <span className="text-xs font-mono text-indigo-400">{skill.level}</span>
                </div>
                {/* Progress Bar Container */}
                <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }} 
                    whileInView={{ width: skill.level }} 
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="h-full bg-gradient-to-r from-indigo-600 to-indigo-400 rounded-full" 
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;