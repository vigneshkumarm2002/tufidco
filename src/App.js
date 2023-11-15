import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Signin from "./comps/signin";
import Home from "./comps/Home";
import Vendor from "./comps/VendorMaster";
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Signin />} />
        <Route path="/navs" element={<Vendor />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
