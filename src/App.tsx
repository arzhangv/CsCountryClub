import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Mission from "./pages/Mission";
import Apply from "./pages/Apply";
import About from "./pages/About";
import './pages/navbar.css';
import logo from './public/cscountryclublogo.png';
const App: React.FC =()=> {
  return (
      <Router>
          <div className="navbar">
              <nav>
                  <ul>
                      <li>
                        <Link  to="/" style={{ display: 'flex', alignItems: 'center' }} >
                            Home
                        </Link>
                      </li>
                      <li>
                          <Link to="/mission" >Mission</Link>
                      </li>
                      <li>
                          <Link to="https://forms.gle/muPbbAdfpiHLmDF96">
                            Apply
                          </Link>
                      </li>
                      <li>
                          <Link to="/about">About</Link>
                      </li>
                  </ul>
              </nav>
        </div>

      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/mission" element={<Mission/>} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/about" element={<About />} />
      </Routes>
      </Router>
  );
}

export default App;
