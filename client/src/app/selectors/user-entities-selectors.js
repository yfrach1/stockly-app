import { createSelector } from "@reduxjs/toolkit";

export const getUserEntities = (state) => state.userEntities;

export const getUserAuth = (state) => getUserEntities(state).userAuth;
export const getFirstName = (state) => getUserEntities(state).firstName;
export const getLastName = (state) => getUserEntities(state).lastName;
export const getPortfolio = (state) => getUserEntities(state).portfolio;
export const getPortfolioId = (state) => getUserEntities(state).portfolio.id;
export const getStockNews = (state) => getUserEntities(state).stockNews;
export const getStockRevenue = (state) =>
  getUserEntities(state).stockDetails.stockRevenue;

export const getStockDiffPercent = (state) =>
  getUserEntities(state).stockDetails.stockDiffPercent;

export const getMyStocks = (state) => {
  const stockObj = getUserEntities(state).stocks;
  const stocksArray = Object.keys(stockObj).map((key) => stockObj[key]);
  return stocksArray;
};

export const getAllStocks = (state) => {
  const stockObj = getUserEntities(state).stocks;
  const stocksArray = Object.keys(stockObj).map((key) => stockObj[key]);
  return stocksArray;
};

export const getStock = (state) => getUserEntities(state).stock;
export const getStockDetails = (state) =>
  getUserEntities(state).stockDetails.stockInfo;

export const getStocksObj = (state) => getUserEntities(state).stocks;

export const getMyStocksAmount = createSelector([getMyStocks], (stockArray) => {
  const myStocksAmount = stockArray
    .filter((stock) => stock.isMine)
    .filter((stock) => stock !== undefined).length;
  return myStocksAmount;
});

export const getStocksAmount = createSelector([getStocksObj], (stocksObj) => {
  return Object.keys(stocksObj).length;
});

export const getPortfolioValue = createSelector([getMyStocks], (stocks) => {
  let portfolioValue = 0;
  stocks.forEach((stock) => {
    portfolioValue += stock.quantity * stock.price;
  });
  return portfolioValue;
});
