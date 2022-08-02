const {
  Stock,
  Portfolio,
  Portfolio_performance,
} = require("../../storage/models");
const stockClient = require("../clients/stockClient");
const { Op } = require("sequelize");

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

    this._addHistoricalDataToDB(stock);

    return response;
  }

  async updateStock(stock_id, price, change_percent) {
    const stock = await Stock.findOne({ where: { stock_id } });
    await stock.update({
      price,
      change_percent,
    });
  }

  async _tickerExistInPerformanceDB(ticker) {
    return await Portfolio_performance.findOne({ where: { ticker } });
  }

  async getStockData(stockQuery) {
    if (await this._tickerExistInPerformanceDB(stockQuery.ticker)) {
      const stockDataDB = await Portfolio_performance.findAll({
        where: {
          ticker: stockQuery.ticker,
        },
        order: [["date", "ASC"]],
      });

      return stockDataDB;
    } else {
      return await stockClient.getStockDataAPI(stockQuery);
    }
  }

  async _addHistoricalDataToDB(stock) {
    const startDate = this._getStartDate20YearsAgo();
    const existInDB = await this._tickerExistInPerformanceDB(stock.ticker);
    if (!existInDB) {
      const stockQuery = {
        ticker: stock.ticker,
        startDate: startDate,
        endDate: "",
        resampleFreq: "",
      };
      const stocksDetailsFromApi = await stockClient.getStockDataAPI(
        stockQuery
      );

      const addToDbResponse = await Portfolio_performance.bulkCreate(
        stocksDetailsFromApi.map((dailyStockData) => {
          return {
            ticker: stock.ticker,
            date: dailyStockData.date,
            open: dailyStockData.open,
            close: dailyStockData.close,
            low: dailyStockData.low,
            high: dailyStockData.high,
            volume: dailyStockData.volume,
          };
        })
      );
    }
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
    const myTickers = stocksDetailsFromDB.map((stock) => stock.ticker);

    const stocksDetailsFromApi = await stockClient.searchStock(
      stockSearchKey,
      myTickers
    );

    return [...stocksDetailsFromApi, ...stocksDetailsFromDB];
  }

  async deleteStock(stockId) {
    const response = await Stock.destroy({ where: { stock_id: stockId } });

    return response;
  }

  _getStartDate20YearsAgo() {
    const today = new Date();
    today.setMonth(today.getMonth() - 240);
    const startDate = today.toISOString().split("T")[0];

    return startDate;
  }

  async updateStockQuantity(stock_id, quantity) {
    console.log("stock_id: ", stock_id);
    const stockToUpdate = await Stock.findOne({
      where: { stock_id },
    });
    const res = await stockToUpdate.update({
      quantity,
    });

    return res;
  }
}

module.exports = new StockManager();
