const axios = require("axios");
const url = "http://localhost:8080/stock";
axios.defaults.withCredentials = true;

export const addStock = async (stockSearchKey) => {
  const body = {
    stockSearchKey,
  };
  const response = await axios.post(`${url}`, body);

  return response;
};

export const deleteStock = async (stockId) => {
  const response = await axios.delete(`${url}`, stockId);

  return response;
};

export const searchStock = async (stockSearchKey, portfolioId) => {
  const body = {
    stockSearchKey,
    portfolioId,
  };
  //   console.log("searchKey: ", searchKey);

  const response = await axios.post(`${url}/search`, body);

  return response;
};
