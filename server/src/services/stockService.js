const { Stock } = require("../../storage/models");

class StockManager {
   async createStock(stock) {
      const response = await Stock.create(stock);

      return response;
   }
}

module.exports = new StockManager();

// Lior's note:
// Use this to code anywhere you want to create portfolios: (checked and works)
//
// const stockDB = require("./src/services/stockService");

// const stockMock = {
//    portfolio_id: "1",
//    name: "monday",
//    ticker: "MNDY",
//    quantity: 3,
// };
// const response = stockDB.createStock(stockMock);
// console.log(response);
