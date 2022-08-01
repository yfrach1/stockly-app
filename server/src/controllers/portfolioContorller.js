const portfolioService = require("../services/portfolioService");

async function createPortfolio(req, res) {
   await portfolioService.createPortfolio(req.body);
   res.status(200).json(req.body);
}

async function getPortfolioPerformanceData(req, res) {
   portfolioId = req.body.portfolio_id;
   const performanceData = await portfolioService.getPortfolioPerformanceData(portfolioId);
   performanceData
      ? res.status(200).json(performanceData)
      : res.status(500).json({ error: "Could not get data" });
}

module.exports = {
   createPortfolio,
   getPortfolioPerformanceData,
};
