import React from "react";
import "./Header.css";
import Img from "../img/logoMouth.png";
const Header = () => {
  return (
    <div className="header">
      <img className="logo" src={Img} alt="logo" />
      <div className="title">
        <h1 className="X">X</h1>
        <p className="universe">Universe</p>
      </div>
    </div>
  );
};

export default Header;
