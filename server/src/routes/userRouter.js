const express = require("express");
const userRouter = express.Router();
const { createUser, loginUser, getUserData, logoutUser } = require("../controllers/userContorller");
const authenticateToken = require("../middlewares/authenticateToken");

userRouter.post("/sign-up", createUser);
userRouter.post("/sign-in", loginUser);
userRouter.get("/", authenticateToken, getUserData);
userRouter.get("/logout", authenticateToken, logoutUser);

module.exports = userRouter;
