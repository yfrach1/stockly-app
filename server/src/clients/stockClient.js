const API_KEY = process.env.API_KEY;
const fetch = (...args) => import("node-fetch").then(({ default: fetch }) => fetch(...args));

const getStockData = async (stockQuery) => {
   const API_URL = "https://api.tiingo.com/tiingo/daily/";
   try {
      const params = new URLSearchParams({
         startDate: stockQuery.startDate, //YYYY-MM-DD
         endDate: stockQuery.endDate, //YYYY-MM-DD
         resampleFreq: stockQuery.resampleFreq, // daily/weekly/monthly
         token: API_KEY,
      });

      let keysToDelete = [];
      params.forEach((value, key) => {
         if (value == "") {
            keysToDelete.push(key);
         }
      });
      keysToDelete.forEach((key) => {
         params.delete(key);
      });

      const ticker = stockQuery.ticker;
      const URL = `${API_URL}${ticker}/prices?${params.toString()}`;
      const stockData = await fetch(URL);

      return await stockData.json();
   } catch (error) {
      console.error(error);
   }
};

const getStockMetaData = async (query) => {
   const API_URL = "https://api.tiingo.com/tiingo/daily/";
   try {
      const params = new URLSearchParams({
         token: API_KEY,
      });

      const URL = `${API_URL}${query.ticker}?${params.toString()}`;
      const stockData = await fetch(URL);

      return await stockData.json();
   } catch (error) {
      console.error(error);
   }
};

const searchStock = async (searchQuery) => {
   const API_URL = "https://api.tiingo.com/tiingo/utilities/search?";
   try {
      const params = new URLSearchParams({
         query: searchQuery.query,
         token: API_KEY,
      });

      const URL = `${API_URL}${params.toString()}`;
      const searchData = await fetch(URL);

      return await searchData.json();
   } catch (error) {
      console.error(error);
   }
};

module.exports = {
   getStockData,
   getStockMetaData,
   searchStock,
};

// const stockQuery = {
//    startDate: "2022-07-20",
//    endDate: "",
//    resampleFreq: "",
//    ticker: "AMZN",
// };
