import React from "react";
import "./Projects.scss";
import checkWhite from "./../assets/img/projects/checkWhite.png";
import checkDark from "./../assets/img/projects/checkDark.png";
import finance from "./../assets/img/projects/finance.jpg";
import todo from "./../assets/img/projects/todo.png";
import social from "./../assets/img/projects/social1.png";
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
        <div className="projects__item">
          <div className="projects__imgBlock">
            <img className="projects__img" src={todo} alt="" />
            {/* <img className="projects__img" src={checkWhite} alt="" />
            <img className="projects__img2" src={checkDark} alt="" /> */}
            <p className="projects__name">Checklist</p>
          </div>
          <div className="projects__info">
            <div className="projects__skills">
              <div className="projects__technologies">
                <p className="projects__techName">React</p>
                <p className="projects__techName">MongoDB</p>
                <p className="projects__techName">NodeJS</p>
              </div>
              <a
                className="projects__link"
                href="https://github.com/jokk3r/ToDo-app"
                target="_blank"
              >
                <img className="projects__linkImg" src={link} alt="" />
              </a>
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
        <div className="projects__item">
          <div className="projects__imgBlockFinance">
            <img className="projects__Financeimg" src={finance} alt="" />
            {/* <img className="projects__Financeimg2" src={finance2} alt="" /> */}
            <p className="projects__name">MyFinance</p>
          </div>
          <div className="projects__info">
            <div className="projects__skills">
              <div className="projects__technologies">
                <p className="projects__techName">React</p>
              </div>
              <a
                className="projects__link"
                href="https://github.com/jokk3r/Financial-accounting"
                target="_blank"
              >
                <img className="projects__linkImg" src={link} alt="" />
              </a>
            </div>
            <div className="projects__describe">
              <p className="projects__describeText">
                In the app can keep records of costs and charges
              </p>
            </div>
          </div>
        </div>
        <div className="projects__item">
          <div className="projects__imgBlockSocial">
            <img className="projects__Socialimg" src={social} alt="" />

            <p className="projects__nameBlack">InContacts</p>
          </div>
          <div className="projects__info">
            <div className="projects__skills">
              <div className="projects__technologies">
                <p className="projects__techName">React</p>
                <p className="projects__techName">Redux</p>
                <p className="projects__techName">axios</p>
              </div>
              <a
                className="projects__link"
                href="https://github.com/jokk3r/social_network"
                target="_blank"
              >
                <img className="projects__linkImg" src={link} alt="" />
              </a>
            </div>
            <div className="projects__describe">
              <p className="projects__describeText">
                In this app, I learn new things in react and write clean code,
                just like in a real project
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
