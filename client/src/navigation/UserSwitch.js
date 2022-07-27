import React from "react";
import { Switch, Route } from "react-router-dom";
import PorfolioPage from "../components/user/portfolio/PortfolioPage";
import CryptoPage from "../components/user/crypto/CryptoPage";

const UserSwitch = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <div>this is an empty page</div>
      </Route>
      <Route path="/stocks/myportfolio">
        <PorfolioPage />
      </Route>
      <Route path="/crypto">
        <CryptoPage />
      </Route>
      <Route path="/signout"></Route>
    </Switch>
  );
};

export default UserSwitch;
