import actionsTypes from "./constants";
import { getStockDetails, getPortfolioDetails ,getStockNews} from "../services/stockService";

const setSearchKey = (searchKey) => ({
  type: actionsTypes.SET_SEARCH_KEY,
  searchKey,
});

const getStockDetailsSuccessed = (stockData, stock) => ({
  type: actionsTypes.GET_STOCK_DETAILS_REQUEST_SUCCESSED,
  payload: { stockData, stock },
});
const getStockNewsSuccessed = (stockNews) => ({
  type: actionsTypes.GET_STOCK_NEWS_REQUEST_SUCCESSED,
  payload: { stockNews },
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
export const getStockNewsAction = (stock) => {
  return async (dispatch) => {
    try {
      const stockNews = await getStockNews(stock.ticker);
      dispatch(getStockNewsSuccessed(stockNews ));
    } catch (error) {
      console.log(error);
    }
  };
};
export const getPortfolioHistorysAction = (stocks) => {
   return async (dispatch) => {
      try {
         const stockData = await getPortfolioDetails(stocks);
         //need to return and dispatch
      } catch (error) {}
   };
};
