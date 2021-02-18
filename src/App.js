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


function App() {
  return (
  <div className="App">
    {/* pour test */}
    
    {/* pour test */}
    <Switch>
      <Route exact path="/" component={StarWarsList} />
      <Route path='/loveroom' component={LoveRoom} />
      
    </Switch>
  </div>
  );
}

export default App;
