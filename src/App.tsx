import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./Pages/Home.jsx";
import ProjectDetails from "./components/ProjectDetails";
import ScrollToTop from "./components/ScrollToTop.js";

function App() {
  return (
    <div className="min-h-screen">
      <ScrollToTop />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
