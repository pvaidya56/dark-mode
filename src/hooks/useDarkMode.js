import React from 'react'
import {useLocalStorage} from './useLocalStorage';

const useDarkMode = (bool) => {
    const [mode, setMode] = useLocalStorage("darkMode", bool);
  
    React.useEffect(() => {
      window.localStorage.getItem("darkMode") === "true"
        ? document.querySelector("body").classList.add("dark-mode")
        : document.querySelector("body").classList.remove("dark-mode");
    }, [mode]);
  
    return [mode, setMode];
  };
  
  export default useDarkMode;