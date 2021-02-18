import React from "react";
import { Link } from "react-router-dom";
import "./Compatibility.css";
import axios from "axios";

const Compatibility = props => {
  return (
    <div className="compatiblePage">
      <h2 className="backHomePage">
        <Link to="/home">Retour dans la galaxy</Link>
      </h2>
      <div className="imgContainer"></div>
    </div>
  );
};

export default Compatibility;
