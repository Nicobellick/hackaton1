import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Choice from './screens/Choice';
import AppelApi from './components/AppelApi'
import LoveRoom from './screens/LoveRoom'
import StarWarsLoveur from "./screens/StarWarsLoveur"


function App() {
  return (
  <div className="App">
    {/* pour test */}
    <StarWarsLoveur />
    <LoveRoom />
    {/* pour test */}
    <Switch>
      <Route exact path="/" component={Choice} />
      
      
    </Switch>
  </div>
  );
}

export default App;
