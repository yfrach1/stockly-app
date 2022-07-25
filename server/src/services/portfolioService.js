const { Portfolio } = require("../../storage/models");

class PortfolioManager {
  async createPortfolio(portfolio) {
    const response = await Portfolio.create(portfolio);

    return response;
  }
}

module.exports = new PortfolioManager();

// const portfolioMock = {
//    user_id: "1",
//    name: "my stocks",
// };
