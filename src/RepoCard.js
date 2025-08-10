import styles from "./RepoCard.module.css"; // Add this import
import { Link } from "react-router-dom";

export default function RepoCard({ repo }) {
  return (
    <div className={styles["repo-card"]}>
      {" "}
      {/* Changed this line */}
      <Link to={`repo/${repo.name}`}>
        <h2>{repo.name}</h2>
      </Link>
      <p>{repo.description || "No description"}</p>
      <p className={styles["repo-details"]}>
        {" "}
        {/* Changed this line */}
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
}
