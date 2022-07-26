const userService = require("../services/userService");

async function createUser(req, res) {
  const accessToken = await userService.createUser(req.body);
  accessToken
    ? res
        .status(200)
        .cookie("token", accessToken, { httpOnly: true })
        .json({ message: "User created successfuly" })
    : res.status(200).json(null);
}

async function loginUser(req, res) {
  const accessToken = await userService.loginUser(req.body);

  accessToken
    ? res
        .status(200)
        .cookie("token", accessToken, { httpOnly: true })
        .json({ message: "Login successful" })
    : res.status(200).json({ error: "Username or password is wrong" });
}

async function getUserData(req, res) {
  const userData = await userService.getUserData(req.user);
  userData
    ? res.status(200).json(userData)
    : res.status(401).json({ error: "Authorization denied" });
}

module.exports = {
  createUser,
  loginUser,
  getUserData,
};
