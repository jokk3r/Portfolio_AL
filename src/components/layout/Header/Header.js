import React, { useState, useRef, useEffect } from "react";
import "./Header.scss";
import logo from "./../../assets/logos/logo.svg";
import Burger from "./../../assets/logos/burger.svg";
import dot from "./../../assets/logos/dot.svg";
import cross from "./../../assets/logos/cross.svg";
import { useOnClickOutside } from "./closeSidebar";

function Header() {
  const [sidebar, setSidebar] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const showSidebar = () => setSidebar(!sidebar);
  const node = useRef();
  const widthToShowSidebar = 1023;
  useOnClickOutside(node, () => setSidebar(false));
  return (
    <header className="header__main" ref={node}>
      {setWidth}
      {width < widthToShowSidebar ? (
        <>
          <a className="header__logo" href="#main">
            <img src={logo} alt="" />
          </a>
          <p className="header__name">ANDREAS LACKMANN</p>
        </>
      ) : (
        <div className="header__intro">
          <a className="header__logo" href="#main">
            <img src={logo} alt="" />
          </a>

          <p className="header__name">ANDREAS LACKMANN</p>
        </div>
      )}

      {width < widthToShowSidebar ? (
        <div className="header__nav" onClick={showSidebar}>
          {sidebar ? (
            <img src={cross} className="header__logoBurger" alt="" />
          ) : (
            <img src={Burger} className="header__logoBurger" alt="" />
          )}
        </div>
      ) : (
        <a className="header__contact" href={"#contact"}>
          <img className="header__dot" src={dot} alt="" />
          <p>contact me</p>
        </a>
      )}

      <nav className={sidebar ? "header__navMenu active" : "header__navMenu"}>
        <ul className="menu__items">
          <li className="menu__text">
            <a href="#skills" className="menu__item">
              <p className="menu__p">
                <span className="menu__number">01</span>skills
              </p>
            </a>
          </li>
          <li className="menu__text">
            <a href="#portfolio" className="menu__item">
              <p className="menu__p">
                <span className="menu__number">02</span>works
              </p>
            </a>
          </li>
          <li className="menu__text">
            <a href="#contact" className="menu__item">
              <p className="menu__p">
                <span className="menu__number">03</span>contact
              </p>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
