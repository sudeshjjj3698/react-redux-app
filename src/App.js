import './App.css';
import UserComponent from './components/UserComponent'
import UserDetails from './components/UserDetails'
import {
  BrowserRouter as Router,
  Switch,
  Route

} from "react-router-dom";
function App() {
  return (
    <div className="container">
      <Router>
        <Switch>
              <Route path="/" exact component={UserComponent}/>
              <Route path="/:userId"  component={UserDetails} exact/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
