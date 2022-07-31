import actionsTypes from "./constants";
import { getStockDetails, getPortfolioDetails } from "../services/stockService";

export const getPortfolioHistorysAction = (stocks) => {
  return async (dispatch) => {
    try {
      const stockData = await getPortfolioDetails(stocks);
      //need to return and dispatch
    } catch (error) {}
  };
};
