import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Choice from './screens/Choice';


function App() {
  return (
  <div className="App">
    <Switch>
      <Route exact path="/" component={Choice} />
      
      
    </Switch>
  </div>
  );
}

export default App;
