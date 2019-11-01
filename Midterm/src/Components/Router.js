import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "../App";
import DrinkDetails from "./DrinkDetails";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/drinkDetails/:id" component={DrinkDetails} />
    </Switch>
  </BrowserRouter>
);
export default Router;
