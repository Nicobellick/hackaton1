import React from "react";
import axios from "axios";
import "./StarWarsList.css";
import { Link } from "react-router-dom";

class StarWarsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      starWarsCharacter: [],
      sliceArray: [],
      characterLover: [],
      characterLoverImg: [],
      choice: false
    };
  }

  componentDidMount() {
    axios
      .get("https://miadil.github.io/starwars-api/api/all.json")
      .then(res => this.setState({ starWarsCharacter: res.data }));
  }

  render() {
    const sliceArray = this.state.starWarsCharacter.slice(0, 19);

    return (
      <div className="loveRoomPlanet">
        <h2 className="backHomePage">
          <Link to="/home">
            Retour dans la galaxy <span className="pinky">❤</span>
          </Link>
        </h2>
        <h1 className="cupidon">Choisis ton cupidon</h1>
        <Link
          className={
            this.state.choice !== false
              ? "visibleChoiceLover"
              : "invisibleChoiceLover"
          }
          to={{
            pathname: "/loveroom",
            data: {
              characterLover: this.state.characterLover,
              characterLoverImg: this.state.characterLoverImg
            }
          }}
        >
          Rentrer dans la Love Room
        </Link>
        <div className="starWarsLoveurs">
          {sliceArray.map(character => (
            <div
              className="globalCardLoveur"
              key={character.name}
              onClick={props => (
                this.setState({ characterLover: character.name }),
                this.setState({ characterLoverImg: character.image }),
                this.props.setLoverChoice(character.name),
                this.props.setLoverImg(character.image),
                this.setState({ choice: true })
              )}
            >
              <img
                className="imageLoveur"
                src={character.image}
                alt={character.name}
              />
              <div className="nameLoveur">{character.name}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default StarWarsList;
