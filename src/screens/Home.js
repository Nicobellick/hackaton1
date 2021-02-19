import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = props => {
  return (
    <div className="all">
      <h2 className="backHomePage">
        <Link to="/">Choisir un autre personnage ❤</Link>
      </h2>
      <h2 id="titleHome">
        En manque <span id="userNameSelected">{props.userChoice}</span> ?
        <p>Choisis ta planète ❤ </p>
        <img src={props.userImg} alt={props.userChoice} id="userImg" />
      </h2>
      <div id="systeme_solaire">
        <div className="choixUser">
          <div
            id="info_soleil"
            className="titre_info"
            onMouseEnter={() =>
              document.querySelector("#soleil").classList.add("titleHover")
            }
            onMouseLeave={() =>
              document.querySelector("#soleil").classList.remove("titleHover")
            }
          >
            <Link to="/starwarslist"> Love Room</Link>
          </div>
          <div id="cadre_soleil">
            <h2>
              Bienvenue dans la LoveRoom, soyez prêt à affronter la température
              (Les Ewok ainsi que toutes formes de mammifaires poilu sonts
              fortement apprécié)
            </h2>
          </div>

          <div
            id="info_lune"
            className="titre_info"
            onMouseEnter={() =>
              document.querySelector("#lune").classList.add("titleHover")
            }
            onMouseLeave={() =>
              document.querySelector("#lune").classList.remove("titleHover")
            }
          >
            <Link to="/seduce"> Seduce MasterClass </Link>
          </div>
          <div id="cadre_lune">
            <h2>
              Affronte ton/ta/tes partenaire(s) et fait en sorte de pénétrer
              l'atmosphère de l'amour
            </h2>
          </div>

          <div
            id="info_ceinture_asteroides"
            className="titre_info"
            onMouseEnter={() =>
              document
                .querySelector("#ceinture_asteroides1")
                .classList.add("titleHover")
            }
            onMouseLeave={() =>
              document
                .querySelector("#ceinture_asteroides1")
                .classList.remove("titleHover")
            }
          >
            <Link to="/compatibility">Compatibilité Intergalactique</Link>
          </div>
          <div id="cadre_ceinture_asteroides">
            <h2>
              Tu as croisés l'élu de tes poils et tu souhaites tester vos
              prochaines 43secondes* ensemble ? C'est ici que ca se passe !
            </h2>
            <p>
              (* Durée de performances par variété d'espece observé depuis le
              siecle dernier)
            </p>
          </div>
        </div>

        <div id="info_mercure" className="titre_info"></div>
        <div id="cadre_mercure"></div>

        <div id="info_venus" className="titre_info"></div>
        <div id="cadre_venus"></div>

        <div id="info_terre" className="titre_info"></div>
        <div id="cadre_terre"></div>

        <div id="info_mars" className="titre_info"></div>
        <div id="cadre_mars"></div>

        <div id="info_jupiter" className="titre_info"></div>
        <div id="cadre_jupiter"></div>

        <div id="info_saturne" className="titre_info"></div>
        <div id="cadre_saturne"></div>

        <div id="info_uranus" className="titre_info"></div>
        <div id="cadre_uranus"></div>

        <div id="info_neptune" className="titre_info"></div>
        <div id="cadre_neptune"></div>

        {/* <!-- 
  Positionnement des astres du système solaire
--> */}

        <div id="soleil"></div>

        <div id="mercure" className="orbite">
          <div id="planete_mercure"></div>
        </div>

        <div id="venus" className="orbite">
          <div id="planete_venus"></div>
        </div>

        <div id="terre" className="orbite">
          <div id="planete_terre">
            <div id="lune" className="orbite">
              <div id="astre_lune"></div>
            </div>
          </div>
        </div>

        <div id="mars" className="orbite">
          <div id="planete_mars"></div>
        </div>

        <div id="ceinture_asteroides"></div>
        <div id="ceinture_asteroides1"></div>

        <div id="jupiter" className="orbite">
          <div id="planete_jupiter"></div>
        </div>

        <div id="saturne" className="orbite">
          <div id="planete_saturne">
            <div id="anneau_saturne"></div>
          </div>
        </div>

        <div id="uranus" className="orbite">
          <div id="planete_uranus">
            <div id="anneau_uranus"></div>
          </div>
        </div>

        <div id="neptune" className="orbite">
          <div id="planete_neptune"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
