import React, { useState } from "react";
import { RiGlobalLine } from "react-icons/ri";
import { FiTwitter } from "react-icons/fi";
import { BsInstagram } from "react-icons/bs";
import { FaGgCircle } from "react-icons/fa";
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
        <div className="icons-container-burger">
          <a onClick={toggleMenu} className="nav-icon" href="#projects">
            My Work
          </a>
          <a
            onClick={toggleMenu}
            className="header-sayhello-button"
            href="#contact"
          >
            Say Hello
          </a>
        </div>
        {/* <li>
          <a onClick={toggleMenu} href="#">
            <FaHome size={20} />
          </a>
          <a onClick={toggleMenu} href="#">
            Hem
          </a>
        </li>
        <li>
          <a onClick={toggleMenu} href="#bio">
            <FaUserAlt size={20} />
          </a>
          <a onClick={toggleMenu} href="#bio">
            Om
          </a>
        </li>
        <li>
          <a onClick={toggleMenu} href="#skills">
            <IoMdSchool size={20} />
          </a>
          <a onClick={toggleMenu} href="#skills">
            Kompetenser
          </a>
        </li>
        <li>
          <a onClick={toggleMenu} href="#projects">
            <FaLaptopCode size={20} />
          </a>
          <a onClick={toggleMenu} href="#projects">
            Projekt
          </a>
        </li>
        <li>
          <a onClick={toggleMenu} href="#contact">
            <FaHeadset size={20} />
          </a>
          <a onClick={toggleMenu} href="#contact">
            Kontakt
          </a>
        </li> */}
      </ul>
      <div className="w">
        <div class="nav">
          <div class="nav-title-container">
            <a href="https://mikelandy86.github.io/website2.0/">
              <FaGgCircle
                className="hero-section-info-title"
                size={60}
                color="#fff"
              />
            </a>
          </div>

          <div className="icons-container">
            <a className="nav-icon" href="#projects">
              My Work
            </a>
            <a className="header-sayhello-button" href="#contact">
              Say Hello
            </a>
          </div>
          <div onClick={toggleMenu} className="burger">
            <div className={`line1${menuOpen ? "-open" : ""}`}></div>
            <div className={`line2${menuOpen ? "-open" : ""}`}></div>
            <div className={`line3${menuOpen ? "-open" : ""}`}></div>
          </div>
        </div>
      </div>
    </header>
  );
}
