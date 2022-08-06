const portfolioService = require("../services/portfolioService");

async function createPortfolio(req, res) {
  await portfolioService.createPortfolio(req.body);
  res.status(200).json(req.body);
}

async function getPortfolioPerformanceData(req, res) {
  portfolioDetails = await portfolioService.getPortfolioPerformanceData(
    req.user.id
  );
  portfolioDetails
    ? res.status(200).send(portfolioDetails)
    : res.status(200).send(null);
}

module.exports = {
  createPortfolio,
  getPortfolioPerformanceData,
};
