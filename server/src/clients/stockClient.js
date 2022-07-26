const Api = require("alphavantage")({ key: process.env.API_KEY });
const dataKindOptions = require("./constants");

class stockClient {
   async getStockData(stockSymbol, dataKind) {
      try {
         let stockData;

         switch (dataKind) {
            case dataKindOptions.INTRA_DAY:
               stockData = await Api.data.intraday(stockSymbol);
               break;
            case dataKindOptions.DAILY:
               stockData = await Api.data.daily(stockSymbol);
               break;
            case dataKindOptions.WEEKLY:
               stockData = await Api.data.weekly(stockSymbol);
               break;
            case dataKindOptions.MONTHLY:
               stockData = await Api.data.monthly(stockSymbol);
               break;
            case dataKindOptions.QUOTE:
               stockData = await Api.data.quote(stockSymbol);
               break;
         }

         return stockData;
      } catch (error) {
         console.error(error);
      }
   }

   async getStockSymbols(searchTerm) {
      try {
         return await Api.data.search(searchTerm);
      } catch (error) {
         console.error(error);
      }
   }
}

module.exports = new stockClient();
