import React from "react";
import style from "./Main.module.scss";
import MainMobile from "./../assets/img/main-mobile.jpg";
import MainDesktop from "./../assets/img/main-desktop.jpg";
import Star from "./../assets/img/Star2.png";
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainImg: "",
    };
  }

  componentDidMount() {
    let width = window.innerWidth;
    if (width <= 769) {
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
      <div className={style.main__block}>
        <div className={style.main__intro}>
          <p className={style.main__hello}>hello, i am</p>
          <p className={style.main__creative}>creative</p>
          <p className={style.main__front}>frontend</p>
          <p className={style.main__develop}>developer</p>
          <p className={style.main__berlin}>/based in berlin</p>
        </div>
        <img className={style.main__img} src={this.state.mainImg} alt="" />
        <div>
          <img className={style.main__star} src={Star} alt="" />
          <p className={style.main__check}>check my work</p>
        </div>
      </div>
    );
  }
}

export default Main;
