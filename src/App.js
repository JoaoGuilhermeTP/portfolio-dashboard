import { useEffect, useState } from "react";
import Repos from "./Repos.js";
import InputSearchBox from "./InputSearchBox.js";
import "./App.css";

function App() {
  const [repos, setRepos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("https://api.github.com/users/JoaoGuilhermeTP/repos")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setRepos(data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="app-container">
      <h1>My GitHub Portfolio</h1>
      <InputSearchBox searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <div>
        <Repos repos={repos} searchTerm={searchTerm} />
      </div>
    </div>
  );
}

export default App;
