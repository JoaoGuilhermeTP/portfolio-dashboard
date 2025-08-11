import { create } from 'zustand';

// Define the store's initial state and actions.
const useRepoStore = create((set) => ({
  
  // --- STATE - These are the pieces of data our app will track. ---
  repos: [],
  isLoading: false,
  error: null,
  userName: "",

  // --- ACTIONS - These are functions that can change the state. ---
  setUserName: (newUserName) => set({ userName: newUserName }),
  fetchRepos: async (userName) => {
    if (!userName) return;
    set({ isLoading: true, error: null });
    try {
      const res = await fetch(`https://api.github.com/users/${userName}/repos`);
      const data = await res.json();
      if (data.message) {
        throw new Error(data.message);
      }
      set({ repos: data, isLoading: false });
    } catch (err) {
      set({ error: err.message, isLoading: false, repos: [] });
    }
  },
}));

export default useRepoStore;