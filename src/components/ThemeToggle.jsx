import React from "react";
import { Switch, FormControlLabel } from "@mui/material";

const ThemeToggle = ({ darkMode, setDarkMode }) => (
  <FormControlLabel
    control={
      <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
    }
    label="Toggle Theme"
  />
);

export default ThemeToggle;
