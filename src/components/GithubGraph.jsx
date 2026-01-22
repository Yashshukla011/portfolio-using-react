const GithubGraph = () => {
  return (
    <div className="mt-10 flex flex-col items-center">
      <h3 className="text-xl font-semibold text-white mb-4">Contribution Activity</h3>
<img 
  src={`https://github-readme-stats.vercel.app/api?username=Yashshukla011&show_icons=true&theme=tokyonight`} 
  alt="GitHub Stats Card" 
  className="w-full max-w-lg mx-auto rounded-lg shadow-2xl"
  onError={(e) => {
    e.target.src = "https://via.placeholder.com/400x200?text=GitHub+Stats+Loading...";
  }}
/>
      <p className="text-gray-500 text-xs mt-2 italic">Real-time data fetched from GitHub</p>
    </div>
  );
};
export default GithubGraph