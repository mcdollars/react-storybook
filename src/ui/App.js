import React from 'react';
import { BrowserRouter, Switch, Redirect } from 'react-router-dom';
import Router from './routes';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect exact path="/" redirect="/auth" />
        <Router />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
