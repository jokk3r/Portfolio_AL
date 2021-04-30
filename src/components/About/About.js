import React from "react";
import style from "./About.module.scss";
function About() {
  return (
    <div className={style.about__block}>
      <p className={style.about__text}>
        I am a young developer, ready to bring new ideas to my projects. My goal
        as a developer is to write less code more efficiently, combining the
        power of reusable components with modern frameworks (Vue and React).
        Additionally, I always strive to include new and innovative interactions
        to enhance the user experience.
      </p>
    </div>
  );
}

export default About;
