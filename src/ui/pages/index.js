import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Auth from './auth';

const Pages = () => {
  return (
    <Switch>
      <Route path="/auth">
        <Auth />
      </Route>
    </Switch>
  );
};

export default Pages;
