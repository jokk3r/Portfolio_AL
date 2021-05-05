import React from "react";
import style from "./Skills.module.scss";

function Skills() {
  return (
    <div className={style.skills__block} id={"skills"}>
      <marquee
        behavior="scroll"
        direction="left"
        className={style.skills__wrap}
      >
        <div className={style.skills__slide}>
          <p className={style.skills__skills}>Skills</p>
          <p className={style.skills__skills}>Fähigkeiten</p>
          <p className={style.skills__skills}>Умения</p>
          <p className={style.skills__skills}>habilidades</p>
          <p className={style.skills__skills}>Skills</p>
          <p className={style.skills__skills}>Skills</p>
          <p className={style.skills__skills}>Skills</p>
          <p className={style.skills__skills}>Skills</p>
        </div>
      </marquee>
      <div className={style.skills__table}>
        <table>
          <tr>
            <td>Java Script</td>
            <td>Node JS</td>
            <td>Mongo DB</td>
          </tr>
          <tr>
            <td>Express</td>
            <td>SQL</td>
            <td>Photoshop</td>
          </tr>
          <tr>
            <td>Photoshop</td>
            <td>Figma</td>
            <td>Json</td>
          </tr>
          <tr>
            <td>React</td>
            <td>Redux</td>
            <td>Vue JS</td>
          </tr>
          <tr>
            <td>Git</td>
            <td>SASS</td>
            <td>Terminal</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Skills;
