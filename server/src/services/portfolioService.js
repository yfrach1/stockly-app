const {
  Portfolio,
  Portfolio_performance,
  Stock,
} = require("../../storage/models");
const schedule = require("node-schedule");
const Sequelize = require("sequelize");
const stockClient = require("../clients/stockClient");

async function updatePortoflioPerformanceStocks() {
  // Updates db rows with new end of day stock data if not exist already
  const distinctValues = await Portfolio_performance.findAll({
    attributes: [[Sequelize.fn("DISTINCT", Sequelize.col("ticker")), "ticker"]],
  });
  distinctTickers = distinctValues.map((stock) => stock.ticker);

  let stockQuery = {
    ticker: "",
    startDate: "",
    endDate: "",
    resampleFreq: "",
  };

  const newStocksDataResults = await Promise.all(
    distinctTickers.map(async (ticker) => {
      stockQuery.ticker = ticker;
      let fullStockDetails = await stockClient.getStockDataAPI(stockQuery);
      fullStockDetails = fullStockDetails[0];
      fullStockDetails.ticker = ticker;

      return fullStockDetails;
    })
  );

  newStocksDataResults.forEach(async (stock) => {
    const rowExistInDB = await Portfolio_performance.findOne({
      where: { ticker: stock.ticker, date: stock.date },
    });
    if (!rowExistInDB) {
      Portfolio_performance.create({
        ticker: stock.ticker,
        date: stock.date,
        open: stock.open,
        close: stock.close,
        low: stock.low,
        high: stock.high,
        volume: stock.volume,
      });
    }
  });
}

class PortfolioManager {
  async createPortfolio(portfolio) {
    const response = await Portfolio.create(portfolio);

    return response;
  }

  async _getStocksByPortfolioId(portfolioId) {
    const portfolioStocks = await Stock.findAll({
      where: {
        portfolio_id: portfolioId,
      },
    });
    return portfolioStocks;
  }

  async getPortfolioPerformanceData(portfolioId) {
    //  const portfolioStocks = await Stock.findAll({
    //    where: {
    //      portfolio_id: portfolioId,
    //    },
    //  });
    const portfolioStocks = this._getStocksByPortfolioId(portfolioId);

    const historicalDataByTicker = await this._getDBHistoricalDataByTicker(
      portfolioStocks
    );
    let summedPortfolioData = this._calcPortfolioSum(
      portfolioStocks,
      historicalDataByTicker
    );
    summedPortfolioData.sort((a, b) => new Date(b.date) - new Date(a.date));

    const { last12MonthRevenue, last12MonthDiffPercent } =
      this._calcRevAndDiff(summedPortfolioData);

    return { summedPortfolioData, last12MonthRevenue, last12MonthDiffPercent };
  }

  async _getDBHistoricalDataByTicker(portfolioStocks) {
    return await Promise.all(
      portfolioStocks.map(async (stock) => {
        return await Portfolio_performance.findAll({
          where: {
            ticker: stock.ticker,
          },
          order: [["date", "ASC"]],
        });
      })
    );
  }

  _calcPortfolioSum(portfolioStocks, historicalDataByTicker) {
    const totalPortfolioValues = {};

    for (let i = 0; i < historicalDataByTicker.length; i++) {
      let data = historicalDataByTicker[i];
      const stockQuantity = portfolioStocks[i].quantity;
      for (const stockPrice of data) {
        if (!totalPortfolioValues[stockPrice.date]) {
          totalPortfolioValues[stockPrice.date] = 0;
        }

        totalPortfolioValues[stockPrice.date] +=
          stockPrice.close * stockQuantity;
      }
    }

    let summedPortfolioData = Object.entries(totalPortfolioValues).map(
      ([date, value]) => ({
        date,
        value,
      })
    );

    return summedPortfolioData;
  }

  _calcRevAndDiff(summedPortfolioData) {
    const last12MonthRevenue = (
      summedPortfolioData[0].value - summedPortfolioData[252].value
    ).toFixed(2);

    const last12MonthDiffPercent = (
      (summedPortfolioData[0].value / summedPortfolioData[252].value - 1) *
      100
    ).toFixed(2);

    return { last12MonthRevenue, last12MonthDiffPercent };
  }
}

function scheduleRuleMaker(sec, min, hr) {
  let rule = new schedule.RecurrenceRule();
  rule.second = sec;
  rule.minute = min;
  rule.hour = hr;
  rule.tz = "America/New_York"; // Time zone

  return rule;
}

schedule.scheduleJob(
  scheduleRuleMaker(0, 0, 18),
  updatePortoflioPerformanceStocks
); // runs at 18:00:00
schedule.scheduleJob(
  scheduleRuleMaker(0, 0, 01),
  updatePortoflioPerformanceStocks
); // runs at 01:00:00

module.exports = new PortfolioManager();
