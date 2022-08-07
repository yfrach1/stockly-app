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

const signOutRequestSuccessed = () => ({
  type: actionsTypes.SIGN_OUT_REQUEST_SUCCESSED,
});
const signOutRequestFailed = () => ({
  type: actionsTypes.SIGN_OUT_REQUEST_FAILED,
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

const searchStockSuccessed = (stocks, searchKey) => ({
  type: actionsTypes.SEARCH_STOCK_REQUEST_SUCCESSED,
  stocks,
  searchKey,
});

const searchStockFailed = () => ({
  type: actionsTypes.SEARCH_STOCK_REQUEST_FAILED,
});

const addStockSuccessed = (newStock, stockTicker) => ({
  type: actionsTypes.ADD_STOCK_REQUEST_SUCCESSED,
  stockTicker,
  newStock,
});
const addStockFailed = () => ({
  type: actionsTypes.ADD_STOCK_REQUEST_FAILED,
});
const updateStockQuantitySuccessed = (ticker, quantity) => ({
  type: actionsTypes.UPDATE_STOCK_REQUEST_SUCCESSED,
  ticker,
  quantity,
});

const updateStockQuantityFailed = () => ({
  type: actionsTypes.UPDATE_STOCK_REQUEST_FAILED,
});

const deleteStockSuccessed = (stockTicker) => ({
  type: actionsTypes.DELETE_STOCK_REQUEST_SUCCESSED,
  stockTicker,
});
const deleteStockFailed = () => ({
  type: actionsTypes.DELETE_STOCK_REQUEST_FAILED,
});

const getStockDetailsSuccessed = (stockInfo, ticker) => ({
  type: actionsTypes.GET_STOCK_DETAILS_REQUEST_SUCCESSED,
  stockInfo,
  ticker,
});

const getStockDetailsFailed = () => ({
  type: actionsTypes.GET_STOCK_DETAILS_REQUEST_FAILED,
});

const getStockNewsSuccessed = (stockNews) => ({
  type: actionsTypes.GET_STOCK_NEWS_REQUEST_SUCCESSED,
  payload: { stockNews },
});
const getHistoricalPortfolioDataSuccessed = (portfolioData) => ({
  type: actionsTypes.GET_HISTORICAL_PORTFOLIO_REQUEST_SUCCESSED,
  payload: { portfolioData },
});
const getHistoricalPortfolioDataFailed = () => ({
  type: actionsTypes.GET_HISTORICAL_PORTFOLIO_REQUEST_FAILED,
});

const detailsRequest = () => ({
  type: actionsTypes.DETAILS_REQUEST,
});

const setSearchKey = (searchKey) => ({
  type: actionsTypes.SET_SEARCH_KEY,
  searchKey,
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
      await logOutUser();
      dispatch(signOutRequestSuccessed());
    } catch (error) {
      dispatch(signOutRequestFailed());
    }
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

export const addStockAction = (stock) => {
  return async (dispatch) => {
    try {
      const res = await addStock(stock);
      console.log("stock: ", res.data);
      dispatch(addStockSuccessed(res.data, stock.ticker));
      const portfolioData = await getHistoricalPortfolioData();

      dispatch(getHistoricalPortfolioDataSuccessed(portfolioData));
    } catch (error) {
      console.log(error);
      dispatch(addStockFailed());
    }
  };
};
export const updateStockQuantityAction = (stockId, stockTicker, quantity) => {
  return async (dispatch) => {
    try {
      console.log("stockId: in update ", stockId);
      await updateStockQuantity(stockId, quantity);
      dispatch(updateStockQuantitySuccessed(stockTicker, quantity));
      const histPortfolioData = await getHistoricalPortfolioData();
      dispatch(getHistoricalPortfolioDataSuccessed(histPortfolioData));
    } catch (error) {
      dispatch(updateStockQuantityFailed());
    }
  };
};
export const deleteStockAction = (stockTicker, stockId, portfolioId) => {
  return async (dispatch) => {
    try {
      console.log("stockId: in delete ", stockId);
      const portfolioData = await deleteStock(stockId, portfolioId);
      dispatch(deleteStockSuccessed(stockTicker, portfolioData));
      const histPortfolioData = await getHistoricalPortfolioData();
      dispatch(getHistoricalPortfolioDataSuccessed(histPortfolioData));
    } catch (error) {
      console.log(error);
      dispatch(deleteStockFailed());
    }
  };
};

export const searchStockAction = (stockSearchKey, portfolioId) => {
  return async (dispatch) => {
    dispatch(searchStockRequest());
    try {
      const res = await searchStock(stockSearchKey, portfolioId);

      dispatch(searchStockSuccessed(res.data, stockSearchKey));
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
    } catch (error) {
      console.log(error);
      dispatch(getStockDetailsFailed());
    }
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

export const setPortfolioData = () => {
  return async (dispatch) => {
    try {
      const portfolioData = await getHistoricalPortfolioData();
      dispatch(getHistoricalPortfolioDataSuccessed(portfolioData));
    } catch (error) {
      dispatch(getHistoricalPortfolioDataFailed());
    }
  };
};

export const setSearchKeyAction = (searchKey) => {
  return async (dispatch) => {
    // dispatch(whileType());
    dispatch(setSearchKey(searchKey));
  };
};
