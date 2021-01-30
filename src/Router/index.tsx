import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Authorization from '../screens/Authorization';
import AuthorizationRegistration from '../screens/Authorization/AuthorizationRegistration';
import AuthorizationLogIn from '../screens/Authorization/AuthorizationLogIn';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const Router = () => {
  return (
    <Switch>
      {/* Auth routes */}
      <Route path="/authorization" exact component={Authorization} />
      <Route path="/sign-up" exact component={AuthorizationRegistration} />
      <Route path="/log-in" exact component={AuthorizationLogIn} />
    </Switch>
  );
};

export default Router;
