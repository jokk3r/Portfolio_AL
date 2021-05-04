import React from "react";
import checkWhite from "./../assets/img/projects/checkWhite.png";
import checkDark from "./../assets/img/projects/checkDark.png";
export const ProjectsData = [
  {
    cName: ["projects__imgBlock", "projects__img", "projects__img2"],
    title: "checklist",
    skills: ["react", "nodejs", "mongoDB"],
    img: [checkWhite, checkDark],
    description:
      " ToDo App is simple and awesome app to organize your tasks with very easy to use interface. ToDo can help you to make list of your tasks and also you can set Reminder with specific tasks.",
  },
  //   {
  //     cName: ["projects__imgBlock", "projects__img", "projects__img2"],
  //     title: "MyFinance",
  //     skills: ["react"],
  //     img: [checkWhite, checkDark],
  //     description:
  //       " ToDo App is simple and awesome app to organize your tasks with very easy to use interface. ToDo can help you to make list of your tasks and also you can set Reminder with specific tasks.",
  //   },
];
// function Projects() {
//     return (
//       <div className="projects__block" id={"portfolio"}>
//         <div className="projects__intro">
//           <p className="projects__text">
//             BELOW YOU CAN SEE SOME OF THE PROJECTS I'VE WORKED IN
//           </p>
//         </div>
//         <div className="projects__list">
//           {ProjectsData.map((item, index) => {
//             <div className="projects__item" key={index}>
//               {/* <div className={item.cName[0]}>
//                 <img className={item.cName[1]} src={item.img[1]} alt="" />
//                 <img className={item.cName[2]} src={item.img[2]} alt="" />
//                 <p className="projects__name">Checklist</p>
//               </div> */}
//               <div className="projects__info">
//                 <div className="projects__skills">
//                   {/* <div className="projects__technologies">
//                     {item.skills.map((skill) => (
//                       <p className="projects__techName">{skill}</p>
//                     ))}

//                   </div> */}
//                   <div className="projects__link">
//                     <img className="projects__linkImg" src={link} alt="" />
//                   </div>
//                 </div>
//                 <div className="projects__describe">
//                   <p className="projects__describeText">{item.description}</p>
//                 </div>
//               </div>
//             </div>;
//           })}
//         </div>
//       </div>
//     );
//   }
