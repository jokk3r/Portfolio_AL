import React from "react";
import style from "./Contact.module.scss";
import linkEmail from "./../assets/img/linkToEmail.png";

function Contact() {
  return (
    <div className={style.contact__block}>
      <div className={style.contact__main}>
        <div className={style.contact__}></div>
        <a
          className={style.contact__}
          href="mailto:Andreas_lackmann@hotmail.com"
        >
          <img src={linkEmail} alt="" />
          <p className={style.contact__Email}>Andreas_lackmann@hotmail.com</p>
        </a>
      </div>
      <div className={style.contact__info}>
        <div className={style.contact__links}>
          <a
            href="https://www.linkedin.com/in/andreaslackmann/"
            target="_blank"
          >
            Linkedin
          </a>
          <a href="https://github.com/jokk3r" target="_blank">
            Github
          </a>
          <a href="https://www.facebook.com/andrey.lakman" target="_blank">
            Facebook
          </a>
        </div>
        <div className={style.contact__}></div>
      </div>
    </div>
  );
}

export default Contact;
