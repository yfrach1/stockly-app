import { createSelector } from "@reduxjs/toolkit";
import {
  getStockRevenue,
  getStockDiffPercent,
} from "./user-entities-selectors";
const getUserView = (state) => state.userView;
export const getUserEntities = (state) => state.userEntities;

// export const getSearchKey = (state) => {
//   console.log(getUserView(state).searchKey);
//   return getUserView(state).searchKey;
// };
// export const getStockDetails = (state) => getUserView(state).stockDetails;
export const getStock = (state) => getUserView(state).stock;
export const getRedirectLoading = (state) => getUserView(state).redirectLoading;
export const getFetchLoading = (state) => getUserView(state).fetchLoading;
export const getShowToast = (state) => getUserView(state).showToast;
export const getToastParam = (state) => getUserView(state).toastParam;
export const getPortfolioId = (state) => getUserView(state).portfolioId;
export const getDateFilter = (state) => getUserView(state).dateFilter;

export const getDiffPercent = createSelector(
  [getStockDiffPercent],
  (DiffPercent) => DiffPercent["All"]
);

export const getRevenue = createSelector(
  [getStockRevenue],
  (revenue) => revenue["All"]
);
export const getFilteredRevenue = createSelector(
  [getStockRevenue, getDateFilter],
  (revenue, filter) => revenue[filter]
);

export const getFilteredDiffPercent = createSelector(
  [getStockDiffPercent, getDateFilter],
  (DiffPercent, filter) => DiffPercent[filter]
);

export const getDetailsLoading = (state) => getUserView(state).detailsLoading;
