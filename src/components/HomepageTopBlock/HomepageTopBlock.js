import React from "react";
import style from "./HomepageTopBlock.module.scss";
import Star from "./../assets/img/Star.svg";
import { HomepageTopBlockData } from "./HomepageTopBlockData";
import {useWindowWidth} from './../hooks/useWindowWidth';

function Main () {

    const {width} = useWindowWidth();

    return (
      <div className={style.main__block} id="main">
        <div className={style.main__intro}>
          <p className={style.main__creative}>
            {HomepageTopBlockData.creative}
          </p>
          <p className={style.main__front}>{HomepageTopBlockData.frontend}</p>
          {width < 767 ? (
            <>
              <p className={style.main__develop}>
                {HomepageTopBlockData.developer}
              </p>
              <p className={style.main__berlin}>
                {HomepageTopBlockData.basedInBerlin}
              </p>
            </>
          ) : (
            <div className={style.main__developerIn}>
              <p className={style.main__develop}>
                {HomepageTopBlockData.developer}
              </p>
              <p className={style.main__berlin}>
                {HomepageTopBlockData.basedInBerlin}
              </p>
            </div>
          )}
        </div>
        {width < 767 ? 
        <img
         className={style.main__img}
         src={HomepageTopBlockData.imgMobile}
         alt="main"
        />:
        <img
          className={style.main__img}
          src={HomepageTopBlockData.imgDesktop}
          alt="main"
        />}
       
        <a className={style.main__star} href={"#portfolio"}>
          <img className={style.main__starImg} src={Star} alt="star" />
          <p className={style.main__work}>{HomepageTopBlockData.checkWork}</p>
        </a>
      </div>
    );
}


export default Main;
