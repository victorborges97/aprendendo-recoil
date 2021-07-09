import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { RecoilRoot } from "recoil";

import Home from "./components/Home";
import Todo from "./components/Todo";

function App() {
  return (
    <RecoilRoot>
      <Router>
        <Switch>

          <Route exact path="/">
            <Todo />
          </Route>

          <Route path="/users">
            <Home />
          </Route>

        </Switch>
      </Router>
    </RecoilRoot>
  );
}

export default App;
