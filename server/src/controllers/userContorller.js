const userService = require("../services/userService");

async function createUser(req, res) {
  const { accessToken, userData } = await userService.createUser(req.body);
  console.log("accessToken: ", accessToken);
  accessToken
    ? res
        .status(200)
        .cookie("token", accessToken, { httpOnly: true })
        .send(userData)
    : res.status(201).json({ error: "User already exist" });
}

async function loginUser(req, res) {
  console.log("req.body: ", req.body);

  const { accessToken, userData } = await userService.loginUser(req.body);
  console.log("accessToken: ", accessToken);
  console.log("userData: ", userData);
  accessToken
    ? res
        .status(200)
        .cookie("token", accessToken, { httpOnly: true })
        .json(userData)
    : res.status(409).json({ error: "Username or password is wrong" });
}

async function getUserData(req, res) {
  const userData = await userService.getUserData(req.user.id);
  userData
    ? res.status(200).json(userData)
    : res.status(401).json({ error: "Authorization denied" });
}

module.exports = {
  createUser,
  loginUser,
  getUserData,
};
