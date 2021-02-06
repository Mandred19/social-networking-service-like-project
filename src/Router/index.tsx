import React, { FC, ReactElement } from 'react';
import { Route, Switch } from 'react-router-dom';

import Authorization from '../screens/Authorization';
import AuthorizationRegistration from '../screens/Authorization/AuthorizationRegistration';
import AuthorizationLogIn from '../screens/Authorization/AuthorizationLogIn';

import Main from '../screens/HomePage';

const Router: FC = (): ReactElement => {
  return (
    <Switch>
      {/* Auth routes */}
      <Route path="/authorization" exact component={Authorization} />
      <Route path="/sign-up" exact component={AuthorizationRegistration} />
      <Route path="/log-in" exact component={AuthorizationLogIn} />

      {/* HomePage routes */}
      <Route path="/" exact component={Main} />
    </Switch>
  );
};

export default Router;
