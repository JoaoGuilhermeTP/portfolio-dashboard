import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom"; // Import Routes and Route
import Home from "./Home.js";
import RepoDetail from "./RepoDetail.js"; // Import the new component
import useGitHubRepos from "./useGitHubRepos.js";
import styles from "./App.module.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [userName, setUserName] = useState("");

  const {repos, error, isLoading} = useGitHubRepos(userName);

  return (
    <div className={styles["app-container"]}>
      <h1>GitHub Repositories Dashboard</h1>
      {error && <p className={styles.error}>Error: {error}</p>}
      <Routes>
        <Route
          path="/"
          element={
            <Home
              userName={userName}
              setUserName={setUserName}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              isLoading={isLoading}
              repos={repos}
            />
          }
        />
        <Route path="/repo/:repoName" element={<RepoDetail repos={repos} />} />
      </Routes>
    </div>
  );
}

export default App;
