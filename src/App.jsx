import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import FindMe from "./components/FindMe";
function App() {
  return (
    <div className="app">
      <Navbar />
      <Home />
      <Projects />
      <Skills />
      <FindMe />
    </div>
  );
}

export default App;
