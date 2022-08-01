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

const addStockSuccessed = (stockTicker) => ({
  type: actionsTypes.ADD_STOCK_REQUEST_SUCCESSED,
  stockTicker,
});

const updateStockQuantitySuccessed = (stock) => ({
  type: actionsTypes.UPDATE_STOCK_REQUEST_SUCCESSED,
  stock,
});

const deleteStockSuccessed = (stockTicker) => ({
  type: actionsTypes.DELETE_STOCK_REQUEST_SUCCESSED,
  stockTicker,
});

const getStockDetailsSuccessed = (stockData, stock) => ({
  type: actionsTypes.GET_STOCK_DETAILS_REQUEST_SUCCESSED,
  payload: { stockData, stock },
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
      dispatch(signInRequestSuccessed(res.data));
    } catch (error) {
      setTimeout(() => {
        dispatch(signInRequestFailed());
      }, 1000);
    }
  };
};

export const signOutAction = () => {
  return async (dispatch) => {
    // dispatch(signInRequest());
    try {
      const res = await logOutUser();
      dispatch(signOutRequestSuccessed(res));
    } catch (error) {}
  };
};

export const checkUserTokenAction = () => {
  return async (dispatch) => {
    //dispatch loader maybe
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
    //dispatch loader maybe
    try {
      await addStock(stock);
      dispatch(addStockSuccessed(stock.ticker));
    } catch (error) {}
  };
};
export const updateStockQuantityAction = (stock) => {
  return async (dispatch) => {
    //dispatch loader maybe
    try {
      await updateStockQuantity(stock);
      dispatch(updateStockQuantitySuccessed(stock));
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

export const getStockDetailsAction = (stock) => {
  return async (dispatch) => {
    //dispatch loader maybe
    try {
      const stockData = await getStockDetails(stock.ticker);

      dispatch(getStockDetailsSuccessed({ stockData, stock }));
    } catch (error) {}
  };
};

// export const updateStockAction = (stock) => {
//   return async (dispatch) => {
//     dispatch(signInRequest());
//     try {
//       const res = await validateUser(loginUserData);
//       dispatch(signInRequestSuccessed(res.data));
//     } catch (error) {
//       console.log(error.message);
//       //dispatch(signUpRequestFailed());
//     }
//   };
// };
