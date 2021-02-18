import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Choice from './screens/Choice';
import Home from './screens/Home'


function App() {
  return (
  <div className="App">
    <Switch>
      <Route exact path="/" component={Choice} />
      <Route patch='/home' component={Home} />
      
      
    </Switch>
  </div>
  );
}

export default App;
