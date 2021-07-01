import React from "react";
import style from "./Contact.module.scss";
import linkEmail from "./../assets/img/linkToEmail.svg";
import { ContactLinks, Data } from "./ContactLinks.js";

function Contact() {
  return (
    <div className={style.contact__block} id="contact">
      <div className={style.contact__main}>
        <a className={style.contact__head} href={Data.linkToEmail}>
          <p className={style.contact__contact}>Contact</p>
          <p className={style.contact__me}>me</p>
        </a>
        <a className={style.contact__link} href={Data.linkToEmail}>
          <img src={linkEmail} className={style.contact__arrow} alt="" />
          <p className={style.contact__Email}>{Data.email}</p>
        </a>
      </div>
      <div className={style.contact__info}>
        <div className={style.contact__links}>
          {ContactLinks.map((item, index) => {
            return (
              <a
                className={style.contact__link}
                href={item.link}
                target="_blank"
                key={index}
              >
                {item.name}
              </a>
            );
          })}
        </div>
        <div className={style.contact__number}>{Data.number}</div>
      </div>
    </div>
  );
}

export default Contact;
