const userService = require("../services/userService");

async function createUser(req, res) {
  console.log("in");

  return res.status(200).json("good");
  await userService.createUser(req.body);
  res.status(200).json(req.body);
}

async function getUser(req, res) {
  await userService.getUser(req.params.id);
  res.status(200).json(req.body);
}

module.exports = {
  createUser,
  getUser,
};
