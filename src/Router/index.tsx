import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Authorization from '../screens/Authorization';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const Router = () => (
  <Switch>
    <Route path="/authorization" exact component={Authorization} />
  </Switch>
);

export default Router;
