import actionsTypes from "./constants";

import { getHistoricalPortfolioData } from "../services/stockService";

const hideToast = () => ({
   type: actionsTypes.HIDE_TOAST,
});

const setPortfolioId = (portfolioId) => ({
   type: actionsTypes.SET_PORTFOLIO_ID,
   portfolioId,
});

const setDateFilter = (filter) => ({
   type: actionsTypes.SET_DATE_FILTER,
   filter,
});

export const hideToastAction = () => {
   return (dispatch) => dispatch(hideToast());
};

export const setPortfolioIdAction = (portfolioId) => {
   return async (dispatch) => {
      dispatch(setPortfolioId(portfolioId));
   };
};

export const setDateFilterAction = (filter) => {
   return async (dispatch) => {
      dispatch(setDateFilter(filter));
   };
};

export const setPortfolioData = (portfolioId) => {
   return async (dispatch) => {
      try {
         const res = await getHistoricalPortfolioData(portfolioId);
         console.log(res);
         // const { summedPortfolioData, portfolioRevenue, portfolioDiffPercent } = { ...res.data };
      } catch (error) {}
   };
};
