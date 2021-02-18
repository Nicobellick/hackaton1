import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Choice from "./screens/Choice";
import Compatibility from "./screens/Compatibility";
import LoveRoom from "./screens/LoveRoom";
import StarWarsList from "./screens/StarWarsList";
import Home from "./screens/Home";
import { useState } from "react";

function App() {
  const [userChoice, setUserChoice] = useState("");
  const [userImg, setUserImg] = useState("");
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Choice setUserChoice={setUserChoice} setUserImg={setUserImg} />
          </Route>

          <Route patch="/home">
            <Home userChoice={userChoice} userImg={userImg} />
          </Route>
     <Route path="/compatibility">
            <Compatibility userChoice={userChoice} userImg={userImg} />
          </Route>
          <Route path="/starwarslist" component={StarWarsList} />
          <Route path="/loveroom" component={LoveRoom} />

        </Switch>
      </Router>
    </div>
  );
}

export default App;
