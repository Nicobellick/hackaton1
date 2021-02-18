import React from "react";
import "./LoveRoom.css";

const LoveRoom = props => {
  const user = props.userChoice;
  const userImg = props.userImg;
  const lover = props.loverChoice;
  const loverImg = props.loverImg;

  return (
    <div className="loveRoom">
      <h1>Love Room</h1>
      <button className="buttonStartLove">Essaye de conclure !</button>
      <div className="charactersLoveurs">
        <div className="characterLoveur">Ton personnage : {user}</div>
        <img src={userImg}></img>
        <div className="starWarsLoveur"> Ton choix : {lover} </div>
        <img src={loverImg}></img>
      </div>
      <div>
        <h2>{user}</h2>
        <img src={userImg}></img>
      </div>
    </div>
  );
};
export default LoveRoom;
