const getUserView = (state) => state.userView;
export const getUserEntities = (state) => state.userEntities;

export const getSearchKey = (state) => getUserView(state).searchKey;
// export const getStockDetails = (state) => getUserView(state).stockDetails;
export const getStock = (state) => getUserView(state).stock;
export const getRedirectLoading = (state) => getUserView(state).redirectLoading;
export const getFetchLoading = (state) => getUserView(state).fetchLoading;
export const getShowToast = (state) => getUserView(state).showToast;
export const getToastParam = (state) => getUserView(state).toastParam;

// export const getFilter = (state) => getUserView(state).dateFilter;
export const getTimePeriodFilter = (state) => getUserView(state).dateFilter;

export const getRevenue = (state) => {
  let dateFilter = getUserView(state).dateFilter;
  if (dateFilter === "All") {
    dateFilter = "1All";
  }
  const revenueObj = getUserEntities(state).stockDetails.stockRevenue;

  return revenueObj[dateFilter];
};

export const getDiffPercent = (state) => {
  let dateFilter = getUserView(state).dateFilter;
  if (dateFilter === "All") {
    dateFilter = "1All";
  }
  const diffPercentObj = getUserEntities(state).stockDetails.stockDiffPercent;

  return diffPercentObj[dateFilter];
};
