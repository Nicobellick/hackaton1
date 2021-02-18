import React from 'react';
import "./LoveRoom.css"


const LoveRoom = () => {
    return(
        <div className="loveRoom">
            <h1>Love Room</h1>
            <button className="buttonStartLove">Essaye de conclure !</button>
            <div className="charactersLoveurs">
                <div className="characterLoveur">Ton personnage</div>
                <div className="starWarsLoveur">Ton choix</div>
            </div>
        </div>
    )
}

export default LoveRoom