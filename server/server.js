const express = require("express");
const path = require("path");
require("express-async-errors");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const userRouter = require("./server/src/routes/userRouter");
const portfolioRouter = require("./server/src/routes/portfolioRouter");
const stockRouter = require("./server/src/routes/stockRouter");
const cors = require("cors");

const app = express();

app.use(
  express.json(),
  cors({ origin: "http://localhost:3000", credentials: true })
);
app.use(cookieParser());

app.use("/user", userRouter);
app.use("/portfolio", portfolioRouter);
app.use("/stock", stockRouter);
app.use(express.static(path.join(__dirname, "/server/public")));

const port = process.env.PORT || "8080";
app.listen(port, function () {
  console.log("Running on " + port);
});
