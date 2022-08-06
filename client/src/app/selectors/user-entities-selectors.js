import { createSelector } from "@reduxjs/toolkit";
// import { getSearchKey } from "./user-view-selectors";

export const getUserEntities = (state) => state.userEntities;
export const getSearchKey = (state) => getUserEntities(state).searchKey;

export const getUserAuth = (state) => getUserEntities(state).userAuth;
export const getFirstName = (state) => getUserEntities(state).firstName;
export const getLastName = (state) => getUserEntities(state).lastName;
export const getPortfolio = (state) => getUserEntities(state).portfolio;
export const getPortfolioName = (state) =>
  getUserEntities(state).portfolio.name;
export const getPortfolioId = (state) => getUserEntities(state).portfolio.id;
export const getStockNews = (state) => getUserEntities(state).stockNews;
export const getStockRevenue = (state) =>
  getUserEntities(state).stockDetails.stockRevenue;

export const getStockDiffPercent = (state) =>
  getUserEntities(state).stockDetails.stockDiffPercent;

export const getMyStocks = (state) => {
  const stockObj = getUserEntities(state).myStocks;
  const stocksArray = Object.keys(stockObj).map((key) => stockObj[key]);
  return stocksArray;
};

export const getPortfolioDetails = (state) =>
  getUserEntities(state).portfolioDetails;

export const getSerachedStocks = (state) => {
  const stockObj = getUserEntities(state).searchedStocks;
  const stocksArray = Object.keys(stockObj).map((key) => stockObj[key]);
  return stocksArray;
};

////
export const getStocks = createSelector(
  [getMyStocks, getSearchKey, getSerachedStocks],
  (myStocks, searchKey, searchedStocks) => {
    if (searchKey.length) return searchedStocks;
    else return myStocks;
  }
);

export const getStock = (state) => getUserEntities(state).stock;
export const getStockDetails = (state) =>
  getUserEntities(state).stockDetails.stockInfo;

export const getStocksObj = (state) => getUserEntities(state).myStocks;

export const getMyStocksAmount = createSelector([getMyStocks], (stockArray) => {
  const myStocksAmount = stockArray
    .filter((stock) => stock.isMine)
    .filter((stock) => stock !== undefined).length;
  return myStocksAmount;
});

export const getStocksAmount = createSelector(
  [getMyStocks, getSerachedStocks],
  (myStocks, searchedStocks) => {
    return myStocks.length + searchedStocks.length;
  }
);

// export const getAllStocksAmount = createSelector(
//   [getStocksObj],
//   (stocksObj) => {
//     return Object.keys(stocksObj).length;
//   }
// );

export const getPortfolioValue = createSelector([getMyStocks], (stocks) => {
  let portfolioValue = 0;
  stocks.forEach((stock) => {
    portfolioValue += stock.quantity * stock.price;
  });
  return portfolioValue;
});

export const getStocksStatus = createSelector([getMyStocks], (stockArray) => {
  const stocksStatus = stockArray.map((stock) => {
    return {
      ticker: stock.ticker,
      status: stock.isChecked,
    };
  });
  return stocksStatus;
});
