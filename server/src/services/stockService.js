const { Stock, Portfolio } = require("../../storage/models");
const stockClient = require("../clients/stockClient");
const { Op, InstanceError } = require("sequelize");

class StockManager {
  formatStocks(stock) {
    const stockData = {
      stock_id: stock.dataValues.stock_id,
      portfolio_id: stock.dataValues.portfolio_id,
      ticker: stock.dataValues.ticker,
      name: stock.dataValues.name,
      price: stock.dataValues.price,
      change_percent: stock.dataValues.change_percent,
      quantity: stock.dataValues.quantity,
      isMine: true,
    };

    return stockData;
  }
  async _searchStockInDB(portfolioId, searchKey) {
    const stocks = await Stock.findAll({
      where: {
        portfolio_id: portfolioId,
        [Op.or]: [
          { ticker: { [Op.substring]: searchKey } },
          { name: { [Op.substring]: searchKey } },
        ],
      },
    });
    console.log("stocks: ", stocks);
    const formateStockData = stocks.map((stock) => this.formatStocks(stock));
    return formateStockData;
  }

  async addStock(stock, user) {
    const UserPortfolio = await Portfolio.findOne({
      where: { user_id: user.id },
    });
    const response = await Stock.create({
      portfolio_id: UserPortfolio.portfolio_id,
      name: stock.name,
      ticker: stock.ticker,
      quantity: stock.quantity,
      price: stock.price,
      change_percent: stock.change_percent,
    });

    return response;
  }

  async updateStock(stock_id, price, change_percent) {
    const stock = await Stock.findOne({ where: { stock_id } });
    await stock.update({
      price,
      price,
      change_percent,
    });
  }

  doesTickerExistInDb(ticker, stocksDetailsFromDB) {
    return stocksDetailsFromDB.some((stock) => {
      return stock.ticker == ticker;
    });
  }

  _compareStockLastUpdatedDay(date1, date2) {
    if (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    )
      return true;
    else return false;
  }

  async searchStock(stockSearchKey, portfolioId) {
    const stocksDetailsFromDB = await this._searchStockInDB(
      portfolioId,
      stockSearchKey
    );
    if (!stockSearchKey.length) {
      return stocksDetailsFromDB;
    }
    console.log("stocksDetailsFromDB: ", stocksDetailsFromDB);
    const stocksDetailsFromApi = await stockClient.searchStock(stockSearchKey);
    const searchResult = stocksDetailsFromApi.map((result) => {
      result.isMine = this.doesTickerExistInDb(
        result.ticker,
        stocksDetailsFromDB
      );
      return result;
    });
    return searchResult;
  }

  async deleteStock(stockId) {
    const response = await Stock.destroy({ where: { stock_id: stockId } });

    return response;
  }

  async updateStockQuantity(stock, user) {
    const quantity = stock.quantity;
    const stockToUpdate = await Stock.findOne({
      where: { stock_id: stock.stock_id },
    });
    const res = await stockToUpdate.update({
      quantity,
    });

    return res;
  }
}

module.exports = new StockManager();
