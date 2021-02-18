import React from 'react';
import "./LoveRoom.css"


const LoveRoom = (props) => {
     const lover = props.location.data.characterLover
     const loverImg = props.location.data.characterLoverImg
    return(
        <div className="loveRoom" >
            <h1>Love Room</h1>
            <button className="buttonStartLove">Essaye de conclure !</button>
            <div className="charactersLoveurs">
                <div className="characterLoveur">Ton personnage : {lover}</div>
                <div className="starWarsLoveur">Ton choix : <img src={loverImg}></img></div>
            </div>
        </div>
    )
}

export default LoveRoom