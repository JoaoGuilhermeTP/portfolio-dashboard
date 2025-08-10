import { useEffect, useState } from "react";
import Repos from "./Repos.js";
import InputSearchBox from "./InputSearchBox.js";
import styles from "./App.module.css";

function App() {
  const [repos, setRepos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [userName, setUserName] = useState("JoaoGuilhermeTP");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://api.github.com/users/${userName}/repos`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
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
      <h1>My GitHub Portfolio</h1>
      <div className={styles.section}>
        <h2>Search by Username</h2>
        <InputSearchBox
          value={userName}
          instantanious={false}
          onChange={setUserName}
        />
      </div>
      <div className={styles.section}>
        <InputSearchBox
          value={searchTerm}
          instantanious={true}
          onChange={setSearchTerm}
        />
      </div>
      <div className={styles.section}>
        {isLoading ? ( <p>Loading...</p>) : (<Repos repos={repos} searchTerm={searchTerm} />)}
      </div>
    </div>
  );
}

export default App;
