import actionsTypes from "./constants";
import { getStockDetails } from "../services/stockService";

const setSearchKey = (searchKey) => ({
  type: actionsTypes.SET_SEARCH_KEY,
  searchKey,
});

const getStockDetailsSuccessed = (stockData, stock) => ({
  type: actionsTypes.GET_STOCK_DETAILS_REQUEST_SUCCESSED,
  payload: { stockData, stock },
});

export const setSearchKeyAction = (searchKey) => {
  return async (dispatch) => {
    console.log(searchKey);
    dispatch(setSearchKey(searchKey));
  };
};

export const getStockDetailsAction = (stock) => {
  return async (dispatch) => {
    //dispatch loader maybe
    try {
      const stockData = await getStockDetails(stock.ticker);
      dispatch(getStockDetailsSuccessed({ stockData, stock }));
    } catch (error) {
      console.log(error);
    }
  };
};
