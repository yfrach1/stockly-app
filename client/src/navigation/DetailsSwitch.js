import React from "react";
import { Switch, Route } from "react-router-dom";
import PortfolioPerformance from "../components/user/portfolio/portfolioPerformance/PortfolioPerformance";
import StockDetailsConnector from "../components/user/stocksSystem/stockDetails/StockDetailsConnector";
// import StockDetailsConnector from "../stocksSystem/stockDetails/StockDetailsConnector";

const DetailsSwitch = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <div>this is an empty page</div>
      </Route>
      <Route path="/stocks/myportfolio/:stockTicker" exact={true}>
        {/* <PortfolioPerformance /> */}
        <StockDetailsConnector />
      </Route>
      <Route path="/stocks/:portfolioid/dashboard" exact={true}>
        <PortfolioPerformance />
      </Route>
      {/* <Route path="/stocks/1/dashboard" exact={true}>
        <PortfolioPerformance />
      </Route> */}
    </Switch>
  );
};

export default DetailsSwitch;
