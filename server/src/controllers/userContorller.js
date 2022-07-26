const userService = require("../services/userService");

async function createUser(req, res) {
  const { accessToken, data } = await userService.createUser(req.body);

  accessToken
    ? res
        .status(200)
        .cookie("token", accessToken, { httpOnly: true })
        .send(data)
    : res.status(201).json({ error: "User already exist" });
}

async function loginUser(req, res) {
  const { accessToken, allUserData } = await userService.loginUser(req.body);

  accessToken
    ? res
        .status(200)
        .cookie("token", accessToken, { httpOnly: true })
        .json(allUserData)
    : res.status(200).json({ error: "Username or password is wrong" });
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
