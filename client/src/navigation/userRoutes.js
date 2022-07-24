import React from "react";
import { Switch, Route } from "react-router-dom";

import PorfolioPage from "../components/user/sideBar/portfolio/PortfolioPage";
import CryptoPage from "../components/user/sideBar/crypto/CryptoPage";

const Routes = () => {
  return (
    <Switch>
      <Route path="/stocks">
        <PorfolioPage />
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

export default Routes;
