const { User, Portfolio, Stock } = require("../../storage/models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { response } = require("express");

class UserManager {
  async createUser(userData) {
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    userData.password = hashedPassword;

    if (await this._getUser(userData.email)) {
      return null;
    } else {
      return await User.create(userData);
    }
  }

  async loginUser(loginUserData) {
    let accessToken = null;
    const dbUserData = await this._getUser(loginUserData.email);

    if (
      dbUserData &&
      (await bcrypt.compare(loginUserData.password, dbUserData.password))
    ) {
      const user = {
        id: dbUserData.user_id,
        name: dbUserData.name,
        lastName: dbUserData.last_name,
      };
      accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "60m",
      });
    }

    return accessToken;
  }

  async getUserData(user) {
    response = await User.findByPk(user.id, {
      include: { model: Portfolio, include: Stock },
    });
    // console.log(response.dataValues.Portfolio.Stocks);
    return response;
  }

  async _getUser(email) {
    const response = await User.findOne({ where: { email: email } });

    return response ? response : null;
  }
}

module.exports = new UserManager();

// const userMock = {
//    email: "liortal@gmail.com",
//    password: "123456",
//    name: "Lior",
//    last_name: "Tal",
// };
