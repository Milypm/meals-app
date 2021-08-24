import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../containers/Home';
import MealDetails from '../components/MealDetails';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/recipe-details" component={MealDetails} />
    </Switch>
  </BrowserRouter>
);
export default Routes;
