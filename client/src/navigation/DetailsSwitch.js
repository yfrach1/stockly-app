import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import PortfolioDetailsConnector from "../components/user/portfolio/portfolioDetails/PortfolioDetailsConnector";
import StockDetailsConnector from "../components/user/stocks/stockDetails/StockDetailsConnector";

const DetailsSwitch = ({ portfolioId, stock }) => {
  return (
    <Switch>
      <Route path="/" exact>
        <div>this is an empty page</div>
      </Route>
      <Route path="/stocks/:portfolioId/dashboard" exact={true}>
        <PortfolioDetailsConnector />
      </Route>
      <Route path="/stocks/:portfolioId/:stockTicker" exact={true}>
        {stock ? <StockDetailsConnector /> : null}
      </Route>
      <Redirect from="/" to={`/stocks/${portfolioId}/dashboard`} />

      {/* <Route path="/stocks/1/dashboard" exact={true}>
        <PortfolioPerformance />
      </Route> */}
    </Switch>
  );
};

export default DetailsSwitch;
