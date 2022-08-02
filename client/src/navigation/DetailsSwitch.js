import React from "react";
import { Switch, Route } from "react-router-dom";
import PortfolioPerformance from "../components/user/portfolio/portfolioPerformance/PortfolioPerformance";
const DetailsSwitch = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <div>this is an empty page</div>
      </Route>
      <Route path="/stocks/myportfolio">
        <PortfolioPerformance />
      </Route>
      <Route path="/stocks/myportfolio">
        <PortfolioPerformance />
      </Route>
    </Switch>
  );
};

export default DetailsSwitch;
