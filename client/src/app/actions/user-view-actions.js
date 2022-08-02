import actionsTypes from "./constants";
import { getStockDetails, getPortfolioDetails, getStockNews } from "../services/stockService";

const getStockNewsSuccessed = (stockNews) => ({
   type: actionsTypes.GET_STOCK_NEWS_REQUEST_SUCCESSED,
   payload: { stockNews },
});

const hideToast = () => ({
   type: actionsTypes.HIDE_TOAST,
});

export const hideToastAction = () => {
   return (dispatch) => dispatch(hideToast());
};

// export const getPortfolioHistorysAction = (stocks) => {
//   return async (dispatch) => {
//     try {
//       const stockData = await getPortfolioDetails(stocks);
//       //need to return and dispatch
//     } catch (error) {}
//   };
// };

export const getStockNewsAction = (stock) => {
   return async (dispatch) => {
      try {
         const stockNews = await getStockNews(stock.ticker);
         dispatch(getStockNewsSuccessed(stockNews));
      } catch (error) {
         console.log(error);
      }
   };
};
