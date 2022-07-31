const getUserView = (state) => state.userView;

export const getSearchKey = (state) => getUserView(state).searchKey;
export const getStockDetails = (state) => getUserView(state).stockDetails;
export const getStock = (state) => getUserView(state).stock;
export const getRedirectLoading = (state) => getUserView(state).redirectLoading;
export const getFetchLoading = (state) => getUserView(state).fetchLoading;
export const getStockNews = (state) => getUserView(state).stockNews;
