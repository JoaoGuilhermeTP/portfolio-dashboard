import React from "react";
import InputSearchBox from "./InputSearchBox.js";
import Repos from "./Repos.js";
import styles from "./Home.module.css";
import { useUser } from "./UserContext";

export default function Home({searchTerm,setSearchTerm,isLoading,repos}) {
  const {userName, setUserName} = useUser();
  
  return (
    <>
      <div className={styles.section}>
        <h2>Search by Username</h2>
        <InputSearchBox
          value={userName}
          placeholder={"Type the username and click \"Search\""}
          instantanious={false}
          onChange={setUserName}
        />
      </div>
      <div className={styles.section}>
        <InputSearchBox
          value={searchTerm}
          instantanious={true}
          placeholder={"Filter by reopository name"}
          onChange={setSearchTerm}
        />
      </div>
      <div className={styles.section}>
        {isLoading ? (
          <p className={styles.loading}>Loading...</p>
        ) : (
          <Repos repos={repos} searchTerm={searchTerm} />
        )}
      </div>
    </>
  );
}
