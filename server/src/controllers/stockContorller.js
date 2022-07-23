const stockService = require("../services/stockService");

async function createStock(req, res) {
   await stockService.createStock(req.body);
   res.status(200).json(req.body);
}

module.exports = {
   createStock,
};
