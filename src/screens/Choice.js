import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Choice.css';
import imgAbdou from '../img/abdoutest.png'
import imgTest from '../img/coronavirus.png'
import imgMelania from '../img/melania.png'
import imgBlob from '../img/blob_fish.png'


let characters = [
    {
        name: "Abdou",
        description: "Un père de famille veuf, cherchant à explorer sa sexualité à l'aide de robots intergalactiques",
        image: imgAbdou,
        visible:false,
    },
    {
        name: "Coronavirus",
        description: "Jeune virus sans ami, un petit peu oppressant. Cherche à voyager sur une nouvelle planète pour enfin trouver un être aimant",
        image: imgTest,
        visible:false,
    
    },
{
        name: "Melania Trump",
        description: "En tant qu'ex 1ère dame des Etats-Unis, elle souhaite conquérir de nouveaux mondes grâce à son sex-appeal légendaire",
        image: imgMelania, 
        visible:false,  
    },
    {
        name: "Blob Fish",
        description: "Le poisson le plus célèbre mais aussi le plus moche du monde",
        image: imgBlob,
        visible:false,
    
    },
]



const Choice = () => {
    const [userchoice, setUserchoice] = useState('');
    const [visible, setVisible] = useState(false);
    return(
        <div className='choice'>
            <div className="characterContainer">
                
            {characters.map(item => (
                <div className="character">
                        <img src={item.image}></img>
                    <div className='visible'>
                         
                             <p>{item.name}</p>
                             <p>{item.description}</p>
                       
                    </div>  
                </div>              
            ))}
            
            </div>
        </div>
    )
}

export default Choice;