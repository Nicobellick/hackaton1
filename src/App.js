import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Choice from "./screens/Choice";
import Home from "./screens/Home";
import Compatibility from "./screens/Compatibility";
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
          <Route path="/home">
            <Home userChoice={userChoice} userImg={userImg} />
          </Route>
          <Route path="/compatibility">
            <Compatibility userChoice={userChoice} userImg={userImg} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
