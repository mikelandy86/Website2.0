import { useState } from "react";
import "./App.css";
import HeroSection from "./Components/Section_HeroSection";
import Header from "./Components/Header";
import BioSection from "./Components/Section_BioSection";
import Contact from "./Components/Section_Contact";
import Project from "./Components/Section_Project";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./Components/Section_Footer";
function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Project />
      <BioSection />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
