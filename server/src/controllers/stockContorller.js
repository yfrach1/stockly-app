const stockService = require("../services/stockService");

async function addStock(req, res) {
   const stockData = await stockService.addStock(req.body, req.user);
   stockData
      ? res.status(200).json(stockData)
      : res.status(200).json({ error: "Could not create stock" });
}

async function deleteStock(req, res) {
   const stockData = await stockService.deleteStock(req.body.stockId);
   stockData
      ? res.status(200).json(req.body)
      : res.status(200).json({ error: "Could not delete stock" });
}
module.exports = {
   addStock,
   deleteStock,
};
