const userService = require("../services/userService");
const portfolioService = require("../services/portfolioService");
async function createUser(req, res) {
  const { accessToken, userData } = await userService.createUser(req.body);

  accessToken
    ? res
        .status(200)
        .cookie("token", accessToken, { httpOnly: true })
        .send(userData)
    : res.status(409).send();
}

async function loginUser(req, res) {
  const { accessToken, userData, portfolioDetails } =
    await userService.loginUser(req.body);
  accessToken
    ? res
        .status(200)
        .cookie("token", accessToken, { httpOnly: true })
        .json({ userData, portfolioDetails })
    : res.status(409).send();
}

async function logoutUser(req, res) {
  res
    .status(200)
    .cookie("token", "", { maxAge: 1 })
    .send({ message: "User logged out" });
}

async function getUserData(req, res) {
  const userData = await userService.getUserData(req.user.id);
  const portfolioDetails = await portfolioService.getPortfolioPerformanceData(
    req.user.id
  );
  userData
    ? res.status(200).json({ userData, portfolioDetails })
    : res.status(401).json({ error: "Authorization denied" });
}

module.exports = {
  createUser,
  loginUser,
  getUserData,
  logoutUser,
};
