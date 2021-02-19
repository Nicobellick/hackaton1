import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Compatibility.css";
import axios from "axios";

import ImgFouet from "../img/fouetImg.jpg";
import ImgHandcuffs from "../img/sexyHandcuffs.jpg";
import ImgNounoursSex from "../img/nounoursSex.jpg";
import ImgHubot from "../img/imgHommeRobot.jpg";
import shortToy from "../img/shortToy.jpg";
import longToy from "../img/longToy.jpg";
import blackMask from "../img/blackMask.jpg";
import redMask from "../img/redMask.jpg";
const firstChoice = [
  {
    img: ImgHandcuffs,
    value: 0,
    score: 0
  },
  {
    img: ImgFouet,
    value: 1,
    score: 1
  }
];
const secondChoice = [
  {
    img: ImgNounoursSex,
    value: 0,
    score: 1
  },
  {
    img: ImgHubot,
    value: 1,
    score: 3
  }
];
const thirdChoice = [
  {
    img: longToy,
    value: 0,
    score: 100
  },
  {
    img: shortToy,
    value: 1,
    score: 0
  }
];
const lastChoice = [
  {
    img: blackMask,
    value: 0,
    score: 200
  },
  {
    img: redMask,
    value: 1,
    score: 0
  }
];
const Compatibility = props => {
  const [listCharacter, setListCharacter] = useState([]);
  const [round, setRound] = useState(0);
  const [scoreTotal, setScoreTotal] = useState(0);

  useEffect(() => {
    axios
      .get("https://miadil.github.io/starwars-api/api/all.json")
      .then(res => setListCharacter(res.data));
  }, []);
  useEffect(() => {
    console.log(listCharacter);
  }, [listCharacter]);

  return (
    <div className="compatiblePage">
      <h1 className="ou">Ou </h1>

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
          lastChoice.map(choice => (
            <div className={choice.value}>
              <img
                src={choice.img}
                onClick={() => setScoreTotal(scoreTotal + choice.score)}
              ></img>
            </div>
          ))
        ) : scoreTotal === 1 ? (
          <div className="resultMatch">
            <h2 className="backHomePage">
              <Link to="/home">Retour vers la galaxy ❤</Link>
            </h2>
            <div className="lifeSide">
              <h1>Pour la vie</h1>
              <h2>
                {listCharacter[28].name}
                <span className="pinky">❤</span>
              </h2>
              <img src={listCharacter[28].image} alt={listCharacter[28].name} />
            </div>
            <div className="nightSide">
              <h1>Pour une nuit</h1>
              <h2>
                {listCharacter[18].name} <span className="pinky">💋</span>
              </h2>
              <img src={listCharacter[18].image} alt={listCharacter[18].name} />
            </div>
          </div>
        ) : scoreTotal === 2 ? (
          <div className="resultMatch">
            <h2 className="backHomePage">
              <Link to="/home">
                Retour dans la galaxy <span className="pinky">❤</span>
              </Link>
            </h2>
            <div className="lifeSide">
              <h1>Pour la vie</h1>
              <h2>
                {listCharacter[12].name}
                <span className="pinky">❤</span>
              </h2>
              <img src={listCharacter[12].image} alt={listCharacter[18].name} />
            </div>
            <div className="nightSide">
              <h1>Pour une nuit</h1>
              <h2>
                {listCharacter[78].name}
                <span className="pinky">💋</span>
              </h2>
              <img src={listCharacter[78].image} alt={listCharacter[3].name} />
            </div>
          </div>
        ) : scoreTotal === 3 ? (
          <div className="resultMatch">
            <h2 className="backHomePage">
              <Link to="/home">
                Retour dans la galaxy <span className="pinky">❤</span>
              </Link>
            </h2>
            <div className="lifeSide">
              <h1>Pour la vie</h1>
              <h2>
                {listCharacter[77].name}
                <span className="pinky">❤</span>
              </h2>
              <img src={listCharacter[77].image} alt={listCharacter[18].name} />
            </div>
            <div className="nightSide">
              <h1>Pour une nuit</h1>
              <h2>
                {listCharacter[21].name}
                <span className="pinky">💋</span>
              </h2>
              <img src={listCharacter[21].image} alt={listCharacter[3].name} />
            </div>
          </div>
        ) : scoreTotal === 4 ? (
          <div className="resultMatch">
            <h2 className="backHomePage">
              <Link to="/home">Retour dans la galaxy</Link>
            </h2>
            <div className="lifeSide">
              <h1>Pour la vie</h1>
              <h2>
                {listCharacter[1].name} <span className="pinky">❤</span>
              </h2>
              <img src={listCharacter[1].image} alt={listCharacter[18].name} />
            </div>
            <div className="nightSide">
              <h1>Pour une nuit</h1>
              <h2>
                {listCharacter[3].name} <span className="pinky">💋</span>
              </h2>
              <img src={listCharacter[3].image} alt={listCharacter[3].name} />
            </div>
          </div>
        ) : scoreTotal > 100 && scoreTotal < 200 ? (
          <div className="resultMatch">
            <h2 className="backHomePage">
              <Link to="/home">
                Retour dans la galaxy <span className="pinky">❤</span>
              </Link>
            </h2>
            <div className="lifeSide">
              <h1>Pour la vie</h1>
              <h2>
                {listCharacter[55].name} <span className="pinky">❤</span>
              </h2>
              <img src={listCharacter[55].image} alt={listCharacter[55].name} />
            </div>
            <div className="nightSide">
              <h1>Pour une nuit</h1>
              <h2>
                {listCharacter[55].name} <span className="pinky">💋</span>
              </h2>
              <img src={listCharacter[55].image} alt={listCharacter[55].name} />
            </div>
          </div>
        ) : scoreTotal > 200 ? (
          <div className="resultMatch">
            <h2 className="backHomePage">
              <Link to="/home">
                Retour dans la galaxy <span className="pinky">❤</span>
              </Link>
            </h2>
            <div className="lifeSide">
              <h1>Pour la vie</h1>
              <h2>
                {listCharacter[42].name} <span className="pinky">❤</span>
              </h2>
              <img src={listCharacter[42].image} alt={listCharacter[55].name} />
            </div>
            <div className="nightSide">
              <h1>Pour une nuit</h1>
              <h2>
                {listCharacter[43].name} <span className="pinky">💋</span>
              </h2>
              <img src={listCharacter[43].image} alt={listCharacter[55].name} />
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
