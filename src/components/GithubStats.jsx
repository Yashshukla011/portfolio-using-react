import React, { useEffect, useState } from 'react';

const GithubStats = () => {
  const [stats, setStats] = useState(null);
  const username = "Yashshukla011";

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then((data) => setStats(data))
      .catch((err) => console.log(err));
  }, []);

  if (!stats) return <div className="text-white text-center py-10">Loading Stats...</div>;

  return (
    <section className="py-12 bg-gradient-to-b from-slate-950 to-slate-950 text-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Live GitHub Impact</h2>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-[#111827] p-8 rounded-2xl border border-purple-500/20 text-center hover:border-purple-500 transition-all shadow-lg">
            <p className="text-gray-400 text-sm uppercase tracking-widest font-semibold">Public Projects</p>
            <p className="text-5xl font-extrabold mt-3 text-purple-500">{stats.public_repos || 0}</p>
          </div>
          
          <div className="bg-[#111827] p-8 rounded-2xl border border-purple-500/20 text-center hover:border-purple-500 transition-all shadow-lg">
            <p className="text-gray-400 text-sm uppercase tracking-widest font-semibold">Followers</p>
            <p className="text-5xl font-extrabold mt-3 text-purple-500">{stats.followers || 0}</p>
          </div>

          <div className="bg-[#111827] p-8 rounded-2xl border border-purple-500/20 text-center hover:border-purple-500 transition-all shadow-lg">
            <p className="text-gray-400 text-sm uppercase tracking-widest font-semibold">Location</p>
            <p className="text-2xl font-bold mt-3">{stats.location || "Earth"}</p>
          </div>
        </div>

        {/* Contribution Graph - Cleaned up (No error box) */}
        <div className="flex flex-col items-center bg-[#111827] p-8 rounded-2xl border border-white/5 shadow-2xl">
          <h3 className="mb-6 text-xl font-medium text-gray-300 tracking-wide">Contribution Activity</h3>
          <img 
            src={`https://ghchart.rshah.org/8b5cf6/${username}`} 
            alt="GitHub Chart"
            className="w-full max-w-4xl rounded-md brightness-110"
          />
          <p className="text-gray-500 text-xs mt-6 italic">Real-time contribution data synced with GitHub</p>
        </div>
      </div>
    </section>
  );
};

export default GithubStats;