const express = require("express");
// const path = require("path");
require("express-async-errors");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const userRouter = require("./src/routes/userRouter");
const portfolioRouter = require("./src/routes/portfolioRouter");
const stockRouter = require("./src/routes/stockRouter");
const cors = require("cors");

const app = express();

app.use(express.json(), cors({ origin: "http://localhost:3000", credentials: true }));
app.use(cookieParser());

app.use("/user", userRouter);
app.use("/portfolio", portfolioRouter);
app.use("/stock", stockRouter);
// app.use(express.static(path.resolve(__dirname, "../client/build")));

const port = process.env.PORT || "8080";
app.listen(port, function () {
   console.log("Running on " + port);
});
