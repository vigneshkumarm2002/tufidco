import React from "react";
import {HashRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./comps/layout";
import Signin from "./comps/signin";

function App() {
  return (
  <Router>
    <Layout />
  </Router>
  );
}

export default App;
