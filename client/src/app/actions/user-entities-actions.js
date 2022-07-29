import actionsTypes from "./constants";
import {
  addNewUser,
  validateUser,
  getUserDataOnStart,
} from "../services/userService";
import {
  addStock,
  getStockDetails,
  searchStock,
} from "../services/stockService";

const signUpRequestSuccessed = (userData) => ({
  type: actionsTypes.SIGN_UP_REQUEST_SUCCESSED,
  userData,
});
const signUpRequestFailed = () => ({
  type: actionsTypes.SIGN_UP_REQUEST_FAILED,
});

const signInRequestSuccessed = (userData) => ({
  type: actionsTypes.SIGN_IN_REQUEST_SUCCESSED,
  userData,
});
const checkTokenRequestSuccessed = (userData) => ({
  type: actionsTypes.CHECK_USER_TOKEN_REQUEST_SUCCESSED,
  userData,
});

const searchStockSuccessed = (stockSearchData) => ({
  type: actionsTypes.SEARCH_STOCK_REQUEST_SUCCESSED,
  stockSearchData,
});

const addStockSuccessed = (stockData) => ({
  type: actionsTypes.ADD_STOCK_REQUEST_SUCCESSED,
  stockData,
});

export const signUpAction = (newUserData) => {
  return async (dispatch) => {
    //dispatch loader maybe
    try {
      const res = await addNewUser(newUserData);
      if (res.data) {
        dispatch(signUpRequestSuccessed(res.data));
      } else {
        dispatch(signUpRequestFailed(res.data.message));
      }
    } catch (error) {
      dispatch(signUpRequestFailed("error"));
    }
  };
};

export const signInAction = (loginUserData) => {
  return async (dispatch) => {
    //dispatch loader maybe
    try {
      const res = await validateUser(loginUserData);
      console.log("in log in: ", res.data);
      dispatch(signInRequestSuccessed(res.data));
    } catch (error) {
      console.log(error.message);
      //dispatch(signUpRequestFailed());
    }
  };
};

export const checkUserTokenAction = () => {
  return async (dispatch) => {
    //dispatch loader maybe
    try {
      const res = await getUserDataOnStart();
      dispatch(checkTokenRequestSuccessed(res.data));
    } catch (error) {}
  };
};

export const addStockAction = (stock) => {
  return async (dispatch) => {
    //dispatch loader maybe
    try {
      const res = await addStock(stock);
      console.log("res: ", res);
      if (res) dispatch(addStockSuccessed(res.data));
    } catch (error) {}
  };
};

export const searchStockAction = (stockSearchKey, portfolioId) => {
  return async (dispatch) => {
    //dispatch loader maybe
    try {
      const res = await searchStock(stockSearchKey, portfolioId);
      console.log("res: ", res.data);
      dispatch(searchStockSuccessed(res));
    } catch (error) {}
  };
};
