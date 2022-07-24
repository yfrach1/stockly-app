const userService = require("../services/userService");

async function createUser(req, res) {
  const response = await userService.createUser(req.body);
  response
    ? res.status(200).json(req.body)
    : res.status(400).json({ error: "User already exist" });
}

async function getUser(req, res) {
  await userService.getUser(req.params.id);
  res.status(200).json(req.body);
}

module.exports = {
  createUser,
  getUser,
};
