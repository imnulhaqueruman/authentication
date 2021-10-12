import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';

function App() {
  return (
   <Router>
     <Switch>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/dashboard">
            <Dashboard></Dashboard>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
          
          
        </Switch>
   </Router>
  );
}

export default App;
