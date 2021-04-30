import React from "react";
import style from "./Header.module.scss";
import A from "./../../assets/logos/a.png";
import L from "./../../assets/logos/l.png";
import Burger from "./../../assets/logos/-.png";

function Header() {
  return (
    <header className={style.header__main}>
      <div className={style.header__logo}>
        <img src={A} className={style.header__logoA} alt="" />
        <img src={L} className={style.header__logoL} alt="" />
      </div>
      <div>
        <p className={style.header__name}>ANDREAS LACKMANN</p>
      </div>
      <div className={style.header__nav}>
        <img src={Burger} className={style.header__logoB} alt="" />
        <img src={Burger} className={style.header__logoB} alt="" />
      </div>
    </header>
  );
}

export default Header;
