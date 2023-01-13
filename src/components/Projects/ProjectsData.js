import finance from "./../assets/img/projects/finance.jpg";
import todo from "./../assets/img/projects/todo.png";
import social from "./../assets/img/projects/social1.png";
import cleancode from "./../assets/img/projects/cleancode.png";
import basket from "./../assets/img/projects/basket.png";
import pizza from "./../assets/img/projects/pizza.png";
import statistics from "./../assets/img/projects/statistics.png";

export const Introduction = {
  text: " BELOW YOU CAN SEE SOME OF THE PROJECTS I'VE WORKED IN",
};

export const ProjectsData = [
  {
    cName0: "projects__item",
    cName1: "projects__imgBlock",
    cName2: "projects__img",
    title: "checklist",
    skills: ["react", "nodejs", "mongoDB"],
    link: "https://github.com/jokk3r/ToDo-app",
    img: todo,
    description:
      " ToDo App is simple and awesome app to organize your tasks with very easy to use interface. ToDo can help you to make list of your tasks and also you can set Reminder with specific tasks.",
  },
  {
    cName0: "projects__itemFinance",
    cName1: "projects__imgBlockFinance",
    cName2: "projects__FinanceImg",
    title: "MyFinance",
    skills: ["react"],
    link: "https://github.com/jokk3r/Financial-accounting",
    img: finance,
    description: "  In the app can keep records of costs and charges",
  },
  {
    cName0: "projects__itemSocial",
    cName1: "projects__imgBlockSocial",
    cName2: "projects__SocialImg",
    title: "InContacts",
    skills: ["react", "redux", "axios"],
    link: "https://github.com/jokk3r/social_network",
    img: social,
    description:
      "   In this app, I learn new things in react and write clean code, i try to do it like in a real project",
  },
  {
    cName0: "projects__itemBasket",
    cName1: "projects__imgBlockBasket",
    cName2: "projects__BasketImg",
    title: "Store basket",
    skills: ["react", "redux"],
    link: "https://github.com/jokk3r/Sport-nutrition-store",
    img: basket,
    description:
      "In this project I tested how redux works and implemented a project with a shopping basket",
  },
  {
    cName0: "projects__item projects__clean",
    cName1: "projects__imgBlock",
    cName2: "projects__img",
    title: "CleanCode",
    skills: ["react", "firebase", "axios"],
    link: "https://github.com/cleancode2020/clean-code-project",
    img: cleancode,
    description:
      " Cleancode is a web platform to exchange about clean coding and everything around it. Register, post working code and ask anything you want about clean coding, conventions, naminng   refactoring or related topic. Or respond to existing posts.",
  },
  {
    cName0: "projects__itemBasket",
    cName1: "projects__imgBlockBasket",
    cName2: "projects__BasketImg",
    title: "World of Pizza",
    skills: ["react","axios", "redux", "skeleton"],
    link: "https://github.com/jokk3r/World-Pizza",
    img: pizza,
    description: "Pizza shop is advanced project to practice my skills with React JS.",
  },
  {
    cName0: "projects__item projects__stat",
    cName1: "projects__imgBlock",
    cName2: "projects__img",
    title: "Statistics",
    skills: ["react", "figma", "responsive"],
    link: "https://github.com/jokk3r/Statistics",
    img: statistics,
    description:
      "I just found a design project and brought it to life. The design only includes a desktop version. That's why I also developed this project as a desktop first, so the mobile version is my vision.",
  },
];
