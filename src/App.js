import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom"; // Import Routes and Route
import Home from "./Home.js";
import RepoDetail from "./RepoDetail.js"; // Import the new component
import styles from "./App.module.css";
import useRepoStore from "./store";

function App() {
  const {userName, repos, error, isLoading, fetchRepos} = useRepoStore();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchRepos(userName);
  }, [userName, fetchRepos])

  return (
    <div className={styles["app-container"]}>
      <h1>GitHub Repositories Dashboard</h1>
      {error && <p className={styles.error}>Error: {error}</p>}
      <Routes>
        <Route path="/" element={<Home searchTerm={searchTerm} setSearchTerm={setSearchTerm} isLoading={isLoading} repos={repos}/>}/>
        <Route path="/repo/:repoName" element={<RepoDetail />} />
      </Routes>
    </div>
  );
}

export default App;
