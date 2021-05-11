import React from "react";
import style from "./About.module.scss";
function About() {
  return (
    <div className={style.about__block}>
      {/* <p className={style.about__text}>
        I am a passionate developer, ready to bring your amazing ideas to live. My goal
        as a developer is to write less code more efficiently, combining the
        power of reusable components with modern frameworks (Vue and React).
        Additionally, I always strive to include new and innovative interactions
        to enhance the user experience.
      </p> */}
      <div className={style.about__text}>
        <p>
          A passionate UX-conscious developer from Berlin eager to bring
          creative ideas to Life. Always striving to achieve more with less by
          using the latest programming frameworks available
        </p>
      </div>
    </div>
  );
}

export default About;
