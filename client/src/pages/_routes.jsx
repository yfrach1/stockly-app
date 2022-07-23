import React from "react";
import { Switch, Route } from "react-router-dom";

import PorfolioPage from "./PortfolioPage";
import CryptoPage from "./CryptoPage";

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
