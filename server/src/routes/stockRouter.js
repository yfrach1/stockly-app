const express = require("express");
const stockRouter = express.Router();
const {
   addStock,
   deleteStock,
   getAPIStockData,
   getAPIStockMetaData,
   getAPISearchData,
} = require("../controllers/stockContorller");
const authenticateToken = require("../middlewares/authenticateToken");

stockRouter.post("/", authenticateToken, addStock);
stockRouter.delete("/", authenticateToken, deleteStock);
stockRouter.get("/stockdata", authenticateToken, getAPIStockData);
stockRouter.get("/metadata", authenticateToken, getAPIStockMetaData);
stockRouter.get("/searchdata", authenticateToken, getAPISearchData);

module.exports = stockRouter;
