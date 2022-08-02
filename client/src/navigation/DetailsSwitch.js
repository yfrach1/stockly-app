import React from "react";
import { Switch, Route } from "react-router-dom";
import PortfolioDeatils from "../components/user/portfolio/portfolioDetails/PortfolioDetails";
import StockDetailsConnector from "../components/user/stocksSystem/stockDetails/StockDetailsConnector";
// import StockDetailsConnector from "../stocksSystem/stockDetails/StockDetailsConnector";

const DetailsSwitch = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <div>this is an empty page</div>
      </Route>
      <Route path="/stocks/:portfolioId/dashboard" exact={true}>
        <PortfolioDeatils />
      </Route>
      <Route path="/stocks/:portfolioId/:stockTicker" exact={true}>
        {/* <PortfolioPerformance /> */}
        <StockDetailsConnector />
      </Route>

      {/* <Route path="/stocks/1/dashboard" exact={true}>
        <PortfolioPerformance />
      </Route> */}
    </Switch>
  );
};

export default DetailsSwitch;
