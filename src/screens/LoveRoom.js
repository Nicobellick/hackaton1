import React, {useState} from "react";
import "./LoveRoom.css";

const LoveRoom = props => {


  const user = props.userChoice;
  const userImg = props.userImg;
  const lover = props.loverChoice;
  const loverImg = props.loverImg;

  const quest1 = [`Salut, moi c'est ${user}, ça va ? `, 'Est-ce que tu baises ?']
  const reponse1 = ['Oui, merci beaucoup de m’avoir choisi !', 'Tu te crois aussi bg qu Olivier ?]  
  const quest2 = ['Quentin', 'Kaiser']
  const reponse2 = ['Je sais plus', 'ce quil faut mettre']

  const [rep1, setRep1] = useState('')
  const [rep2, setRep2] = useState('')
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
        <p></p>
        <div>




          {/* En gros, fais une div tableau id= 1des réponses, tu crée une state tableau d'objet avec que des boolean,
          chaque click passe un boolean a true et donc affiche rep1, rep2, rep3 au fur et a mesure
          au moins il y a l'historique de toute les réponses une en dessous de l'autre, idem pour les questions et code moins lourd */
        }</div>



      </div>
        <p className={visibleQ1 ? "questionVisible" : "questionInvisible"} onClick={() => {setVisibleR1(!visibleR1); setRep1(true) }}>{quest1[0]}</p>
        <p className={visibleQ1 ? "questionVisible" : "questionInvisible"} onClick={() => {setVisibleR2(!visibleR2); setRep1(true)}}>{quest1[1]}</p>
        <p className={visibleR1 ? "reponseVisible" : "reponseInvisible"} > {reponse1[0]}</p>
        <p className={visibleR2 ? "reponseVisible" : "reponseInvisible"}> {reponse1[1]}</p>
      
      <div>
      <p className={rep1 ? "questionVisible" : "questionInvisible"} onClick={() => {setVisibleR1(!visibleR1); setRep2(true) }}>{quest2[0]}</p>
      <p className={rep1 ? "questionVisible" : "questionInvisible"} onClick={() => {setVisibleR2(!visibleR2); setRep2(true) }}>{quest2[1]}</p>
      <p className={rep2 ? "reponseVisible" : "reponseInvisible"}> {reponse2[0]}</p>
      <p className={rep2 ? "reponseVisible" : "reponseInvisible"}> {reponse2[1]}</p>
    </div>
  </div>
  

  );
};
export default LoveRoom;
