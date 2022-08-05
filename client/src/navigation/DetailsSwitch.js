import React from "react";
import { Switch, Route } from "react-router-dom";
import PortfolioDetailsConnector from "../components/user/portfolio/portfolioDetails/PortfolioDetailsConnector";
import StockDetailsConnector from "../components/user/stocks/stockDetails/StockDetailsConnector";

const DetailsSwitch = ({ allStocksAmount, myStocksAmount, stock }) => {
  return (
    <Switch>
      <Route path="/" exact>
        <div>this is an empty page</div>
      </Route>
      <Route path="/stocks/:portfolioId/dashboard" exact={true}>
        <PortfolioDetailsConnector />
      </Route>
      <Route path="/stocks/:portfolioId/:stockTicker" exact={true}>
        {/* <PortfolioPerformance /> */}
        {stock ? <StockDetailsConnector /> : null}
      </Route>

      {/* <Route path="/stocks/1/dashboard" exact={true}>
        <PortfolioPerformance />
      </Route> */}
    </Switch>
  );
};

export default DetailsSwitch;
