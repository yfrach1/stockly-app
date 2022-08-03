import React from "react";
import { Switch, Route } from "react-router-dom";
import PortfolioConnector from "../components/user/portfolio/PortfolioConnector";
import CryptoPage from "../components/user/crypto/CryptoPage";

const UserSwitch = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <div>this is an empty page</div>
      </Route>
      <Route path="/sign-up">
        <PortfolioConnector />
      </Route>
      <Route path="/stocks/:potfolioId">
        <PortfolioConnector />
      </Route>
      <Route path="/crypto">
        <CryptoPage />
      </Route>
      <Route path="/signout"></Route>
    </Switch>
  );
};

export default UserSwitch;
