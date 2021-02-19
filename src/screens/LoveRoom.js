import React, {useState} from "react";
import "./LoveRoom.css";

const LoveRoom = props => {
  const user = props.userChoice;
  const userImg = props.userImg;
  const lover = props.loverChoice;
  const loverImg = props.loverImg;

  const [visibleQ1, setVisibleQ1] = useState(false);
  const [visibleR1, setVisibleR1] = useState(false);
  const [visibleR2, setVisibleR2] = useState(false);
  const [button1, setButton1] = useState("Essaye de conclure")
 
  return (
    <div className="loveRoom">
      <h1>Love Room</h1>
      <button className="buttonStartLove" onClick={() => {
        setVisibleQ1(!visibleQ1); 
        setButton1("Introduis-toi !")}}>{button1}</button>
      <div className="charactersLoveurs">
        <div className="characterLoveur">
            <div className="namePerso">Ton personnage : {user}</div>
            <img className="imgPerso" src={userImg}/>
        </div>
        <div className="characterLoveur">
            <div className="namePerso"> Ton choix : {lover} </div>
            <img className="imgPerso"src={loverImg}/>
        </div>
      </div>
        <p className={visibleQ1 ? "questionVisible" : "questionInvisible"} onClick={() => {setVisibleR1(!visibleR1) }}>Salut, moi c'est userName, ça va ? </p>
        <p className={visibleQ1 ? "questionVisible" : "questionInvisible"} onClick={() => {setVisibleR2(!visibleR2) }}>Est-ce que tu baises ? </p>
        <p className={visibleR1 ? "reponseVisible" : "reponseInvisible"}> Oui, merci beaucoup de m’avoir choisi !
        </p>
        <p className={visibleR2 ? "reponseVisible" : "reponseInvisible"}> Next !</p>
    </div>
  );
};
export default LoveRoom;
