const axios = require("axios");
const url = "http://localhost:8080/stock";
axios.defaults.withCredentials = true;

export const addStock = async (stockData) => {
   const response = await axios.post(`${url}`, stockData);

   return response;
};
