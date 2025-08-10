import React from 'react';
import { useParams, Link } from 'react-router-dom';

export default function RepoDetail({ repos }) {
  const { repoName } = useParams();
  const repo = repos.find(r => r.name === repoName);

  if (!repo) {
    return (
      <div>
        <h2>Repository not found</h2>
        <p>Could not find details for "{repoName}".</p>
        <Link to="/">Go back to the list</Link>
      </div>
    );
  }

  return (
    <div>
      <h2>{repo.name}</h2>
      <p>{repo.description || "No description provided."}</p>
      <p>
        <strong>Language:</strong> {repo.language || "N/A"}
      </p>
      <p>
        <strong>Stars:</strong> {repo.stargazers_count}
      </p>
      <p>
        <strong>Forks:</strong> {repo.forks_count}
      </p>
      <p>
        <strong>Open Issues:</strong> {repo.open_issues_count}
      </p>
      <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
        View on GitHub
      </a>
      <br />
      <br />
      <Link to="/">← Back to list</Link>
    </div>
  );
}