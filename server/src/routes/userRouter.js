const express = require("express");
const userRouter = express.Router();
const { createUser, loginUser } = require("../controllers/userContorller");

userRouter.post("/", createUser);
userRouter.get("/", loginUser);

module.exports = userRouter;
