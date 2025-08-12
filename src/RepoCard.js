import React from 'react'; // 1. Import React
import { Link } from 'react-router-dom';
import styles from "./RepoCard.module.css";

// 2. Wrap the entire component definition in React.memo()
const RepoCard = React.memo(function RepoCard({ repo }) {
  console.log(`Rendering RepoCard for: ${repo.name}`);

  return (
    <div className={styles["repo-card"]}>
      <Link to={`/repo/${repo.name}`}>
        <h2>{repo.name}</h2>
      </Link>
      <p>{repo.description || "No description"}</p>
      <p className={styles["repo-details"]}>
        <strong>Language:</strong> {repo.language || "N/A"} &nbsp;|&nbsp;{" "}
        <strong>⭐ Stars:</strong> {repo.stargazers_count} &nbsp;|&nbsp;{" "}
        <strong>Updated:</strong>{" "}
        {new Date(repo.updated_at).toLocaleDateString()}
      </p>
      <a href={repo.html_url} target="_blank" rel="noreferrer">
        View on GitHub
      </a>
    </div>
  );
});

export default RepoCard;