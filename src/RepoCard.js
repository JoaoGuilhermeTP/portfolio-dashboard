export default function RepoCard({ repo }) {
  return (
    <div className="repo-card">
      <h2>{repo.name}</h2>
      <p>{repo.description || "No description"}</p>
      <p className="repo-details">
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
