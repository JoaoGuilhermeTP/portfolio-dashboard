import { useState, useEffect } from "react";

// Custom hook to fetch GitHub repositories
export default function useGitHubRepos(userName) {
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // If there's no username, don't do anything
    if (!userName) {
      return;
    }
    setIsLoading(true);
    setRepos([]);
    setError(null);
    fetch(`https://api.github.com/users/${userName}/repos`)
      .then((res) => res.json())
      .then((data) => {
        // The GitHub API returns a `message` property on error
        if (data.message) {
          throw new Error(data.message);
        }
        setRepos(data)
        setIsLoading(false)
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
        setIsLoading(false)
      })
  }, [userName])

  return {repos, error, isLoading}
}