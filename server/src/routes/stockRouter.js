const express = require("express");
const stockRouter = express.Router();
const { addStock, deleteStock } = require("../controllers/stockContorller");
const authenticateToken = require("../middlewares/authenticateToken");

stockRouter.post("/", authenticateToken, addStock);
stockRouter.delete("/", authenticateToken, deleteStock);

module.exports = stockRouter;
