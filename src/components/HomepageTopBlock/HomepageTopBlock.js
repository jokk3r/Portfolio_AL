import React from "react";
import style from "./HomepageTopBlock.module.scss";
import MainMobile from "./../assets/img/main-mobile.jpg";
import MainDesktop from "./../assets/img/main-desktop.jpg";
import Star from "./../assets/img/Star.svg";
import { HomepageTopBlockData } from "./HomepageTopBlockData";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainImg: "",
    };
  }

  componentDidMount() {
    const width = window.innerWidth;
    const MOBILE_WIDTH = 767;
    if (width <= MOBILE_WIDTH) {
      this.setState({
        mainImg: MainMobile,
      });
    } else {
      this.setState({
        mainImg: MainDesktop,
      });
    }
  }

  render() {
    return (
      <div className={style.main__block} id="main">
        <div className={style.main__intro}>
          <p className={style.main__creative}>
            {HomepageTopBlockData.creative}
          </p>
          <p className={style.main__front}>{HomepageTopBlockData.frontend}</p>
          {this.state.mainImg === MainMobile ? (
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
        <img
          className={style.main__img}
          src={this.state.mainImg}
          alt="main picture"
        />
        <a className={style.main__star} href={"#portfolio"}>
          <img className={style.main__starImg} src={Star} alt="star" />
          <p className={style.main__check}>{HomepageTopBlockData.checkWork}</p>
        </a>
      </div>
    );
  }
}

export default Main;
