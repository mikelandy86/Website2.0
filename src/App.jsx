import { useState } from "react";

import HeroSection from "./Components/Section_HeroSection";
import Header from "./Components/Header";
import BioSection from "./Components/Section_BioSection";
import ContactSection from "./Components/Section_Contact";
import ProjectSection from "./Components/Section_Project";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Footer from "./Components/Section_Footer";
function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <BioSection />
      <ProjectSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
