import { createSelector } from "@reduxjs/toolkit";
import {
  getStockRevenue,
  getStockDiffPercent,
} from "./user-entities-selectors";
const getUserView = (state) => state.userView;
export const getUserEntities = (state) => state.userEntities;

export const getStock = (state) => getUserView(state).stock;
export const getRedirectLoading = (state) => getUserView(state).redirectLoading;
export const getFetchLoading = (state) => getUserView(state).fetchLoading;
export const getShowToast = (state) => getUserView(state).showToast;
export const getToastParam = (state) => getUserView(state).toastParam;
export const getPortfolioId = (state) => getUserView(state).portfolioId;
export const getDateFilter = (state) => getUserView(state).dateFilter;

export const getFilteredRevenue = createSelector(
  [getStockRevenue, getDateFilter],
  (revenue, filter) => revenue[filter]
);

export const getFilteredDiffPercent = createSelector(
  [getStockDiffPercent, getDateFilter],
  (DiffPercent, filter) => DiffPercent[filter]
);

export const getDetailsLoading = (state) => getUserView(state).detailsLoading;

export const getRevenue = (state) => {
  let dateFilter = getUserView(state).dateFilter;
  const revenueObj = getUserEntities(state).stockDetails.stockRevenue;

  return revenueObj[dateFilter];
};

export const getPortfiolioRevenue = (state) => {
  let dateFilter = getUserView(state).dateFilter;
  const revenueObj = getUserEntities(state).portfolioDetails.portfolioRevenue;

  return revenueObj[dateFilter];
};

export const getDiffPercent = (state) => {
  let dateFilter = getUserView(state).dateFilter;
  const diffPercentObj = getUserEntities(state).stockDetails.DiffPercent;

  return diffPercentObj[dateFilter];
};

export const getPortfolioDiffPercent = (state) => {
  let dateFilter = getUserView(state).dateFilter;
  const diffPercentObj =
    getUserEntities(state).portfolioDetails.portfolioDiffPercent;

  return diffPercentObj[dateFilter];
};
