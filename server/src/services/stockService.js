const { Stock, Portfolio } = require("../../storage/models");

class StockManager {
  async addStock(stockData, user) {
    const UserPortfolio = await Portfolio.findOne({
      where: { user_id: user.id },
    });
    console.log(UserPortfolio);
    const response = await Stock.create({
      portfolio_id: UserPortfolio.portfolio_id,
      name: stockData.name,
      ticker: stockData.ticker,
      quantity: stockData.quantity,
    });

    return response;
  }

  async deleteStock(stockId) {
    const response = await Stock.destroy({ where: { stock_id: stockId } });

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
