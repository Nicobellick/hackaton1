/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Compatibility.css";
import axios from "axios";

import ImgFouet from "../img/fouetImg.jpg";
import ImgHandcuffs from "../img/sexyHandcuffs.jpg";

const firstChoice = [
  {
    img: ImgHandcuffs,
    value: 0,
    score: 1
  },
  {
    img: ImgFouet,
    value: 1,
    score: 2
  }
];
const Compatibility = props => {
  const [listCharacter, setListCharacter] = useState([]);
  const [round, setRound] = useState(0);
  const [scoreTotal, setScoreTotal] = useState(0);

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
      <h1 className="ou">Ou </h1>
      <h2 className="backHomePage">
        <Link to="/home">Retour dans la galaxy</Link>
      </h2>
      <div className="imgChoiceContainer" onClick={() => setRound(round + 1)}>
        {round === 0 ? (
          firstChoice.map(choice => (
            <div className={choice.value}>
              <img
                src={choice.img}
                onClick={() => setScoreTotal(choice.score)}
              ></img>
            </div>
          ))
        ) : scoreTotal === 1 ? (
          <div className="resultMatch">
            <div className="lifeSide">
              <h1>Pour la vie</h1>
              <h2>{listCharacter[15].name}</h2>
              <img src={listCharacter[15].image} alt={listCharacter[15].name} />
            </div>
            <div className="nightSide">
              <h1>Pour une nuit</h1>
              <h2>{listCharacter[12].name}</h2>
              <img src={listCharacter[12].image} alt={listCharacter[12].name} />
            </div>
          </div>
        ) : scoreTotal === 2 ? (
          <div className="resultMatch">
            <div className="lifeSide">
              <h1>Pour la vie</h1>
              <h2>{listCharacter[18].name}</h2>
              <img src={listCharacter[18].image} alt={listCharacter[18].name} />
            </div>
            <div className="nightSide">
              <h1>Pour une nuit</h1>
              <h2>{listCharacter[3].name}</h2>
              <img src={listCharacter[3].image} alt={listCharacter[3].name} />
            </div>
          </div>
        ) : (
          <div>Error 404</div>
        )}
      </div>
    </div>
  );
};

export default Compatibility;

/* {round === 0 ? (
  firstChoice.map(choice => (
    <div className={choice.value}>
      <img
        src={choice.img}
        onClick={() => setScoreTotal(scoreTotal + choice.score)}
      />
    </div>
  ))
) : round === 1 ? (
  secondChoice.map(choice => (
    <div className={choice.value}>
      <img
        src={choice.img}
        onClick={() => setScoreTotal(scoreTotal + choice.score)}
      ></img>
    </div>
  ))
) : round === 2 ? (
  thirdChoice.map(choice => (
    <div className={choice.value}>
      <img
        src={choice.img}
        onClick={() => setScoreTotal(scoreTotal + choice.score)}
      ></img>
    </div>
  ))
) : round === 3 ? (
  thirdChoice.map(choice => (
    <div className={choice.value}>
      <img
        src={choice.img}
        onClick={() => setScoreTotal(scoreTotal + choice.score)}
      ></img>
    </div>
  ))
) : round === 4 ? (
  fourthChoice.map(choice => (
    <div className={choice.value}>
      <img
        src={choice.img}
        onClick={() => setScoreTotal(scoreTotal + choice.score)}
      ></img>
    </div>
  ))
) : (
  <div>{scoreTotal}</div>
)} */

// const firstChoice = [
//   {
//     img: ImgForest,
//     value: 0,
//     score: 100
//   },
//   {
//     img: ImgCity,
//     value: 1,
//     score: 0
//   }
// ];
// const secondChoice = [
//   {
//     img: ImgRobotVs,
//     value: 0,
//     score: -10
//   },
//   {
//     img: imgRobotTogether,
//     value: 1,
//     score: 10
//   }
// ];
// const thirdChoice = [
//   {
//     img: ImgFouet,
//     value: 0,
//     score: 10
//   },
//   {
//     img: ImgHandcuffs,
//     value: 1,
//     score: -10
//   }
// ];
