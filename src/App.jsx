import { useState } from "react";

import HeroSection from "./Components/Section_HeroSection";
import Header from "./Components/Header";
import BioSection from "./Components/Section_BioSection";
import ContactSection from "./Components/Section_Contact";
import ProjectSection from "./Components/Section_Project";
import BackToUp from '@uiw/react-back-to-top';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Footer from "./Components/Section_Footer";
// import Footer from 'rc-footer';
import 'rc-footer/assets/index.css'; // import 'rc-footer/asssets/index.less';
// import { render } from 'react-dom';




function App() {




  
  return (
    <div id="app" className="App">
    <div className="container">

      <BackToUp style={{ border: '1px solid red', color: 'red', }}>Top</BackToUp>
    </div>
      <Header />
      <HeroSection />
      <BioSection />
      <ProjectSection />
      <ContactSection />
      <Footer
    columns={[
      {
        icon: (
          <img src="https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg" />
        ),
        title: 'Mikael Portfolio',
        url: 'https://mike.landy.se',
        description: 'Thank you for visiting my personal portfolio website. Connect with me over socials. Keep Rising 🚀. Connect with me over live chat!',
        openExternal: true,
      },
    ]}
    bottom="Made with ❤️ by Mikael Hverven-Landy"
  />,
    </div>
  );
}

export default App;
