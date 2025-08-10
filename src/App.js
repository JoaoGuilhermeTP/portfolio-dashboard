import { useEffect, useState } from "react";
import Repos from "./Repos.js";
import InputSearchBox from "./InputSearchBox.js";
import "./App.css";

function App() {
  const [repos, setRepos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [userName, setUserName] = useState("JoaoGuilhermeTP");
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`https://api.github.com/users/${userName}/repos`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setRepos(data);
      })
      .catch((err) => {
        console.error(err);
        setError(err);
        setRepos([]);
      });
  }, [userName]);

  return (
    <div className="app-container">
      <h1>My GitHub Portfolio</h1>
      <div className="section">
        <h2>Search by Username</h2>
        <InputSearchBox value={userName} instantanious={false} onChange={setUserName} />
      </div>
      <div className="section">
        <InputSearchBox value={searchTerm} instantanious={true} onChange={setSearchTerm} />
      </div>
      <div className="section">
        <Repos repos={repos} searchTerm={searchTerm} />
      </div>
    </div>
  );
}

export default App;
