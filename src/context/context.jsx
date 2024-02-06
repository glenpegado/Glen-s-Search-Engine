import { createContext, useContext, useEffect, useState } from 'react';

const AppContext = createContext();

// Helper FUNCTION
const getInitialDarkMode = () => {
  const prefersDarkMode = window.matchMedia(
    '(prefers-color-scheme:dark)'
  ).matches;

  //Local Storage
  const storedDarkMode = localStorage.getItem('darkTheme'); // string -> 'true' or 'false'
  if (storedDarkMode === null) return prefersDarkMode;
  return storedDarkMode === 'true';
};

export function AppProvider({ children }) {
  // useState
  const [isDarkMode, setIsDarkMode] = useState(getInitialDarkMode());
  const [search, setSearch] = useState('messi');

  //FUNCTION toggleDarkMode
  const toggleDarkMode = () => {
    let newDarkMode = !isDarkMode; //true
    setIsDarkMode(newDarkMode);

    //Local Storage
    localStorage.setItem('darkTheme', newDarkMode);
  };

  //useEffect
  useEffect(() => {
    let body = document.querySelector('body');
    body.classList.toggle('dark-theme', isDarkMode);
  }, [isDarkMode]);

  // RETURN
  return (
    <AppContext.Provider
      value={{ isDarkMode, toggleDarkMode, search, setSearch }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useGlobalContext = () => useContext(AppContext);
