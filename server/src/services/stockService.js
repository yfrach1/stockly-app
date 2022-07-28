const { Stock, Portfolio } = require("../../storage/models");
const stockClient = require("../clients/stockClient");
const { Op, InstanceError } = require("sequelize");

class StockManager {
  async _searchStockInDB(portfolioId, searchKey) {
    const stocks = await Stock.findAll({
      where: {
        portfolio_id: portfolioId,
        name: { [Op.substring]: searchKey },
      },
    });

    return stocks;
  }
  async addStock(stockSearchKey, user) {
    //  console.log("stockSearchKeyddd: ", stockSearchKey);
    stockClient.searchStock(stockSearchKey);

    //  const UserPortfolio = await Portfolio.findOne({
    //    where: { user_id: user.id },
    //  });
    //  console.log(UserPortfolio);
    //  const response = await Stock.create({
    //    portfolio_id: UserPortfolio.portfolio_id,
    //    name: stockData.name,
    //    ticker: stockData.ticker,
    //    quantity: stockData.quantity,
    //  });

    //  return response;
    return null;
  }

  async searchStock(stockSearchKey, portfolioId) {
    const stocksDetailsFromDB = await this._searchStockInDB(
      stockSearchKey,
      portfolioId
    );
    const myTickers = stocksDetailsFromDB.map((stock) => stock.ticker);

    //  console.log("stocksDetailsFromDB: ", stocksDetailsFromDB);
    const stocksDetailsFromApi = await stockClient.searchStock(
      stockSearchKey,
      portfolioId
    );
    //  console.log("search result: ", stocksDetailsFromApi);

    let searchResult = [...stocksDetailsFromApi];
    for (let i = 0; i < stocksDetailsFromApi.length; i++) {
      searchResult[i].isMine = myTickers.includes(
        stocksDetailsFromApi[i].ticker
      )
        ? true
        : false;
    }

    console.log("searchResult: ", searchResult);

    return null;
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
