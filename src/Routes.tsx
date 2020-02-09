import React from 'react';
import { BrowserRouter, Route, Switch, Router } from 'react-router-dom';

import { routes } from './constants';

import Home from './pages/Home';

const Routes = ({ history }) => {
  const { home, homeId } = routes;
  return (
    <BrowserRouter>
      <Router history={history}>
        <Switch>
          <Route path={[home, homeId]} component={Home} exact />
        </Switch>
      </Router>
    </BrowserRouter>
  );
};

export default Routes;
