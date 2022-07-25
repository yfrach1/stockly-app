const userService = require("../services/userService");

async function createUser(req, res) {
   const response = await userService.createUser(req.body);
   response
      ? res.status(200).json(req.body)
      : res.status(400).json({ error: "User already exist" });
}

async function loginUser(req, res) {
   const userData = await userService.loginUser(req.body);
   userData
      ? res.status(200).json(userData)
      : res.status(400).json({ error: "Username or password is wrong" });
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
