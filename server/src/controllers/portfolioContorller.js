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
      .json({ summedPortfolioData, portfolioRevenue, portfolioDiffPercent });
  } else {
    res.status(500).json({ error: "Could not get data" });
  }
}

module.exports = {
  createPortfolio,
  getPortfolioPerformanceData,
};
