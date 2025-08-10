import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom"; // Import Routes and Route
import Home from "./Home.js";
import Repos from "./Repos.js";
import InputSearchBox from "./InputSearchBox.js";
import RepoDetail from "./RepoDetail.js"; // Import the new component
import styles from "./App.module.css";

function App() {
  const [repos, setRepos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [userName, setUserName] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://api.github.com/users/${userName}/repos`)
      .then((res) => res.json())
      .then((data) => {
        setRepos(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(err);
        setRepos([]);
        setIsLoading(false);
      });
  }, [userName]);

  return (
    <div className={styles["app-container"]}>
      <h1>GitHub Repositories Dashboard</h1>
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
