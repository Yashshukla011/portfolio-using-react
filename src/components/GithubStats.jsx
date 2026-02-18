import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const GithubStats = () => {
  const [stats, setStats] = useState(null);
  const username = "Yashshukla011";

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then((data) => setStats(data))
      .catch((err) => console.error("GitHub API Error:", err));
  }, []);

  if (!stats) return (
    <div className="bg-slate-950 text-indigo-400 text-center py-20 font-mono animate-pulse">
      Fetching Real-time Metrics...
    </div>
  );

  const statCards = [
    { label: "Open Source Projects", value: stats.public_repos, icon: "📂" },
    { label: "Global Network", value: stats.followers, icon: "👥" },
    { label: "Operating Base", value: stats.location || "Remote / India", icon: "📍" }
  ];

  return (
    <section className="py-32 bg-slate-950 text-white relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-4 uppercase tracking-tighter">
            GitHub <span className="text-indigo-500">Impact</span>
          </h2>
          <p className="text-slate-400 font-medium tracking-widest text-xs uppercase">Live Developer Metrics</p>
        </motion.div>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {statCards.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-slate-900/40 backdrop-blur-xl border border-slate-800 p-10 rounded-[2rem] text-center hover:border-indigo-500/50 transition-all shadow-2xl group"
            >
              <span className="text-3xl mb-4 block group-hover:scale-125 transition-transform">{item.icon}</span>
              <p className="text-slate-500 text-xs uppercase tracking-widest font-bold mb-2">{item.label}</p>
              <p className="text-5xl font-black text-white group-hover:text-indigo-400 transition-colors">
                {item.value || 0}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Contribution Graph */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center bg-slate-900/20 border border-slate-800/50 p-8 md:p-12 rounded-[3rem] shadow-3xl"
        >
          <h3 className="mb-10 text-xl font-bold text-slate-300 flex items-center gap-3 uppercase tracking-widest">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-ping"></span>
            Contribution Pipeline
          </h3>
          
          <div className="w-full overflow-hidden flex justify-center">
            <img 
              src={`https://ghchart.rshah.org/6366f1/${username}`} 
              alt="GitHub Contribution Heatmap"
              className="w-full max-w-5xl rounded-lg brightness-125 contrast-125 filter grayscale-[20%] hover:grayscale-0 transition-all duration-700"
            />
          </div>
          
          <div className="mt-10 flex gap-8 text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">
            <span className="flex items-center gap-2"><span className="w-3 h-3 bg-slate-800 rounded-sm"></span> Less</span>
            <span className="flex items-center gap-2">More <span className="w-3 h-3 bg-indigo-600 rounded-sm"></span></span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GithubStats;