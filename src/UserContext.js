import React, { createContext, useState, useContext } from "react";

// Create context
const UserContext = createContext();

// Create provider component
export function UserProvider({ children }) {
  const [userName, setUserName] = useState("");

  return (
    <UserContext.Provider value={{ userName, setUserName }}>
      {children}
    </UserContext.Provider>
  );
}

// Create custom hook
export function useUser() {
  return useContext(UserContext);
}
