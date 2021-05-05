import React, { useState } from "react";
import "./Header.scss";
import A from "./../../assets/logos/a.png";
import L from "./../../assets/logos/l.png";
import Burger from "./../../assets/logos/-.png";

function Header() {
  const [sidebar, setSidebar] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <header className="header__main">
      <a className="header__logo" href="#main">
        <img src={A} className="header__logoA" alt="" />
        <img src={L} className="header__logoL" alt="" />
      </a>
      <div>
        <p className="header__name">ANDREAS LACKMANN</p>
      </div>

      <div className="header__nav" onClick={showSidebar}>
        <img src={Burger} className="header__logoB" alt="" />
        <img src={Burger} className="header__logoB" alt="" />
      </div>

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
            <a href="#сontact" className="menu__item ">
              <p>contact</p>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
