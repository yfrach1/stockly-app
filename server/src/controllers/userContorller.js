const userService = require("../services/userService");

async function createUser(req, res) {
   await userService.createUser(req.body);
   res.status(200).json(req.body);
}

async function getUser(req, res) {
   // her will be getUser
}

module.exports = {
   createUser,
   getUser,
};
