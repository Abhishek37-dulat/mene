import React, { useState } from "react";
import { FiSun } from "react-icons/fi";
import { BsMoon } from "react-icons/bs";

const ThemeChanger = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    document.body.classList.toggle("dark-theme");
  };

  return (
    <button onClick={toggleTheme} className="theme-toggle-button">
      {isDarkTheme ? <FiSun /> : <BsMoon />}
    </button>
  );
};

export default ThemeChanger;
