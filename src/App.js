import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import {Navbar, Nav} from "react-bootstrap";
import Home from "./Home";
import DesertRygon from "./DesertRygon/DesertRygon";
import Eamonism from "./Eamonism";
import Lizzy from "./LJ/Lizzy.js";
import CreativeGrief from "./CreativeGrief/CreativeGrief";


function App() {
  return (

      <Router>
          <div>
              

              {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
              <Switch>
                  <Route path="/" exact>
                    <Home />
                  </Route>
                  <Route path="/desert-rygon">
                     <DesertRygon />
                  </Route>
                  <Route path="/creative-grief">
                     <CreativeGrief />
                  </Route>
                  <Route path="/eamonism">
                     <Eamonism />
                  </Route>
                  <Route path="/lizzy">
                      <Lizzy />
                  </Route>
              </Switch>
          </div>
      </Router>

  );
}

export default App;
