import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Choice.css";
import imgAbdou from "../img/abdoutest.png";
import imgTest from "../img/coronavirus.png";
import imgMelania from "../img/melania.png";
import imgBlob from "../img/blob_fish.png";
import Header from "../components/Header";

let characters = [
  {
    name: "Abdou",
    description:
      "Un père de famille veuf, cherchant à explorer sa sexualité à l'aide de robots intergalactiques",
    image: imgAbdou,
    visible: false
  },
  {
    name: "Coronavirus",
    description:
      "Jeune virus sans ami, un petit peu oppressant. Cherche à voyager sur une nouvelle planète pour enfin trouver un être aimant",
    image: imgTest,
    visible: false
  },
  {
    name: "Melania Trump",
    description:
      "En tant qu'ex 1ère dame des Etats-Unis, elle souhaite conquérir de nouveaux mondes grâce à son sex-appeal légendaire",
    image: imgMelania,
    visible: false
  },
  {
    name: "Blob Fish",
    description: "Le poisson le plus célèbre mais aussi le plus moche du monde",
    image: imgBlob,
    visible: false
  }
];

const Choice = () => {
  const [userChoice, setUserChoice] = useState("");
  const [visible, setVisible] = useState(false);

  const handleChange = name => {
    setUserChoice(name);
  };
  useEffect(() => {
    console.log(userChoice);
  }, [userChoice]);

  return (
    <div className="choice">
      <Header />
      <div className="characterChoice">
        <h2
          className={visible === true ? "invisible" : "visible"}
          onClick={() => setVisible(!visible)}
        >
          Choisir un personnage
        </h2>
        <div className="characterContainer">
          {characters.map(item => (
            <div className="character">
              <img
                src={item.image}
                className={visible === true ? "visible" : "invisible"}
              />
              <div className={visible === true ? "visible" : "invisible"}>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p
                  className="userChoice"
                  onClick={e => {
                    handleChange(item.name);
                  }}
                >
                  <Link to="/home">Choisir ce personnage</Link>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Choice;
