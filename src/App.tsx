import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import About from "./pages/About/About";
import Apply from "./pages/Apply/Apply";
import Home from "./pages/Home/Home";
import Mission from "./pages/Mission/Mission";

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
