import actionsTypes from "./constants";
import {
  addNewUser,
  validateUser,
  getUserDataOnStart,
  logOutUser,
} from "../services/userService";
import {
  addStock,
  getStockDetails,
  searchStock,
  deleteStock,
  updateStockQuantity,
  getStockNews,
  getHistoricalPortfolioData,
} from "../services/stockService";

const signUpRequest = () => ({
  type: actionsTypes.SIGN_UP_REQUEST,
});

const signUpRequestSuccessed = (userData) => ({
  type: actionsTypes.SIGN_UP_REQUEST_SUCCESSED,
  userData,
});
const signUpRequestFailed = () => ({
  type: actionsTypes.SIGN_UP_REQUEST_FAILED,
});

const signInRequest = () => ({
  type: actionsTypes.SIGN_IN_REQUEST,
});
const signInRequestSuccessed = (userData) => ({
  type: actionsTypes.SIGN_IN_REQUEST_SUCCESSED,
  userData,
});
const signInRequestFailed = () => ({
  type: actionsTypes.SIGN_IN_REQUEST_FAILED,
});

const signOutRequestSuccessed = (userData) => ({
  type: actionsTypes.SIGN_OUT_REQUEST_SUCCESSED,
});

const checkTokenRequest = () => ({
  type: actionsTypes.CHECK_USER_TOKEN_REQUEST,
});

const checkTokenRequestSuccessed = (userData) => ({
  type: actionsTypes.CHECK_USER_TOKEN_REQUEST_SUCCESSED,
  userData,
});

const checkTokenRequestFailed = (userData) => ({
  type: actionsTypes.CHECK_USER_TOKEN_REQUEST_FAILED,
  userData,
});

const searchStockRequest = (stocks) => ({
  type: actionsTypes.SEARCH_STOCK_REQUEST,
  stocks,
});

const searchStockSuccessed = (stocks) => ({
  type: actionsTypes.SEARCH_STOCK_REQUEST_SUCCESSED,
  stocks,
});

const searchStockFailed = (stocks) => ({
  type: actionsTypes.SEARCH_STOCK_REQUEST_FAILED,
  stocks,
});

const addStockSuccessed = (newStock, stockTicker) => ({
  type: actionsTypes.ADD_STOCK_REQUEST_SUCCESSED,
  stockTicker,
  newStock,
});

const updateStockQuantitySuccessed = (ticker, quantity) => ({
  type: actionsTypes.UPDATE_STOCK_REQUEST_SUCCESSED,
  ticker,
  quantity,
});

const deleteStockSuccessed = (stockTicker) => ({
  type: actionsTypes.DELETE_STOCK_REQUEST_SUCCESSED,
  stockTicker,
});

const getStockDetailsSuccessed = (stockInfo, ticker) => ({
  type: actionsTypes.GET_STOCK_DETAILS_REQUEST_SUCCESSED,
  stockInfo,
  ticker,
});

const getStockNewsSuccessed = (stockNews) => ({
  type: actionsTypes.GET_STOCK_NEWS_REQUEST_SUCCESSED,
  payload: { stockNews },
});
const getHistoricalPortfolioDataSuccessed = (portfolioData) => ({
  type: actionsTypes.GET_HISTORICAL_PORTFOLIO_REQUEST_SUCCESSED,
  payload: { portfolioData },
});

// const clearStockOnEmptySearch = (portfolioData) => ({
//   type: actionsTypes.CLEAR_STOCK_ON_EMPTY_SEARCH,
// });
const detailsRequest = () => ({
  type: actionsTypes.DETAILS_REQUEST,
});

export const signUpAction = (newUserData) => {
  return async (dispatch) => {
    dispatch(signUpRequest());
    try {
      const res = await addNewUser(newUserData);
      dispatch(signUpRequestSuccessed(res.data));
    } catch (error) {
      setTimeout(() => {
        dispatch(signUpRequestFailed());
      }, 1000);
    }
  };
};

export const signInAction = (loginUserData) => {
  return async (dispatch) => {
    dispatch(signInRequest());
    try {
      const res = await validateUser(loginUserData);
      setTimeout(() => {
        dispatch(signInRequestSuccessed(res.data));
      }, 1000);
    } catch (error) {
      setTimeout(() => {
        dispatch(signInRequestFailed());
      }, 1000);
    }
  };
};

export const signOutAction = () => {
  return async (dispatch) => {
    try {
      const res = await logOutUser();
      dispatch(signOutRequestSuccessed(res));
    } catch (error) {}
  };
};

export const checkUserTokenAction = () => {
  return async (dispatch) => {
    dispatch(checkTokenRequest());
    try {
      const res = await getUserDataOnStart();
      dispatch(checkTokenRequestSuccessed(res.data));
    } catch (error) {
      dispatch(checkTokenRequestFailed());
    }
  };
};

export const addStockAction = (stock, quantity) => {
  return async (dispatch) => {
    try {
      const res = await addStock(stock);
      dispatch(addStockSuccessed(res.data, stock.ticker));
    } catch (error) {}
  };
};
export const updateStockQuantityAction = (stockId, stockTicker, quantity) => {
  return async (dispatch) => {
    try {
      //maybe need loader in the input text field
      await updateStockQuantity(stockId, quantity);
      dispatch(updateStockQuantitySuccessed(stockTicker, quantity));
    } catch (error) {}
  };
};
export const deleteStockAction = (stockTicker, stockId) => {
  return async (dispatch) => {
    try {
      const res = await deleteStock(stockId);
      if (res) dispatch(deleteStockSuccessed(stockTicker));
    } catch (error) {}
  };
};

export const searchStockAction = (stockSearchKey, portfolioId) => {
  return async (dispatch) => {
    dispatch(searchStockRequest());
    try {
      const res = await searchStock(stockSearchKey, portfolioId);
      dispatch(searchStockSuccessed(res.data));
    } catch (error) {
      dispatch(searchStockFailed());
    }
  };
};

export const getStockDetailsAction = (ticker) => {
  return async (dispatch) => {
    dispatch(detailsRequest());
    try {
      const res = await getStockDetails(ticker);
      dispatch(getStockDetailsSuccessed(res.data, ticker));
    } catch (error) {}
  };
};

export const getStockNewsAction = (stock) => {
  return async (dispatch) => {
    try {
      const stockNews = await getStockNews(stock.ticker);
      dispatch(getStockNewsSuccessed(stockNews));
    } catch (error) {
      console.error(error);
    }
  };
};

export const setPortfolioData = (portfolioId) => {
  return async (dispatch) => {
    try {
      const portfolioData = await getHistoricalPortfolioData(portfolioId);
      // const { summedPortfolioData, portfolioRevenue, portfolioDiffPercent } = { ...res.data };
      dispatch(getHistoricalPortfolioDataSuccessed(portfolioData));
    } catch (error) {}
  };
};

// export const clearStockOnEmptySearchAction = () => {
//   return async (dispatch) => {
//     dispatch(clearStockOnEmptySearch());
//   };
// };
