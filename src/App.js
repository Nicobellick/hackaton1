import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Choice from './screens/Choice';

import LoveRoom from './screens/LoveRoom'
import StarWarsList from "./screens/StarWarsList"

import Home from './screens/Home'
import {useState} from 'react'



function App() {
  const [userChoice, setUserChoice] = useState("");
  const [userImg, setUserImg] = useState('');
  return (
  <div className="App">

    {/* pour test */}
    
    {/* pour test */}
    <Switch>
      <Route exact path="/" component={StarWarsList} />
      <Route path='/loveroom' component={LoveRoom} />

    <Router>
      
    <Switch>
      <Route exact path="/"  > 
          <Choice setUserChoice={setUserChoice} setUserImg={setUserImg}/>
      </Route>
      <Route patch='/home' >
        <Home userChoice={userChoice} userImg={userImg}/>
        </Route>
    
      
      

      
    </Switch>
    </Router>
  </div>
  );
}

export default App;



