import React from 'react';
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import Nav from "./components/Nav";
import NoMatch from "./pages/NoMatch";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
        <Router>
          <div>
            <Switch>
              <Route exact path ="/" component={Search}/>
              <Route exact path ="/books" component={Search}/>
              <Route exact path ="/saved" component={Saved}/>
            </Switch>
          </div>
        </Router>
    </div>
  );
}

export default App;
