import React, { useState } from "react";
import { RiGlobalLine } from "react-icons/ri";
import { FiTwitter } from "react-icons/fi";
import { BsInstagram } from "react-icons/bs";

import { FaUserAlt } from "react-icons/fa";
import { FaHeadset } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { IoMdSchool } from "react-icons/io";

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
          <a onClick={toggleMenu} href="#">
          <FaHome size={20} />    Hem
          </a>
        </li>
        <li>
          <a onClick={toggleMenu} href="#bio">
          <FaUserAlt size={20} /> Om
          </a>
        </li>
        <li>
          <a onClick={toggleMenu} href="#skills">
          <IoMdSchool size={20} />  Kompetenser
          </a>
        </li>
        <li>
          <a onClick={toggleMenu} href="#projects">
          <FaLaptopCode size={20} />  Projekt
          </a>
        </li>
        <li>
          <a onClick={toggleMenu} href="#contact">
          <FaHeadset size={20} /> Kontakt
          </a>
        </li>
      </ul>
      <div className="w">
        <div class="nav">
          <div class="nav-title-container">
            <img
              class="nav-title-icon"
              src="https://raw.githubusercontent.com/mikelandy86/website2.0/main/src/assets/public/images/Avatar-onlyhead.png"
            ></img>{" "}
            {/* <p class="nav-title">Mikael Landy</p> */}
          </div>

          <div id="myDIV" class="nav-menu-flex">
            <div className="button-container">
              <a class="nav-btn" href="#">
                Hem
              </a>
            </div>
            <div className="button-container">
              <a class="nav-btn" href="#bio">
                Om
              </a>
            </div>
            <div className="button-container">
              <a class="nav-btn" href="#skills">
                Kompetenser
              </a>
            </div>
            <div className="button-container">
              <a class="nav-btn" href="#projects">
                Projekt
              </a>
            </div>

            <div className="button-container">
              <a class="nav-btn" href="#contact">
                Kontakt
              </a>
            </div>
          </div>
          <div className="icons-container">
            <a className="nav-icon" href="#">
              <RiGlobalLine color="#656B8E" size={19} />
            </a>
            <a className="nav-icon" href="#">
              <FiTwitter color="#656B8E" size={19} />
            </a>
            <a className="nav-icon" href="#">
              <BsInstagram color="#656B8E" size={19} />
            </a>
          </div>
          <div onClick={toggleMenu} class="burger">
            <div className={`line1${menuOpen ? "-open" : ""}`}></div>
            <div className={`line2${menuOpen ? "-open" : ""}`}></div>
            <div className={`line3${menuOpen ? "-open" : ""}`}></div>
          </div>
        </div>
      </div>
    </header>
  );
}
