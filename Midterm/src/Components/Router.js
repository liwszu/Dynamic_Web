import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "../App";
import DrinkDetails from "./DrinkDetails";
import Random from "./Random";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/drinkDetails/:id" component={DrinkDetails} />
      {/* <Route path="/random/:id" component={Random} exact /> */}
    </Switch>
  </BrowserRouter>
);
export default Router;
