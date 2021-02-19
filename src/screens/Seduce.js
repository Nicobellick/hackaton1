import React, { useState, useEffect } from "react";
import "./Seduce.css";
import axios from "axios";
import { Link } from "react-router-dom";
const tatooine = [
  "- Prends ta douche au vinaigre",
  "- Rince toi le visage avec du salami",
  "- Sentir le white spirit",
  "- Lui/la/leurs/non-binaire faire rire"
];
const corellia = [
  "- Ne te rase pas",
  "- Carresser dans le sens du poil",
  "- Fais des dreadlocks",
  "- Origine Portuguaise appréciée"
];
const ryloth = [
  "- Montrer son gros calibre",
  "- Eviter de tirer à blanc",
  "- Avoir la fleur au bout du fusil",
  "- Savoir mettre une bonne cartouche"
];
const naboo = [
  "- Ne pas déboulonner trop vite",
  "- Ne pas avoir de vice",
  "- Savoir bien utiliser sa langue",
  "- Les jambes et les pieds, c'est pas que pour danser !"
];

const Seduce = () => {
  const [advice, setAdvice] = useState("");
  const [starWars, setStarWars] = useState("");
  const [arrayStar, setArrayStar] = useState("");

  useEffect(() => {
    axios
      .get("https://miadil.github.io/starwars-api/api/all.json")
      .then(res => setStarWars(res.data));
  }, [advice]);

  const sliceWars = starWars.slice(0, 40);

  const filtreArray = arr =>
    setArrayStar(arr.filter(el => el.homeworld === advice));

  return (
    <div className="bgSeduce">
      <h2 className="backHomePage">
        <Link to="/home">
          Retour vers la galaxy <span className="pinky">❤</span>
        </Link>
      </h2>
      <h2 id="titleSeduce">Choisis une planete et obtiens les conseils</h2>
      <ul className="listPlanet">
        <li
          className="planet"
          onClick={() => {
            document.querySelector(".advice").classList.add("visible");
            setAdvice("tatooine");
            filtreArray(sliceWars);
            console.log(arrayStar);
          }}
        >
          Tatooine
        </li>
        <li
          className="planet"
          onClick={() => {
            document.querySelector(".advice").classList.add("visible");
            setAdvice("corellia");
            filtreArray(sliceWars);
            console.log(arrayStar.born);
          }}
        >
          Corellia
        </li>
        <li
          className="planet"
          onClick={() => {
            document.querySelector(".advice").classList.add("visible");
            setAdvice("ryloth");
            filtreArray(sliceWars);
            console.log(arrayStar);
          }}
        >
          Ryloth
        </li>
        <li
          className="planet"
          onClick={() => {
            document.querySelector(".advice").classList.add("visible");
            setAdvice("naboo");
            filtreArray(sliceWars);
            console.log(arrayStar);
          }}
        >
          Naboo
        </li>
      </ul>
      <div>
        <div className="advice">
          <div classList="listAdvice" style={{ width: "400px" }}>
            <h3 id="adviceVador">Les conseils seduction de Dark Vador</h3>
            {advice == "tatooine" ? (
              <ul>
                <li className="conseilList">{tatooine[0]}</li>
                <li className="conseilList">{tatooine[1]}</li>
                <li className="conseilList">{tatooine[2]}</li>
                <li className="conseilList">{tatooine[3]}</li>
              </ul>
            ) : null}
            {advice == "naboo" ? (
              <ul>
                <li className="conseilList">{naboo[0]}</li>
                <li className="conseilList">{naboo[1]}</li>
                <li className="conseilList">{naboo[2]}</li>
                <li className="conseilList">{naboo[3]}</li>
              </ul>
            ) : null}
            {advice == "ryloth" ? (
              <ul>
                <li className="conseilList">{ryloth[0]}</li>
                <li className="conseilList">{ryloth[1]}</li>
                <li className="conseilList">{ryloth[2]}</li>
                <li className="conseilList">{ryloth[3]}</li>
              </ul>
            ) : null}
            {advice == "corellia" ? (
              <ul>
                <li className="conseilList">{corellia[0]}</li>
                <li className="conseilList">{corellia[1]}</li>
                <li className="conseilList">{corellia[2]}</li>
                <li className="conseilList">{corellia[3]}</li>
              </ul>
            ) : null}
            {arrayStar == ""
              ? null
              : arrayStar.map(result => (
                  <img
                    src={result.image}
                    key={result.born}
                    className="imgExemple"
                    alt={result.name}
                  />
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Seduce;
