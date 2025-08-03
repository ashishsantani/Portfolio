import React from "react";
import { Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./routes/home";
import About from "./routes/about";
import Contact from "./routes/contact";
import Project from "./routes/projects";
import ScrollToTop from "./components/ScrollToTop";
import CustomCursor from "./components/common/CustomCursor";
import "./index.css";

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
          <CustomCursor />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
