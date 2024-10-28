import React from "react";
import NavBar from "../components/NavBar.jsx";
import ThemeToggle from "../components/ThemeToggle.jsx";
import { Box } from "@mui/material";

const MainLayout = ({ children, darkMode, setDarkMode }) => (
  <Box sx={{ display: "flex" }}>
    <NavBar />
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      {children}
    </Box>
  </Box>
);

export default MainLayout;
