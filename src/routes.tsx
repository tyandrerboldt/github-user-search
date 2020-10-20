import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';
import Header from './core/components/Header';

const Routes = () => (
  <>
    <BrowserRouter>
      <Header title="Bootcamp DevSuperior" />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
      </Switch>
    </BrowserRouter>
  </>
);

export default Routes;
