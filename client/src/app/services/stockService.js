const axios = require("axios");
const url = "http://localhost:8080";
axios.defaults.withCredentials = true;

export const addStock = async (stock) => {
  const body = {
    stock,
  };
  const response = await axios.post(`${url}/stock`, body);
  console.log(response);

  return response;
};

export const deleteStock = async (stockId, portfolioId) => {
  const response = await axios.delete(`${url}/stock`, {
    params: { id: stockId },
  });

  return response;
};

export const updateStockQuantity = async (id, quantity) => {
  const body = {
    id,
    quantity,
  };
  const response = await axios.put(`${url}/stock/update`, body);

  return response;
};

export const searchStock = async (stockSearchKey, portfolioId) => {
  const body = {
    stockSearchKey,
    portfolioId,
  };

  const response = await axios.post(`${url}/stock/search`, body);

  return response;
};

export const getStockDetails = async (ticker) => {
  const today = new Date();
  today.setMonth(today.getMonth() - 240);
  const startDate = today.toISOString().split("T")[0];

  const body = {
    ticker: ticker,
    startDate: startDate,
    endDate: "",
    resampleFreq: "",
  };

  const response = await axios.post(`${url}/stock/stockdata`, body);

  return response;
};

export const getHistoricalPortfolioData = async (portfolioId) => {
  const body = {
    portfolioId,
  };

  const res = await axios.post(`${url}/portfolio/performance`, body);
  return res;
};

export const getStockNews = async (tickers) => {
  const body = {
    tickers: tickers,
  };

  const response = await axios.post(`${url}/stock/news`, body);
  return response;
};
