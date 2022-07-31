const express = require("express");
const stockRouter = express.Router();
const {
   addStock,
   searchStock,
   deleteStock,
   getAPIStockData,
   getAPIStockMetaData,
   getAPISearchData,
   getStockNews,
   updateStockQuantity,
} = require("../controllers/stockContorller");
const authenticateToken = require("../middlewares/authenticateToken");

stockRouter.post("/", authenticateToken, addStock);
stockRouter.post("/search", authenticateToken, searchStock);
stockRouter.delete("/", authenticateToken, deleteStock);
stockRouter.post("/stockdata", authenticateToken, getAPIStockData);
stockRouter.get("/metadata", authenticateToken, getAPIStockMetaData);
stockRouter.get("/searchdata", authenticateToken, getAPISearchData); // ?
stockRouter.post("/news", authenticateToken, getStockNews);
stockRouter.put("/update", authenticateToken, updateStockQuantity);

module.exports = stockRouter;
