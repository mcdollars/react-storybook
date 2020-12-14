import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Auth from 'ui/auth';

const Router = () => {
  return (
    <Switch>
      <Route path="/auth">
        <Auth />
      </Route>
    </Switch>
  );
};

export default Router;
