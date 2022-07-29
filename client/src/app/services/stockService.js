const axios = require("axios");
const url = "http://localhost:8080/stock";
axios.defaults.withCredentials = true;

export const addStock = async (stock) => {
   const body = {
      stock,
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
   const myStocks = response.data.filter((stock) => (stock.isMine ? true : false));
   console.log(`my stocks: ${myStocks}`);
   const searchStocks = response.data.filter((stock) => (stock.isMine ? false : true));
   console.log(`search stocks: ${searchStocks}`);

   return { myStocks, searchStocks };
};

export const getStockDetails = async (ticker) => {
   const today = new Date();
   today.setMonth(today.getMonth() - 12);
   const startDate = today.toISOString().split("T")[0];

   const body = {
      ticker: ticker,
      startDate: startDate,
      endDate: "",
      resampleFreq: "",
   };

   const response = await axios.post(`${url}/stockdata`, body);

   return response;
};
