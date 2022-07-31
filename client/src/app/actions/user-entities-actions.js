import actionsTypes from "./constants";
import { addNewUser, validateUser, getUserDataOnStart, logOutUser } from "../services/userService";
import { addStock, getStockDetails, searchStock, deleteStock } from "../services/stockService";

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

const deleteStockSuccessed = (stockId) => ({
   type: actionsTypes.DELETE_STOCK_REQUEST_SUCCESSED,
   stockId,
});

export const signUpAction = (newUserData) => {
   return async (dispatch) => {
      dispatch(signUpRequest());
      try {
         const res = await addNewUser(newUserData);
         if (res.data) {
            dispatch(signUpRequestSuccessed(res.data));
         } else {
            dispatch(signUpRequestFailed(res.data.message));
         }
      } catch (error) {
         // const stopLoadin = setTimeout(() => {
         //   dispatch(signUpRequestFailed("error"));
         // }, 1000);
         // stopLoadin();
         dispatch(signUpRequestFailed("error"));
      }
<<<<<<< HEAD
    } catch (error) {
      const stopLoadin = setTimeout(() => {
        dispatch(signUpRequestFailed("error"));
      }, 1000);
      stopLoadin();
      //dispatch(signUpRequestFailed("error"));
    }
  };
};

export const signInAction = (loginUserData) => {
  return async (dispatch) => {
    dispatch(signInRequest());
    try {
      const res = await validateUser(loginUserData);
      const stopLoadin = setTimeout(() => {
        dispatch(signInRequestSuccessed(res.data));
      }, 1500);
      stopLoadin();
      // dispatch(signInRequestSuccessed(res.data));
    } catch (error) {
      console.log(error.message);
      //dispatch(signUpRequestFailed());
    }
  };
};

export const checkUserTokenAction = () => {
  return async (dispatch) => {
    //dispatch loader maybe
    dispatch(checkTokenRequest());
    try {
      const res = await getUserDataOnStart();
      // console.log("in success check token: ", res.data);
      // dispatch(checkTokenRequestSuccessed(res.data));
      setTimeout(() => {
        console.log("res.data: ", res.data);
        dispatch(checkTokenRequestSuccessed(res.data));
      }, 1500);

      // dispatch(checkTokenRequestSuccessed(res.data));
    } catch (error) {
      console.log("in failed check token: ", error);
      dispatch(checkTokenRequestFailed());
    }
  };
=======
   };
};

export const signInAction = (loginUserData) => {
   return async (dispatch) => {
      dispatch(signInRequest());
      try {
         const res = await validateUser(loginUserData);
         console.log("sign in action res:", res);
         dispatch(signInRequestSuccessed(res.data));
      } catch (error) {
         console.log(error.message);
         //dispatch(signUpRequestFailed());
      }
   };
};

export const signOutAction = () => {
   return async (dispatch) => {
      dispatch(signInRequest());
      try {
         const res = await logOutUser();
         dispatch(signOutRequestSuccessed(res));
      } catch (error) {
         console.log(error.message);
      }
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
>>>>>>> 84acf34ec58e57ed25cf237abf874f6ba865bcbe
};

export const addStockAction = (stock) => {
  console.log("in add stock action");
  return async (dispatch) => {
    //dispatch loader maybe
    try {
      const res = await addStock(stock);
      console.log("stock: ", stock);
      console.log("res: ", res);
      if (res) dispatch(addStockSuccessed(stock.ticker));
    } catch (error) {}
  };
};

export const deleteStockAction = (stockId) => {
   return async (dispatch) => {
      try {
         const res = await deleteStock(stockId);
         console.log("res inside action: ", res);
         if (res) dispatch(deleteStockSuccessed(stockId));
      } catch (error) {}
   };
};

export const searchStockAction = (stockSearchKey, portfolioId) => {
   return async (dispatch) => {
      //dispatch loader maybe
      dispatch(searchStockRequest());
      try {
         const res = await searchStock(stockSearchKey, portfolioId);
         dispatch(searchStockSuccessed(res.data));
      } catch (error) {
         dispatch(searchStockFailed());
      }
   };
};
