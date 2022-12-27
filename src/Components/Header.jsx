import React, { useState } from "react";

const HamburgerMenu = () => {
  // Create a state variable to track the menu's open/closed status
  const [isOpen, setIsOpen] = useState(false);
};

// Create a function to toggle the menu's open/closed status
const toggleMenu = () => {
  setIsOpen(!isOpen);
};

export default function Header() {
  return (
    <header class="header">
      <div className="w">
        <div class="nav">
          <div class="nav-title-container">
            <img
              class="nav-title-icon"
              src="https://raw.githubusercontent.com/mikelandy86/website2.0/main/src/assets/public/images/headerlogo.png"
            ></img>{" "}
            <p class="nav-title">Mikael Landy</p>
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
        <div class="burger">
          <div class="line1"></div>
          <div class="line2"></div>
          <div class="line3"></div>
        </div>
      </div>
    </header>
  );
}
