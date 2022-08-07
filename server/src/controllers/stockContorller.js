const stockService = require("../services/stockService");
const {
  getStockData,
  getStockMetaData,
  getAPIStockNews,
} = require("../clients/stockClient");

async function addStock(req, res) {
  const stock = req.body.stock;
  const stockData = await stockService.addStock(stock, req.user);

  stockData
    ? res.status(200).json(stockData)
    : res.status(200).json({ error: "Could not add stock" });
}

async function searchStock(req, res) {
  const stockSearchKey = req.body.stockSearchKey;
  const portfolioId = req.body.portfolioId;
  const stockData = await stockService.searchStock(stockSearchKey, portfolioId);
  stockData
    ? res.status(200).json(stockData)
    : res.status(200).json({ error: "Could not search stock" });
}

async function deleteStock(req, res) {
  stockIdToDelete = req.originalUrl.split("=")[1];
  const stockData = await stockService.deleteStock(stockIdToDelete);

  stockData
    ? res.status(200).json(stockIdToDelete)
    : res.status(200).json({ error: "Could not delete stock" });
}

async function getAPIStockData(req, res) {
  const stockData = await stockService.getStockData(req.body);
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

async function getStockNews(req, res) {
  const newsArticles = await getAPIStockNews(req.body);
  newsArticles
    ? res.status(200).json(newsArticles)
    : res.status(200).json({ error: "Could not find news" });
}

async function updateStockQuantity(req, res) {
  const id = req.body.id;
  const quantity = req.body.quantity;

  const stockData = await stockService.updateStockQuantity(id, quantity);
  stockData
    ? res.status(200).json(stockData)
    : res.status(200).json({ error: "Could not add stock" });
}

module.exports = {
  addStock,
  deleteStock,
  getAPIStockData,
  getAPIStockMetaData,
  getAPISearchData,
  searchStock,
  getStockNews,
  updateStockQuantity,
};
