import React, { useState } from "react";
import "./Header.scss";

import logo from "./../../assets/logos/logo.svg";
import Burger from "./../../assets/logos/-.png";
import dot from "./../../assets/logos/dot.svg";
function Header() {
  const [sidebar, setSidebar] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <header className="header__main">
      <div className="header__m">
        <a className="header__logo" href="#main">
          <img src={logo} alt="" />
        </a>
        <div>
          <p className="header__name">ANDREAS LACKMANN</p>
        </div>
      </div>
      {width < 1023 ? (
        <div className="header__nav" onClick={showSidebar}>
          <img src={Burger} className="header__logoB" alt="" />
          <img src={Burger} className="header__logoB" alt="" />
        </div>
      ) : (
        <a className="header__contact" href={"#contact"}>
          <img className="header__dot" src={dot} alt="" />
          <p>contact me</p>
        </a>
      )}

      <nav className={sidebar ? "header__navMenu active" : "header__navMenu"}>
        <ul className="menu__items">
          <li className="menu__toggle">
            <a className="menu__item " onClick={showSidebar}>
              <p>x</p>
            </a>
          </li>
          <li className="menu__text">
            <a href="#skills" className="menu__item ">
              <p>skills</p>
            </a>
          </li>
          <li className="menu__text">
            <a href="#portfolio" className="menu__item ">
              <p>portfolio</p>
            </a>
          </li>
          <li className="menu__text">
            <a href="#contact" className="menu__item ">
              <p>contact</p>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
