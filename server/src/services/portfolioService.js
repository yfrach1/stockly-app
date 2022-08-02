const { Portfolio, Portfolio_performance } = require("../../storage/models");
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

   async getPortfolioPerformanceData(portfolioId) {
      return portfolioId;
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

schedule.scheduleJob(scheduleRuleMaker(0, 0, 18), updatePortoflioPerformanceStocks); // runs at 18:00:00
schedule.scheduleJob(scheduleRuleMaker(0, 0, 01), updatePortoflioPerformanceStocks); // runs at 01:00:00

module.exports = new PortfolioManager();
