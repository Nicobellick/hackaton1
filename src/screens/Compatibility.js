import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Compatibility.css";
import axios from "axios";
import ImgFirstChoiceForest from "../img/forestImg.jpg";
import ImgFirstChoiceCity from "../img/cityImg.jpg";
const firstChoice = [
  {
    img: ImgFirstChoiceForest
  },
  {
    img: ImgFirstChoiceCity
  }
];

const Compatibility = props => {
  const [listCharacter, setListCharacter] = useState([]);
  useEffect(() => {
    axios
      .get("https://miadil.github.io/starwars-api/api/all.json")
      .then(res => setListCharacter(res.data.slice(0, 19)));
  }, []);
  useEffect(() => {
    console.log(listCharacter);
  }, [listCharacter]);
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
