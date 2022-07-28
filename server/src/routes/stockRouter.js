const express = require("express");
const stockRouter = express.Router();
const {
   addStock,
   searchStock,
   deleteStock,
   getAPIStockData,
   getAPIStockMetaData,
   getAPISearchData,
} = require("../controllers/stockContorller");
const authenticateToken = require("../middlewares/authenticateToken");

stockRouter.post("/", authenticateToken, addStock);
stockRouter.post("/search", authenticateToken, searchStock);
stockRouter.delete("/", authenticateToken, deleteStock);
stockRouter.get("/stockdata", authenticateToken, getAPIStockData);
stockRouter.get("/metadata", authenticateToken, getAPIStockMetaData);
stockRouter.get("/searchdata", authenticateToken, getAPISearchData); // ?

module.exports = stockRouter;
