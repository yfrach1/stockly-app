import { getStockRevenu, getStockDiffPercent } from "./user-entities-selectors";
import { createSelector } from "@reduxjs/toolkit";
const getUserView = (state) => state.userView;

export const getSearchKey = (state) => getUserView(state).searchKey;
// export const getStockDetails = (state) => getUserView(state).stockDetails;
export const getStock = (state) => getUserView(state).stock;
export const getRedirectLoading = (state) => getUserView(state).redirectLoading;
export const getFetchLoading = (state) => getUserView(state).fetchLoading;
export const getShowToast = (state) => getUserView(state).showToast;
export const getToastParam = (state) => getUserView(state).toastParam;

export const getFilter = (state) => getUserView(state).dateFilter;

export const getRevenu = createSelector([getFilter, getStockRevenu], (filter, revenuObj) => {
   return revenuObj[filter];
});

export const getDiffPercent = createSelector(
   [getFilter, getStockDiffPercent],
   (filter, diffPercent) => {
      return diffPercent[filter];
   }
);
