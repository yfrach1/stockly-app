const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
require("dotenv").config();
const userRouter = require("./src/routes/userRouter");
const portfolioRouter = require("./src/routes/portfolioRouter");

const main = async () => {
   const app = express();
   var cors = require("cors");

   app.use(cors(), bodyParser.json(), bodyParser.urlencoded({ extended: false }));
   app.use("/user", userRouter);
   app.use("/portfolio", portfolioRouter);
   // app.use(express.static(path.resolve(__dirname, "../client/build")));

   const port = process.env.PORT || "8000";
   app.listen(port, function () {
      console.log("Running on " + port);
   });
};

main();
