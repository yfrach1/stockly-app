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
   const response = await axios.delete(`${url}`, { params: { id: stockId } });

   return response;
};

export const updateStockQuantity = async (ticker, quantity) => {
   const body = {
      ticker,
      quantity,
   };
   const response = await axios.put(`${url}/update`, body);

   return response;
};

export const searchStock = async (stockSearchKey, portfolioId) => {
   const body = {
      stockSearchKey,
      portfolioId,
   };

   const response = await axios.post(`${url}/search`, body);
   return response;

   //   console.log("response: ", response);
   //   const myStocks = response.data.filter((stock) =>
   //     stock.isMine ? true : false
   //   );
   //   console.log(`my stocks: ${myStocks}`);
   //   const searchStocks = response.data.filter((stock) =>
   //     stock.isMine ? false : true
   //   );
   //   console.log(`search stocks: ${searchStocks}`);

   //   return { myStocks, searchStocks };
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

   const response = await axios.post(`${url}/stockdata`, body);

   return response;
};

export const getPortfolioDetails = async (stocks) => {
   const stockQuantity = 4; // will use the user quantity in the future

   const totalPortfolioValues = {};
   console.log("starting totalPortfolioValues", totalPortfolioValues);

   for (let i = 0; i < stocks.length; i++) {
      let { data } = await getStockDetails(stocks[i].ticker);
      for (const stockPrice of data) {
         if (!totalPortfolioValues[stockPrice.date]) {
            totalPortfolioValues[stockPrice.date] = 0;
         }

         totalPortfolioValues[stockPrice.date] += stockPrice.close * stockQuantity;
      }
   }

   console.log("ending totalPortfolioValues", totalPortfolioValues);
   const list = Object.entries(totalPortfolioValues).map(([date, value]) => ({
      date,
      value,
   }));
   console.log(list);

   // return response;
};

export const getStockNews = async (tickers) => {
   const body = {
      tickers: tickers,
   };

   const response = await axios.post(`${url}/news`, body);
   console.log(response);
   return response;
};
