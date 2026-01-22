const GITHUB_USERNAME = "Yashshukla011";

export const getGithubStats = async () => {
  const CACHE_KEY = "gh_stats_cache";
  const CACHE_DURATION = 3600000;

  const cachedData = localStorage.getItem(CACHE_KEY);
  const now = new Date().getTime();

  if (cachedData) {
    const { data, timestamp } = JSON.parse(cachedData);
    if (now - timestamp < CACHE_DURATION) {
      return data;
    }
  }


  try {
    const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`);
    const data = await response.json();
    
    const cacheObject = { data, timestamp: now };
    localStorage.setItem(CACHE_KEY, JSON.stringify(cacheObject));
    
    return data;
  } catch (error) {
    console.error("Error fetching GitHub stats:", error);
    return null;
  }
};