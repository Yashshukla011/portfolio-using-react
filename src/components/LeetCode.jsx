import { motion } from "framer-motion";
import React, { useEffect, useState } from 'react';
import { SiLeetcode } from "react-icons/si"; // Yeh icon hamesha dikhega

const LeetCodeCard = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const username = "yashshukla8796";

  // Backup data agar API fail ho jaye
  const fallbackData = {
    totalSolved: 135,
    easySolved: 50,
    mediumSolved: 70,
    hardSolved: 15,
    totalQuestions: 3300,
    ranking: 452103,
    acceptanceRate: 54.2
  };

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch(`https://leetcode-stats-api.herokuapp.com/${username}`);
        const result = await response.json();
        if (result.status === "success") {
          setData(result);
          localStorage.setItem('leetcode_cache', JSON.stringify(result));
        } else {
          throw new Error("User not found");
        }
      } catch (err) {
        const cached = localStorage.getItem('leetcode_cache');
        setData(cached ? JSON.parse(cached) : fallbackData);
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, []);

  if (loading) return (
    <div className="max-w-2xl mx-auto p-12 text-center text-slate-400 font-mono animate-pulse">
      SYNCING_LEETCODE_STATS...
    </div>
  );

  const solveRate = ((data.totalSolved / data.totalQuestions) * 100).toFixed(1);

  return (
    <div className="bg-slate-950 py-10 px-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto bg-slate-900/50 border border-slate-800 rounded-[2rem] p-8 shadow-2xl relative overflow-hidden"
      >
        {/* Glow Effect */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-30" />

        <div className="flex justify-between items-center mb-10">
          <div className="flex items-center gap-4">
            {/* Yahan Logo Fix hai */}
            <div className="w-14 h-14 bg-yellow-500/10 rounded-2xl flex items-center justify-center border border-yellow-500/20 shadow-lg">
              <SiLeetcode className="text-yellow-500 text-3xl" />
            </div>
            <div>
              <h3 className="text-white text-xl font-bold tracking-tight">LeetCode Profile</h3>
              <p className="text-slate-500 text-xs font-mono uppercase tracking-widest">Node: {username}</p>
            </div>
          </div>
          <div className="text-right">
             <span className="text-[10px] text-slate-500 font-bold uppercase block tracking-widest mb-1">Rank</span>
             <span className="text-white font-mono font-bold text-lg">#{data.ranking?.toLocaleString()}</span>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-4 mb-10">
          <Stat label="Easy" count={data.easySolved} color="text-emerald-400" />
          <Stat label="Med" count={data.mediumSolved} color="text-amber-400" />
          <Stat label="Hard" count={data.hardSolved} color="text-rose-500" />
        </div>

        {/* Progress Bar */}
        <div className="space-y-4">
          <div className="flex justify-between items-end text-xs font-mono">
            <span className="text-slate-400 uppercase tracking-widest">Solve Rate</span>
            <span className="text-white">{data.totalSolved} / {data.totalQuestions}</span>
          </div>
          <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: `${solveRate}%` }}
              transition={{ duration: 1.5 }}
              className="h-full bg-gradient-to-r from-yellow-500 to-orange-600"
            />
          </div>
          <div className="flex justify-between text-[10px] font-mono text-slate-600 uppercase tracking-widest pt-2">
            <span>Accuracy: {data.acceptanceRate}%</span>
            <span>Progress: {solveRate}%</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// Sub-component for individual stats
const Stat = ({ label, count, color }) => (
  <div className="bg-slate-950/50 border border-slate-800 p-4 rounded-2xl text-center hover:border-slate-700 transition-colors">
    <p className={`${color} text-[10px] font-black uppercase mb-1`}>{label}</p>
    <p className="text-white text-2xl font-bold font-mono">{count}</p>
  </div>
);

export default LeetCodeCard;