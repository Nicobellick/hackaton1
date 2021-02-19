import React, {useState} from "react";
import "./LoveRoom.css";

const LoveRoom = props => {


  const user = props.userChoice;
  const userImg = props.userImg;
  const lover = props.loverChoice;
  const loverImg = props.loverImg;

  const quest1 = [`Salut, moi c'est ${user}, ça va ? `, 'Est-ce que tu baises ?']
  const reponse1 = ['Oui, merci beaucoup de m’avoir choisi !', `Tu te crois aussi bg qu'Olivier ?`]  
  const quest2 = [`Tu lui dis qu’il a de belles jambes.`, `Tu lui caresses la jambe.`]
  const reponse2 = [`"Tu aimes les trans-especes ?"`, `"T’es au courant que je suis trans ?"`]
  const quest3 = [`“Je ne suis pas difficile, tu sais... “`, `“Un trou c’est un trou”`]
  const reponse3 = [`"On me le dit souvent mais merci..."`, `"Ca tombe bien, je suis actif au lit..."`]
  const quest4 = [`Tu tentes de lui lécher une oreille.`, `Tu lui leche les pieds cash.`]
  const reponse4 = [`"T’aimes bien les mielpops ?"`, `"jsuis chaud je viens de faire une rando"`]
  const quest5 = [`Tu lui roules une pelle de l’espace.`, `Tu lui lance une pelle à tarte.`]
  const reponse5 = [`“Tiens, c’était bien trempé..”`, `  "Je vais te défoncer !"`]
  const quest6 = [`"Chinois ou chez toi ?"`, `"Toi, Moi, Ici, Maintenant !"`]
  const reponse6 = [`“Tu connais chez Alain ?”`, `"Tu me fais trop rire, t’es comme un grand frère"`]
  const quest7 = [`Avec`, `Sans`]
  const reponse7 = [`“Mouss’ viens ici ! ”`, `"Dommage pour toi"`]

  const [rep1, setRep1] = useState('')
  const [rep2, setRep2] = useState('')
  const [rep3, setRep3] = useState('')
  const [rep4, setRep4] = useState('')
  const [rep5, setRep5] = useState('')
  const [rep6, setRep6] = useState('')
  const [rep7, setRep7] = useState('')
  const [visibleQ1, setVisibleQ1] = useState(false);
  const [visibleR1, setVisibleR1] = useState(false);
  const [visibleR2, setVisibleR2] = useState(false);
  const [visibleQ2, setVisibleQ2] = useState(false);
  const [visibleR3, setVisibleR3] = useState(false);
  const [visibleR4, setVisibleR4] = useState(false);
  const [visibleQ3, setVisibleQ3] = useState(false);
  const [visibleR5, setVisibleR5] = useState(false);
  const [visibleR6, setVisibleR6] = useState(false);
  const [visibleQ4, setVisibleQ4] = useState(false);
  const [visibleR7, setVisibleR7] = useState(false);
  const [visibleR8, setVisibleR8] = useState(false);
  const [visibleQ5, setVisibleQ5] = useState(false);
  const [visibleR9, setVisibleR9] = useState(false);
  const [visibleR10, setVisibleR10] = useState(false);
  const [visibleQ6, setVisibleQ6] = useState(false);
  const [visibleR11, setVisibleR11] = useState(false);
  const [visibleR12, setVisibleR12] = useState(false);
  const [visibleQ7, setVisibleQ7] = useState(false);
  const [visibleR13, setVisibleR13] = useState(false);
  const [visibleR14, setVisibleR14] = useState(false);

  const [button1, setButton1] = useState("Essaye de conclure")
 const [choice2, setChoice2] = useState(false)
 const [choice3, setChoice3] = useState(false)
 const [choice4, setChoice4] = useState(false)
 const [choice5, setChoice5] = useState(false)
 const [choice6, setChoice6] = useState(false)
 const [choice7, setChoice7] = useState(false)

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
       
        <div>

          {/* En gros, fais une div tableau id= 1des réponses, tu crée une state tableau d'objet avec que des boolean,
          chaque click passe un boolean a true et donc affiche rep1, rep2, rep3 au fur et a mesure
          au moins il y a l'historique de toute les réponses une en dessous de l'autre, idem pour les questions et code moins lourd */
        }</div>

      </div>
      <div className={(button1 ==="Introduis-toi !" && !choice2) ? "choiceVisible" : "choiceInvisible" }>
        <p className={visibleQ1 ? "questionVisible" : "questionInvisible"} onClick={() => {setVisibleR1(!visibleR1); setRep1(true) }}>{quest1[0]}</p>
        <p className={visibleQ1 ? "questionVisible" : "questionInvisible"} onClick={() => {setVisibleR2(!visibleR2); setRep1(true)}}>{quest1[1]}</p>
        <p className={visibleR1 ? "reponseVisible" : "reponseInvisible"} > {reponse1[0]}</p>
        <p className={visibleR2 ? "reponseVisible" : "reponseInvisible"}> {reponse1[1]}</p>
        <button className={(visibleR1 || visibleR2) ? "score1Visible" : "score1Invisible"} onClick={() => {setVisibleQ2(!visibleQ2); setChoice2(true)}}>Caresse l’ambiance</button>
        </div>

      <div className={(!choice3) ? "choiceVisible" : "choiceInvisible" }>
      <p className={visibleQ2 ? "questionVisible" : "questionInvisible"} onClick={() => {setVisibleR3(!visibleR3); setRep2(true) }}>{quest2[0]}</p>
      <p className={visibleQ2 ? "questionVisible" : "questionInvisible"} onClick={() => {setVisibleR4(!visibleR4); setRep2(true) }}>{quest2[1]}</p>
      <p className={visibleR3 ? "reponseVisible" : "reponseInvisible"}> {reponse2[0]}</p>
      <p className={visibleR4 ? "reponseVisible" : "reponseInvisible"}> {reponse2[1]}</p>
      <button className={(visibleR3 || visibleR4) ? "score2Visible" : "score2Invisible"} onClick={() => {setVisibleQ3(!visibleQ3); setChoice3(true)}}>Présente toi quand même avant</button> 
    </div>

    <div className={(!choice4) ? "choiceVisible" : "choiceInvisible"}>
      <p className={visibleQ3 ? "questionVisible" : "questionInvisible"} onClick={() => {setVisibleR5(!visibleR5); setRep3(true) }}>{quest3[0]}</p>
      <p className={visibleQ3 ? "questionVisible" : "questionInvisible"} onClick={() => {setVisibleR6(!visibleR6); setRep3(true) }}>{quest3[1]}</p>
      <p className={visibleR5 ? "reponseVisible" : "reponseInvisible"}> {reponse3[0]}</p>
      <p className={visibleR6 ? "reponseVisible" : "reponseInvisible"}> {reponse3[1]}</p>
      <button className={(visibleR5 || visibleR6) ? "score3Visible" : "score3Invisible"} onClick={() => {setVisibleQ4(!visibleQ4); setChoice4(true)}}>Tente un mouv </button> 
    </div>

    <div className={(!choice5) ? "choiceVisible" : "choiceInvisible"}>
      <p className={visibleQ4 ? "questionVisible" : "questionInvisible"} onClick={() => {setVisibleR7(!visibleR7); setRep4(true) }}>{quest4[0]}</p>
      <p className={visibleQ4 ? "questionVisible" : "questionInvisible"} onClick={() => {setVisibleR8(!visibleR8); setRep4(true) }}>{quest4[1]}</p>
      <p className={visibleR7 ? "reponseVisible" : "reponseInvisible"}> {reponse4[0]}</p>
      <p className={visibleR8 ? "reponseVisible" : "reponseInvisible"}> {reponse4[1]}</p>
      <button className={(visibleR8 || visibleR7) ? "score4Visible" : "score4Invisible"} onClick={() => {setVisibleQ5(!visibleQ5); setChoice5(true)}}>Vas-y embrasse-le</button> 
    </div>

    <div className={(!choice6) ? "choiceVisible" : "choiceInvisible"}>
      <p className={visibleQ5 ? "questionVisible" : "questionInvisible"} onClick={() => {setVisibleR9(!visibleR9); setRep5(true) }}>{quest5[0]}</p>
      <p className={visibleQ5 ? "questionVisible" : "questionInvisible"} onClick={() => {setVisibleR10(!visibleR10); setRep5(true) }}>{quest5[1]}</p>
      <p className={visibleR9 ? "reponseVisible" : "reponseInvisible"}> {reponse5[0]}</p>
      <p className={visibleR10 ? "reponseVisible" : "reponseInvisible"}> {reponse5[1]}</p>
      <button className={(visibleR9 || visibleR10) ? "score5Visible" : "score5Invisible"} onClick={() => {setVisibleQ6(!visibleQ6); setChoice6(true)}}>Pour conclure</button> 
    </div>

    <div className={(!choice7) ? "choiceVisible" : "choiceInvisible"}>
      <p className={visibleQ6 ? "questionVisible" : "questionInvisible"} onClick={() => {setVisibleR11(!visibleR11); setRep6(true) }}>{quest6[0]}</p>
      <p className={visibleQ6 ? "questionVisible" : "questionInvisible"} onClick={() => {setVisibleR12(!visibleR12); setRep6(true) }}>{quest6[1]}</p>
      <p className={visibleR11 ? "reponseVisible" : "reponseInvisible"}> {reponse6[0]}</p>
      <p className={visibleR12 ? "reponseVisible" : "reponseInvisible"}> {reponse6[1]}</p>
      <button className={(visibleR11 || visibleR12) ? "score6Visible" : "score6Invisible"} onClick={() => {setVisibleQ7(!visibleQ7); setChoice7(true)}}>La question bonus : Avec ou sans mousse ?</button> 
    </div>

    <div>
      <p className={visibleQ7 ? "questionVisible" : "questionInvisible"} onClick={() => {setVisibleR13(!visibleR13); setRep7(true) }}>{quest7[0]}</p>
      <p className={visibleQ7 ? "questionVisible" : "questionInvisible"} onClick={() => {setVisibleR14(!visibleR14); setRep7(true) }}>{quest7[1]}</p>
      <p className={visibleR13 ? "reponseVisible" : "reponseInvisible"}> {reponse7[0]}</p>
      <p className={visibleR14 ? "reponseVisible" : "reponseInvisible"}> {reponse7[1]}</p>
      <button className={(visibleR13 || visibleR14) ? "score6Visible" : "score6Invisible"}>BRAVO VOUS AVEZ PECHO !</button> 
    </div>

  </div>
  

  );
};
export default LoveRoom;
