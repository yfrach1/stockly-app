const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
require("dotenv").config();
// const api = require("./src/routes/itemRouter");

const main = async () => {
   const app = express();
   var cors = require("cors");

   app.use(cors(), bodyParser.json(), bodyParser.urlencoded({ extended: false }));
   // app.use("/", api);
   // app.use(express.static(path.resolve(__dirname, "../client/build")));

   const port = process.env.PORT || "8000";
   app.listen(port, function () {
      console.log("Running on " + port);
   });
};

main();
