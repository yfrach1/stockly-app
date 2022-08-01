const express = require("express");
const portfolioRouter = express.Router();
const {
   createPortfolio,
   getPortfolioPerformanceData,
} = require("../controllers/portfolioContorller");
const authenticateToken = require("../middlewares/authenticateToken");

portfolioRouter.post("/", createPortfolio);
portfolioRouter.post("/performance", authenticateToken, getPortfolioPerformanceData);

module.exports = portfolioRouter;
