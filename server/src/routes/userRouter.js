const express = require("express");
const userRouter = express.Router();
const { createUser, getUser } = require("../controllers/userContorller");

userRouter.post("/user", createUser);
userRouter.get("/user/id", getUser);

module.exports = userRouter;
