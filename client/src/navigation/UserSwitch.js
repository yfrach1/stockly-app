import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import PortfolioConnector from "../components/user/portfolio/PortfolioConnector";
import CryptoPage from "../components/user/crypto/CryptoPage";

const UserSwitch = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <div>this is an empty page</div>
      </Route>
      {/* <Route path="/sign-up">
        <PortfolioConnector />
      </Route> */}
      <Route path="/stocks/:potfolioId">
        <PortfolioConnector />
      </Route>
      <Redirect from="/" to="/stocks/dashboard" />
    </Switch>
  );
};

export default UserSwitch;
