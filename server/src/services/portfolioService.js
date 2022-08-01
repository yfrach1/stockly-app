const { Portfolio } = require("../../storage/models");

class PortfolioManager {
   async createPortfolio(portfolio) {
      const response = await Portfolio.create(portfolio);

      return response;
   }

   async getPortfolioPerformanceData(portfolioId) {
      return portfolioId;
   }
}

module.exports = new PortfolioManager();
