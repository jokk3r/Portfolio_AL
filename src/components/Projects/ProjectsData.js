import React from "react";
import finance from "./../assets/img/projects/finance.jpg";
import todo from "./../assets/img/projects/todo.png";
import social from "./../assets/img/projects/social1.png";
import cleancode from "./../assets/img/projects/cleancode.png";
import basket from "./../assets/img/projects/basket.png";
export const ProjectsData = [
  {
    cName: "projects__imgBlock",
    cName2: "projects__img",
    title: "checklist",
    skills: ["react", "nodejs", "mongoDB"],
    link: "https://github.com/jokk3r/ToDo-app",
    img: todo,
    description:
      " ToDo App is simple and awesome app to organize your tasks with very easy to use interface. ToDo can help you to make list of your tasks and also you can set Reminder with specific tasks.",
  },
  {
    cName: "projects__imgBlockFinance",
    cName2: "projects__Financeimg",
    title: "MyFinance",
    skills: ["react"],
    link: "https://github.com/jokk3r/Financial-accounting",
    img: finance,
    description: "  In the app can keep records of costs and charges",
  },
  {
    cName: "projects__imgBlockSocial",
    cName2: "projects__Socialimg",
    title: "InContacts",
    skills: ["react", "redux", "axios"],
    link: "https://github.com/jokk3r/social_network",
    img: social,
    description:
      "   In this app, I learn new things in react and write clean code, just like in a real project",
  },
  {
    cName: "projects__imgBlockFinance",
    cName2: "projects__Financeimg",
    title: "Store basket",
    skills: ["react", "redux"],
    link: "https://github.com/jokk3r/Sport-nutrition-store",
    img: basket,
    description:
      "In this project I tested how the online shopping basket works",
  },
  {
    cName: "projects__imgBlock",
    cName2: "projects__img",
    title: "CleanCode",
    skills: ["react", "firebase", "axios"],
    link: "https://github.com/cleancode2020/clean-code-project",
    img: cleancode,
    description:
      " Cleancode is a web platform to exchange about clean coding and everything around it. Register, post working code and ask anything you want about clean coding, conventions, naminng   refactoring or related topic. Or respond to existing posts.",
  },
];
