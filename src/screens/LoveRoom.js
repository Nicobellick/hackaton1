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
        <div className="firstQuestion">
            <p className={visibleQ1 ? "questionVisible" : "questionInvisible"} onClick={() => {setVisibleR1(!visibleR1) }}>"Salut, moi c'est userName, ça va ?"" </p>
            <p className={visibleQ1 ? "questionVisible" : "questionInvisible"} onClick={() => {setVisibleR2(!visibleR2) }}>"Est-ce que tu baises ?"" </p>
            <p className={visibleR1 ? "reponseVisible" : "reponseInvisible"}> "Oui, merci beaucoup de m’avoir choisi !"</p>
            <p className={visibleR2 ? "reponseVisible" : "reponseInvisible"}> "Next !"</p>
            <p className={(visibleR1 || visibleR2) ? "scoreVisible" : "scoreInvisible"}>Score 0 : passe à l'étape suivante</p>
        </div>
        <div className="secondQuestion">
            <p className={visibleQ1 ? "questionVisible" : "questionInvisible"} onClick={() => {setVisibleR1(!visibleR1) }}>Tu lui dis qu’il a de belles jambes.</p>
            <p className={visibleQ1 ? "questionVisible" : "questionInvisible"} onClick={() => {setVisibleR2(!visibleR2) }}>Tu lui caresses la jambe. </p>
            <p className={visibleR1 ? "reponseVisible" : "reponseInvisible"}> "Tu aimes les trans-especes ?"
            </p>
            <p className={visibleR2 ? "reponseVisible" : "reponseInvisible"}>  "T’es au courant que je suis trans ?"
            </p>
        </div>
        <div className="thirdQuestion">
            <p className={visibleQ1 ? "questionVisible" : "questionInvisible"} onClick={() => {setVisibleR1(!visibleR1) }}>“Je ne suis pas difficile, tu sais... “</p>
            <p className={visibleQ1 ? "questionVisible" : "questionInvisible"} onClick={() => {setVisibleR2(!visibleR2) }}>“Un trou c’est un trou”</p>
            <p className={visibleR1 ? "reponseVisible" : "reponseInvisible"}> "On me le dit souvent mais merci..."

            </p>
            <p className={visibleR2 ? "reponseVisible" : "reponseInvisible"}>  "Ca tombe bien, je suis actif au lit..."</p>
        </div>
        <div className="fourthQuestion">
            <p className={visibleQ1 ? "questionVisible" : "questionInvisible"} onClick={() => {setVisibleR1(!visibleR1) }}>Tu tentes de lui lécher une oreille.</p>
            <p className={visibleQ1 ? "questionVisible" : "questionInvisible"} onClick={() => {setVisibleR2(!visibleR2) }}>Tu lui leche les pieds cash.</p>
            <p className={visibleR1 ? "reponseVisible" : "reponseInvisible"}> "T’aimes bien les mielpops ?"
            </p>
            <p className={visibleR2 ? "reponseVisible" : "reponseInvisible"}>  "jsuis chaud je viens de faire une rando"</p>
        </div>
        <div className="fiveQuestion">
            <p className={visibleQ1 ? "questionVisible" : "questionInvisible"} onClick={() => {setVisibleR1(!visibleR1) }}>Tu lui roules une pelle de l’espace.</p>
            <p className={visibleQ1 ? "questionVisible" : "questionInvisible"} onClick={() => {setVisibleR2(!visibleR2) }}>Tu lui lance une pelle à tarte.</p>
            <p className={visibleR1 ? "reponseVisible" : "reponseInvisible"}> “Tiens, c’était bien trempé..”
            </p>
            <p className={visibleR2 ? "reponseVisible" : "reponseInvisible"}>  "Je vais te défoncer !"</p>
        </div>
        <div className="sixQuestion">
            <p className={visibleQ1 ? "questionVisible" : "questionInvisible"} onClick={() => {setVisibleR1(!visibleR1) }}>"Chinois ou chez toi ?"</p>
            <p className={visibleQ1 ? "questionVisible" : "questionInvisible"} onClick={() => {setVisibleR2(!visibleR2) }}>"Toi, Moi, Ici, Maintenant !"</p>
            <p className={visibleR1 ? "reponseVisible" : "reponseInvisible"}> “Tu connais chez Alain ?”
            </p>
            <p className={visibleR2 ? "reponseVisible" : "reponseInvisible"}>  "Tu me fais trop rire, t’es comme un grand frère"</p>
        </div>
        <div className="sevenQuestion">
            <p className={visibleQ1 ? "questionVisible" : "questionInvisible"} onClick={() => {setVisibleR1(!visibleR1) }}>Avec</p>
            <p className={visibleQ1 ? "questionVisible" : "questionInvisible"} onClick={() => {setVisibleR2(!visibleR2) }}>Sans</p>
            <p className={visibleR1 ? "reponseVisible" : "reponseInvisible"}> “Mouss’ viens ici ! ”
            </p>
            <p className={visibleR2 ? "reponseVisible" : "reponseInvisible"}>  "Dommage pour toi"</p>
        </div>
    </div>
  );
};
export default LoveRoom;
