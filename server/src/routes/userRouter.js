const express = require("express");
const userRouter = express.Router();
const { createUser, getUser } = require("../controllers/userContorller");

userRouter.post("/", createUser);
userRouter.get("/id", getUser);

module.exports = userRouter;
