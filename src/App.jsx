import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { RecoilRoot } from "recoil";

import Home from "./screens/Home";

function App() {
  return (
    <RecoilRoot>
      <Router
      >
        <Switch
        >

          <Route exact path="/">
            <Home />
          </Route>

        </Switch>
      </Router>
    </RecoilRoot>
  );
}

export default App;
