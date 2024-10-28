import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ThemeProvider from "./providers/ThemeProvider.jsx";
import MainLayout from "./layouts/MainLayout.jsx";
import Home from "./pages/Home.jsx";
import Heroes from "./pages/Heroes.jsx";
import HeroDetail from "./pages/HeroDetail.jsx";
import About from "./pages/About.jsx";

const App = () => (
  <ThemeProvider>
    {(darkMode, setDarkMode) => (
      <Router>
        <MainLayout darkMode={darkMode} setDarkMode={setDarkMode}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/heroes" element={<Heroes />} />
            <Route path="/heroes/:id" element={<HeroDetail />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </MainLayout>
      </Router>
    )}
  </ThemeProvider>
);

export default App;
