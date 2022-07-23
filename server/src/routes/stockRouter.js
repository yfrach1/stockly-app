const express = require("express");
const stockRouter = express.Router();
const { createStock } = require("../controllers/stockContorller");

stockRouter.post("/", createStock);

module.exports = stockRouter;
