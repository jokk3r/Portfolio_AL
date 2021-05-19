import React from "react";
import style from "./Contact.module.scss";
import linkEmail from "./../assets/img/linkToEmail.svg";

function Contact() {
  return (
    <div className={style.contact__block} id="contact">
      <div className={style.contact__main}>
        <div className={style.contact__head}>
          <p className={style.contact__contact}>Contact</p>
          <p className={style.contact__me}>me</p>
        </div>
        <a
          className={style.contact__link}
          href="mailto:Andreas_lackmann@hotmail.com"
        >
          <img src={linkEmail} className={style.contact__arrow} alt="" />
          <p className={style.contact__Email}>Andreas_lackmann@hotmail.com</p>
        </a>
      </div>
      <div className={style.contact__info}>
        <div className={style.contact__links}>
          <a
            className={style.contact__link}
            href="https://www.linkedin.com/in/andreaslackmann/"
            target="_blank"
          >
            Linkedin
          </a>
          <a
            className={style.contact__link}
            href="https://github.com/jokk3r"
            target="_blank"
          >
            Github
          </a>
          <a
            className={style.contact__link}
            href="https://www.facebook.com/andrey.lakman"
            target="_blank"
          >
            Facebook
          </a>
        </div>
        <div className={style.contact__number}>+4917664819043</div>
      </div>
    </div>
  );
}

export default Contact;
