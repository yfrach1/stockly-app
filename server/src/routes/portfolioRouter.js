const express = require("express");
const portfolioRouter = express.Router();
const { createPortfolio } = require("../controllers/portfolioContorller");

portfolioRouter.post("/", createPortfolio);

module.exports = portfolioRouter;
