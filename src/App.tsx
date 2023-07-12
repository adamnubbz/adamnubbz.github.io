import React from "react";
import "./scss/index.scss";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Background from "./components/Background";
import Navbar from "./sections/Navbar";
import Footer from "./sections/Footer";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Code from "./pages/Code";
//import "./Carousel";

function App() {
  return (
    <div className="main-container">
      <Background />
      <BrowserRouter>
        <div className="app">
          <Navbar />
          <Routes>
            <Route element={<About />} path="/about" />
            <Route element={<Code />} path="/code" />
            <Route element={<Projects />} path="/projects" />
            <Route element={<Navigate to="/about" />} path="*" />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
