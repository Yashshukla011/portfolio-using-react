import { motion } from "framer-motion";
import React, { useEffect, useState } from 'react';

const LeetCodeCard = () => {
  const [data, setData] = useState(null);
  const username = "yashshukla8796";

  useEffect(() => {
    fetch(`https://leetcode-stats-api.herokuapp.com/${username}`)
      .then(res => res.json())
      .then(res => setData(res))
      .catch(err => console.error(err));
  }, []);

  if (!data || data.status === "error") return null;

  return (
    <div className='bg-gradient-to-b from-slate-950 to-slate-950 relative bg-slate-950 overflow-hidden '>
    <div className="mt-12 p-8 bg-gradient-to-b from-slate-950 to-slate-950 rounded-3xl border border-yellow-500/10 shadow-2xl max-w-3xl mx-auto text-white">
      <div className="flex items-center gap-5 mb-8">
        
        <img 
    src="https://raw.githubusercontent.com/LeetCode-OpenSource/leetcode-assets/master/LeetCode_logo_rv.png" 
    alt="LeetCode" 
    className="w-12 h-12 object-contain"
    onError={(e) => {

      e.target.src = "https://cdn.iconscout.com/icon/free/png-256/free-leetcode-3521542-2944960.png";
    }}
  />
        <div>
          <h3 className="text-2xl font-bold tracking-tight">Coding Proficiency</h3>
          <p className="text-gray-400 text-sm italic">LeetCode Stats</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 text-center mb-10">
        <div className="p-5 bg-[#1f2937] rounded-2xl border border-green-500/20 hover:border-green-500/50 transition-all">
          <p className="text-green-400 text-xs font-bold uppercase tracking-widest">Easy</p>
          <p className="text-4xl font-black mt-1">{data.easySolved}</p>
        </div>
        <div className="p-5 bg-[#1f2937] rounded-2xl border border-yellow-500/20 hover:border-yellow-500/50 transition-all">
          <p className="text-yellow-400 text-xs font-bold uppercase tracking-widest">Medium</p>
          <p className="text-4xl font-black mt-1">{data.mediumSolved}</p>
        </div>
        <div className="p-5 bg-[#1f2937] rounded-2xl border border-red-500/20 hover:border-red-500/50 transition-all">
          <p className="text-red-400 text-xs font-bold uppercase tracking-widest">Hard</p>
          <p className="text-4xl font-black mt-1">{data.hardSolved}</p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-end">
          <div className="flex flex-col">
            <span className="text-gray-400 text-xs uppercase font-bold">Total Solved</span>
            <span className="text-2xl font-bold text-white leading-none">{data.totalSolved}</span>
          </div>
          <div className="text-right">
            <span className="text-yellow-500 font-bold text-xs uppercase tracking-widest block">Global Rank</span>
            <span className="text-lg font-bold text-white">{data.ranking.toLocaleString()}</span>
          </div>
        </div>
        
     
        <div className="w-full bg-gray-800 rounded-full h-4 p-1 shadow-inner">
          <div 
            className="bg-gradient-to-r from-yellow-500 to-orange-600 h-2 rounded-full shadow-[0_0_15px_rgba(234,179,8,0.4)] transition-all duration-1000 ease-out" 
            style={{ width: `${(data.totalSolved / data.totalQuestions) * 100}%` }}
          ></div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default LeetCodeCard;