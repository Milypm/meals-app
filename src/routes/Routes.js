import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Start from '../containers/Start';
import MealDetails from '../containers/MealDetails';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Start} />
      <Route exact path="/recipe-details/:id" component={MealDetails} />
    </Switch>
  </BrowserRouter>
);
export default Routes;
