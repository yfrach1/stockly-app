const portfolioService = require("../services/portfolioService");

async function createPortfolio(req, res) {
   await portfolioService.createPortfolio(req.body);
   res.status(200).json(req.body);
}

module.exports = {
   createPortfolio,
};
