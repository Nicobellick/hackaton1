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
      "Ex taulard du 93, il n'a plus le droit de s'approcher ni de vieilles dames ni d'enfants, il s'oriente donc vers les robots intergalactiques pour assouvir ses besoins",
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
      "En tant qu'ex 1ère dame des Etats-Unis, elle souhaite conquérir de nouveaux mondes grâce à son sex-appeal légendaire (et un peu botoxé)",
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

const Choice = props => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="choice">
      <Header />
      <h2
        className={visible === true ? "invisible" : "visible"}
        onClick={() => setVisible(!visible)}
      >
        Choisir un personnage
      </h2>
      <div className="characterChoice">
        <div className="characterContainer">
          {characters.map(item => (
            <div className={visible === true ? "visible" : "invisible"}>
              <div className="characterListChoice" id={item.name}>
                <img
                  src={item.image}
                  className={visible === true ? "visible" : "invisible"}
                />
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p
                  className="userChoiceBtn"
                  onClick={() => {
                    props.setUserChoice(item.name);
                    props.setUserImg(item.image);
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
