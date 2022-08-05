const portfolioService = require("../services/portfolioService");

async function createPortfolio(req, res) {
  await portfolioService.createPortfolio(req.body);
  res.status(200).json(req.body);
}

async function getPortfolioPerformanceData(req, res) {
  portfolioId = req.body.portfolioId;
  portfolioData = await portfolioService.getPortfolioPerformanceData(
    portfolioId
  );
  if (portfolioData) {
    const { summedPortfolioData, portfolioRevenue, portfolioDiffPercent } =
      portfolioData;
    res
      .status(200)
      .send({ summedPortfolioData, portfolioRevenue, portfolioDiffPercent });
  } else {
    res.status(200).send(null);
  }
}

module.exports = {
  createPortfolio,
  getPortfolioPerformanceData,
};
