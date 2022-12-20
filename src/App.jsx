import { useState } from "react";
import "./App.css";
// import './HeroSection.css'
// import './BioSection.css'
import HeroSection from "./Components/Section_HeroSection";
import Header from "./Components/Header";
import BioSection from "./Components/Section_BioSection";
import Project from "./Components/Project";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Project />
      <BioSection id="down" />
      {/* <a className="scroll-down" href="#down">Click Here to Smoothly Scroll Down</a> */}
    </div>
  );
}

export default App;
