import React from "react";
import { BrowserRouter, Route, Switch, Router } from "react-router-dom";

import Home from "./pages/Home";

const Routes = ({ history }) => {
  return (
    <BrowserRouter>
      <Router history={history}>
        <Switch>
          <Route path="/" component={Home} exact />
        </Switch>
      </Router>
    </BrowserRouter>
  );
};

export default Routes;
