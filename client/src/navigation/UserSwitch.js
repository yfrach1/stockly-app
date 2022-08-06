import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import PortfolioConnector from "../components/user/portfolio/PortfolioConnector";

const UserSwitch = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <div>this is an empty page</div>
      </Route>
      <Route path="/stocks/:potfolioId">
        <PortfolioConnector />
      </Route>
      <Redirect from="/" to="/stocks/dashboard" />
    </Switch>
  );
};

export default UserSwitch;
