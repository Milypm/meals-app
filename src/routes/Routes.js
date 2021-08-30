import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Start from '../components/Start';
import MealDetails from '../components/MealDetails';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Start} />
      <Route exact path="/recipe-details" component={MealDetails} />
    </Switch>
  </BrowserRouter>
);
export default Routes;
