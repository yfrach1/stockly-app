import actionsTypes from "./constants";

const hideToast = () => ({
  type: actionsTypes.HIDE_TOAST,
});

const setPortfolioId = (portfolioId) => ({
  type: actionsTypes.SET_PORTFOLIO_ID,
  portfolioId,
});

const setDateFilter = (filter) => ({
  type: actionsTypes.SET_DATE_FILTER,
  filter,
});
// const setSearchKey = (searchKey) => ({
//   type: actionsTypes.SET_SEARCH_KEY,
//   searchKey,
// });

export const hideToastAction = () => {
  return (dispatch) => dispatch(hideToast());
};

export const setPortfolioIdAction = (portfolioId) => {
  return async (dispatch) => {
    dispatch(setPortfolioId(portfolioId));
  };
};

export const setDateFilterAction = (filter) => {
  return async (dispatch) => {
    dispatch(setDateFilter(filter));
  };
};

// export const setSearchKeyAction = (searchKey) => {
//   return async (dispatch) => {
//     dispatch(setSearchKey(searchKey));
//   };
// };
