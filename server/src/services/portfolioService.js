const { Portfolio } = require("../../storage/models");

class PortfolioManager {
   async createPortfolio(portfolio) {
      const response = await Portfolio.create(portfolio);

      return response;
   }
}

module.exports = new PortfolioManager();

// Lior's note:
// Use this to code anywhere you want to create portfolios: (checked and works)
//
// const portfolioDB = require("./src/services/portfolioService");

// const portfolioMock = {
//    user_id: "1",
//    name: "my stocks",
// };
// const response = portfolioDB.createPortfolio(portfolioMock);
// console.log(response);
