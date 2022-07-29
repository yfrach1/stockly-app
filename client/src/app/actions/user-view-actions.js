import actionsTypes from "./constants";
import { getStockDetails } from "../services/stockService";

const setSearchKey = (searchKey) => ({
   type: actionsTypes.SET_SEARCH_KEY,
   searchKey,
});

const getStockDetailsSuccessed = (stockData) => ({
   type: actionsTypes.GET_STOCK_DETAILS_REQUEST_SUCCESSED,
   stockData,
});

export const setSearchKeyAction = (searchKey) => {
   return async (dispatch) => {
      console.log(searchKey);
      dispatch(setSearchKey(searchKey));
   };
};

export const getStockDetailsAction = (ticker) => {
   return async (dispatch) => {
      //dispatch loader maybe
      try {
         const res = await getStockDetails(ticker);
         dispatch(getStockDetailsSuccessed(res));
      } catch (error) {}
   };
};
