import { useState } from "react";
import "./App.css";
// import './HeroSection.css'
// import './BioSection.css'
import HeroSection from "./Components/Section_HeroSection";
import Header from "./Components/Header";
import BioSection from "./Components/Section_BioSection";
import Contact from "./Components/Section_Contact";
import Project from "./Components/Section_Project";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Project />
      <BioSection id="down" />
      {/* <Contact /> */}
      {/* <a className="scroll-down" href="#down">Click Here to Smoothly Scroll Down</a> */}
    </div>
  );
}

export default App;
