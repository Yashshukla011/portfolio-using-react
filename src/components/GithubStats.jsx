import React, { useEffect, useState } from 'react';
import GithubGraph from './GithubGraph';
const GithubStats = () => {
  const [stats, setStats] = useState(null);
  const username = "Yashshukla011";

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then(res => res.json())
      .then(data => {
        console.log("GitHub Data:", data); 
        setStats(data);
      })
      .catch(err => console.error(err));
  }, []);

  if (!stats) return <div className="text-white text-center py-10">Loading...</div>;

  return (
    <div className=" bg-gradient-to-b from-slate-950 to-slate-950 text-white p-8 rounded-2xl border border-white/10">
      <h2 className="text-3xl font-bold text-center mb-10">Live GitHub Impact</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-[#111827] p-6 rounded-xl border border-purple-500/20 text-center">
          <p className="text-gray-400">Public Projects</p>
          <p className="text-4xl font-bold mt-2">{stats.public_repos || 0}</p>
        </div>
        
        <div className="bg-[#111827] p-6 rounded-xl border border-purple-500/20 text-center">
          <p className="text-gray-400">Followers</p>
          <p className="text-4xl font-bold mt-2">{stats.followers || 0}</p>
        </div>

        <div className="bg-[#111827] p-6 rounded-xl border border-purple-500/20 text-center">
          <p className="text-gray-400">Location</p>
          <p className="text-xl font-bold mt-2">{stats.location || "Earth"}</p>
        </div>
      </div>
  <GithubGraph />
      <div className="flex flex-col items-center">
        <h3 className="mb-4 text-lg font-medium">Contribution Activity</h3>
        <img 
          src={`https://ghchart.rshah.org/8b5cf6/${username}`} 
          alt="Contribution Graph"
          className="w-full max-w-3xl invert dark:invert-0"
          onError={(e) => e.target.style.display='none'} 
        />
      </div>
    </div>
  );
};

export default GithubStats;