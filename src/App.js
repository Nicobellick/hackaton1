import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Choice from "./screens/Choice";
import Compatibility from "./screens/Compatibility";
import LoveRoom from "./screens/LoveRoom";
import Seduce from './screens/Seduce'
import StarWarsList from "./screens/StarWarsList";
import Home from "./screens/Home";
import { useState } from "react";

function App() {
  const [userChoice, setUserChoice] = useState("");
  const [userImg, setUserImg] = useState("");
  const [loverChoice, setLoverChoice] = useState("");
  const [loverImg, setLoverImg] = useState("");
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Choice setUserChoice={setUserChoice} setUserImg={setUserImg} />
          </Route>

          <Route path="/home">
            <Home userChoice={userChoice} userImg={userImg} />
          </Route>
          <Route path="/compatibility">
            <Compatibility userChoice={userChoice} userImg={userImg} />
          </Route>
          <Route path="/starwarslist">
            <StarWarsList
              setLoverChoice={setLoverChoice}
              setLoverImg={setLoverImg}
            />
          </Route>
          <Route path="/loveroom">
            <LoveRoom
              userChoice={userChoice}
              userImg={userImg}
              loverChoice={loverChoice}
              loverImg={loverImg}
            />
          </Route>
          <Route path='/seduce'>
              <Seduce />

          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
