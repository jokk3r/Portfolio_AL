import React from "react";
import "./Projects.scss";
import checkWhite from "./../assets/img/projects/checkWhite.png";
import checkDark from "./../assets/img/projects/checkDark.png";
import link from "./../assets/img/projects/link.png";
import { ProjectsData } from "./ProjectsData";
function Projects() {
  return (
    <div className="projects__block" id={"portfolio"}>
      <div className="projects__intro">
        <p className="projects__text">
          BELOW YOU CAN SEE SOME OF THE PROJECTS I'VE WORKED IN
        </p>
      </div>
      <div className="projects__list">
        {ProjectsData.map((item) => {})}
        <div className="projects__item">
          <div className="projects__imgBlock">
            <img className="projects__img" src={checkWhite} alt="" />
            <img className="projects__img2" src={checkDark} alt="" />
            <p className="projects__name">Checklist</p>
          </div>
          <div className="projects__info">
            <div className="projects__skills">
              <div className="projects__technologies">
                <p className="projects__techName">React</p>
                <p className="projects__techName">React</p>
                <p className="projects__techName">React</p>
                <p className="projects__techName">React</p>
              </div>
              <div className="projects__link">
                <img className="projects__linkImg" src={link} alt="" />
              </div>
            </div>
            <div className="projects__describe">
              <p className="projects__describeText">
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
