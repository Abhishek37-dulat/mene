import React, { useState } from "react";
import { FiSun } from "react-icons/fi";
import { BsMoon } from "react-icons/bs";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { IconButton } from "rsuite";
import { Box, styled } from "@mui/material";

const BoxTheme = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const ThemeChanger = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    document.body.classList.toggle("dark-theme");
  };

  return (
    <BoxTheme onClick={toggleTheme} className="theme-toggle-button">
      {isDarkTheme ? <LightModeIcon /> : <DarkModeIcon />}
    </BoxTheme>
  );
};

export default ThemeChanger;
