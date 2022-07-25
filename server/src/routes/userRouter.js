const express = require("express");
const userRouter = express.Router();
const { createUser, loginUser, getUserData } = require("../controllers/userContorller");
const authenticateToken = require("../middlewares/authenticateToken");

userRouter.post("/signup", createUser);
userRouter.post("/signIn", loginUser);
userRouter.get("/", authenticateToken, getUserData);

module.exports = userRouter;
