import React from 'react';
import { motion } from 'framer-motion';

const GithubGraph = () => {
  const username = "Yashshukla011";
  // Theme selection: tokyonight, radical, midnight-purple, or dark
  const theme = "tokyonight"; 

  return (
    <div className="mt-20 flex flex-col items-center px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 uppercase tracking-tight">
          Coding <span className="text-indigo-400">Velocity</span>
        </h3>
        <div className="h-1 w-12 bg-indigo-500 mx-auto rounded-full"></div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-6xl">
        
        {/* Main Stats Card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
          className="relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          <div className="relative bg-slate-900 rounded-xl overflow-hidden shadow-2xl border border-slate-800">
            <img 
              src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=${theme}&hide_border=true&bg_color=0f172a&title_color=818cf8&icon_color=818cf8&text_color=94a3b8`} 
              alt="GitHub Overall Stats" 
              className="w-full h-auto"
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/400x200?text=Stats+Currently+Unavailable";
              }}
            />
          </div>
        </motion.div>

        {/* Top Languages Card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
          className="relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-indigo-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          <div className="relative bg-slate-900 rounded-xl overflow-hidden shadow-2xl border border-slate-800">
            <img 
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=${theme}&hide_border=true&bg_color=0f172a&title_color=818cf8&text_color=94a3b8`} 
              alt="Top Languages" 
              className="w-full h-auto"
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/400x200?text=Languages+Currently+Unavailable";
              }}
            />
          </div>
        </motion.div>

      </div>

      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-slate-500 text-xs mt-8 italic font-mono tracking-widest uppercase"
      >
        // Live data stream synced with GitHub API
      </motion.p>
    </div>
  );
};

export default GithubGraph;