import React from "react";
import style from "./Projects.module.scss";
import checkWhite from "./../assets/img/projects/checkWhite.png";
import checkDark from "./../assets/img/projects/checkDark.png";
import link from "./../assets/img/projects/link.png";
function Projects() {
  return (
    <div className={style.projects__block}>
      <div className={style.projects__intro}>
        <p className={style.projects__text}>
          BELOW YOU CAN SEE SOME OF THE PROJECTS I'VE WORKED IN
        </p>
      </div>
      <div className={style.projects__list}>
        <div className={style.projects__item}>
          <div className={style.projects__imgBlock}>
            <img className={style.projects__img} src={checkWhite} alt="" />
            <img className={style.projects__img2} src={checkDark} alt="" />
            <p className={style.projects__name}>Checklist</p>
          </div>
          <div className={style.projects__info}>
            <div className={style.projects__skills}>
              <div className={style.projects__technologies}>
                <p className={style.projects__techName}>React</p>
                <p className={style.projects__techName}>React</p>
                <p className={style.projects__techName}>React</p>
                <p className={style.projects__techName}>React</p>
              </div>
              <div className={style.projects__link}>
                <img className={style.projects__linkImg} src={link} alt="" />
              </div>
            </div>
            <div className={style.projects__describe}>
              <p className={style.projects__describeText}>
                ToDo App is simple and awesome app to organize your tasks with
                very easy to use interface. ToDo can help you to make list of
                your tasks and also you can set Reminder with specific tasks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
