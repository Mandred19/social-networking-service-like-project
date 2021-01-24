import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Authorization from '../screens/Authorization';
import AuthorizationRegistration from '../screens/Authorization/AuthorizationRegistration';
import AuthorizationLogin from '../screens/Authorization/AuthorizationLogin';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const Router = () => (
  <Switch>
    {/* Auth routes */}
    <Route path="/authorization" exact component={Authorization} />
    <Route path="/authorization/sign-up" exact component={AuthorizationRegistration} />
    <Route path="/authorization/log-in" exact component={AuthorizationLogin} />
  </Switch>
);

export default Router;
