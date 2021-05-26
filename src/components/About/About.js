import React from "react";
import style from "./About.module.scss";
import { AboutData } from "./AboutData.js";

function About() {
  return (
    <div className={style.about__block}>
      <div className={style.about__text}>{AboutData.text}</div>
    </div>
  );
}

export default About;
