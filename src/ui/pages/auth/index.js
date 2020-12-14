import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Login from './Login';
import Register from './Register';

const Auth = () => {
  return (
    <Switch>
      <Redirect exact path="/auth" redirect="/auth/login" />
      <Route path="/auth/login">
        <Login />
      </Route>
      <Route path="/auth/register">
        <Register />
      </Route>
    </Switch>
  );
};

export default Auth;
