const stockService = require("../services/stockService");
const { getStockData, getStockMetaData, searchStock } = require("../clients/stockClient");

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

async function getAPIStockData(req, res) {
   const stockData = await getStockData(req.body);
   stockData
      ? res.status(200).json(stockData)
      : res.status(200).json({ error: "Could not find stock" });
}

async function getAPIStockMetaData(req, res) {
   const stockData = await getStockMetaData(req.body);
   stockData
      ? res.status(200).json(stockData)
      : res.status(200).json({ error: "Could not find stock" });
}

async function getAPISearchData(req, res) {
   const searchData = await searchStock(req.body);
   searchData
      ? res.status(200).json(searchData)
      : res.status(200).json({ error: "Could not search" });
}

module.exports = {
   addStock,
   deleteStock,
   getAPIStockData,
   getAPIStockMetaData,
   getAPISearchData,
};
