import React from "react";
import "./Projects.scss";
import link from "./../assets/img/projects/link.svg";
import { ProjectsData, Introduction } from "./ProjectsData";

function Projects() {
  return (
    <div className="projects__block" id={"portfolio"}>
      <div className="projects__intro">
        <p className="projects__text">{Introduction.text}</p>
      </div>
      <div className="projects__list">
        {ProjectsData.map((item, index) => {
          return (
            <div className={item.cName0} key={index}>
              <div className={item.cName1}>
                <img className={item.cName2} src={item.img} alt="project-preview" />
                <p className="projects__name">{item.title}</p>
              </div>
              <div className="projects__info hoverEff">
                <div className="projects__skills">
                  <div className="projects__technologies">
                    {item.skills.map((skill, index) => (
                      <p className="projects__techName" key={index}>
                        {skill}
                      </p>
                    ))}
                  </div>
                  <a
                    className="projects__link"
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img className="projects__linkImg" src={link} alt="link to project" />
                  </a>
                </div>
                <div className="projects__describe">
                  <p className="projects__describeText">{item.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
