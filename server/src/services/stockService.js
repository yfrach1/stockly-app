const { Stock } = require("../../storage/models");

class StockManager {
  async createStock(stock) {
    const response = await Stock.create(stock);

    return response;
  }
}

module.exports = new StockManager();

// const stockMock = {
//    portfolio_id: "1",
//    name: "monday",
//    ticker: "MNDY",
//    quantity: 3,
// };
