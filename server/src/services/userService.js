const { User, Portfolio, Stock } = require("../../storage/models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

class UserManager {
  async createUser(userData) {
    if (await this._getUser(userData.email)) {
      return null;
    }
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    userData.password = hashedPassword;
    const dbUserData = await User.create(userData);
    const portfolio = await Portfolio.create({
      user_id: dbUserData.user_id,
      name: "My portfolio",
    });

    const data = {
      firstName: dbUserData.first_name,
      lastName: dbUserData.last_name,
      portfolio: {
        name: portfolio.name,
        id: portfolio.portfolio_id,
      },
    };
    const accessToken = await this._createAccessToken(dbUserData.user_id);
    //  console.log("data: ", data);
    //  console.log("accessToken: ", accessToken);
    return { accessToken, data };
  }

  async loginUser(loginUserData) {
    let accessToken = null;
    const dbUserData = await this._getUser(loginUserData.email);

    if (
      dbUserData &&
      (await bcrypt.compare(loginUserData.password, dbUserData.password))
    ) {
      accessToken = _createAccessToken(dbUserData);
    }
    const allUserData = getUserData(dbUserData.user_id);

    return { accessToken, allUserData };
  }

  async getUserData(userId) {
    const response = await User.findByPk(userId, {
      include: { model: Portfolio, include: Stock },
    });
    // console.log(response.dataValues.Portfolio.Stocks);
    return response;
  }

  async _createAccessToken(id) {
    const userId = {
      id,
    };
    const accessToken = jwt.sign(userId, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: "12h",
    });

    return accessToken;
  }

  async _getUser(email) {
    const response = await User.findOne({ where: { email: email } });

    return response ? response : null;
  }
}

module.exports = new UserManager();
