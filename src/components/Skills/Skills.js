import React from "react";
import style from "./Skills.module.scss";
import { SkillsMarquee, SkillsData } from "./SkillsData";

function Skills() {
  return (
    <div className={style.skills__block} id={"skills"}>
      {/* <marquee
        behavior="scroll"
        direction="left"
        className={style.skills__wrap}
      >
        <div className={style.skills__slide}>
          {SkillsMarquee.name.map((item, index) => {
            return (
              <p className={style.skills__name} key={index}>
                {item}
              </p>
            );
          })}
        </div>
      </marquee> */}
      <div className={style.skills__table}>
        <table className={style.skills__tableMain}>
          <tr>
            {SkillsData.firstGroup.map((item, index) => {
              return (
                <td className={style.skills__tableMain} key={index}>
                  {item}
                </td>
              );
            })}
          </tr>
          <tr>
            {SkillsData.secondGroup.map((item, index) => {
              return (
                <td className={style.skills__tableMain} key={index}>
                  {item}
                </td>
              );
            })}
          </tr>
          <tr>
            {SkillsData.thirdGroup.map((item, index) => {
              return (
                <td className={style.skills__tableMain} key={index}>
                  {item}
                </td>
              );
            })}
          </tr>
          <tr>
            {SkillsData.fourthGroup.map((item, index) => {
              return (
                <td className={style.skills__tableMain} key={index}>
                  {item}
                </td>
              );
            })}
          </tr>
          <tr>
            {SkillsData.fifthGroup.map((item, index) => {
              return (
                <td className={style.skills__tableMain} key={index}>
                  {item}
                </td>
              );
            })}
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Skills;
