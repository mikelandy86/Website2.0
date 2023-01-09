import React, { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    console.log(menuOpen);
    setMenuOpen(!menuOpen);
  };
  return (
    <header className="header">
      <ul className={`nav-links${menuOpen ? "-open" : ""}`}>
        <li>
          {/* <img src="https://raw.githubusercontent.com/mikelandy86/website2.0/main/src/assets/public/images/PortraitMikael.jpg"></img> */}
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
      <div className="w">
        <div class="nav">
          <div class="nav-title-container">
            <img
              class="nav-title-icon"
              src="https://raw.githubusercontent.com/mikelandy86/website2.0/main/src/assets/public/images/headerlogo.png"
            ></img>{" "}
            <p class="nav-title">Mikael Landy</p>
          </div>
          <div onClick={toggleMenu} class="burger">
            <div className={`line1${menuOpen ? "-open" : ""}`}></div>
            <div className={`line2${menuOpen ? "-open" : ""}`}></div>
            <div className={`line3${menuOpen ? "-open" : ""}`}></div>
          </div>

          <div id="myDIV" class="nav-menu-flex">
            <div className="button-container">
              <a class="nav-btn-active" href="/">
                Hem
              </a>
            </div>
            <div className="button-container">
              <a class="nav-btn" href="/*">
                Om
              </a>
            </div>
            <div className="button-container">
              <a class="nav-btn" href="/*">
                Projekt
              </a>
            </div>
            <div className="button-container">
              <a class="nav-btn" href="/*">
                CV
              </a>
            </div>
            <div className="button-container">
              <a class="nav-btn" href="/*">
                Kontakt
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
