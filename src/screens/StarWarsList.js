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
      characterLoverImg: []
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
        <h1>Choisis ton cupidon</h1>
        <Link
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
                this.props.setLoverImg(character.image)
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
          <Link to="/">Retour à la galaxie</Link>
        </div>
      </div>
    );
  }
}

export default StarWarsList;
