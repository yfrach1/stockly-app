const { User, Portfolio, Stock } = require("../../storage/models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

class UserManager {
  async createUser(newUserData) {
    if (await this._getUser(newUserData.email)) {
      return null;
    }
    const hashedPassword = await bcrypt.hash(newUserData.password, 10);
    newUserData.password = hashedPassword;
    const dbUserData = await User.create(newUserData);
    const portfolio = await Portfolio.create({
      user_id: dbUserData.user_id,
      name: "My portfolio",
    });

    const userData = {
      userId: dbUserData.user_id,
      firstName: dbUserData.first_name,
      lastName: dbUserData.last_name,
      portfolio: {
        name: portfolio.name,
        id: portfolio.portfolio_id,
      },
    };
    const accessToken = await this._createAccessToken(dbUserData.user_id);
    return { accessToken, userData };
  }

  async loginUser(loginUserData) {
    let accessToken = null;
    const dbUserData = await this._getUser(loginUserData.email);

    if (
      dbUserData &&
      (await bcrypt.compare(loginUserData.password, dbUserData.password))
    ) {
      accessToken = this._createAccessToken(dbUserData);
    }
    const userData = await this.getUserData(dbUserData.user_id);
    return { accessToken, userData };
  }

  async getUserData(userId) {
    const user = await User.findByPk(userId, {
      include: { model: Portfolio, include: Stock },
    });
    const { portfolio, stocks } = this._getPortfolioData(user.Portfolio);
    const userData = {
      userId: user.user_id,
      firstName: user.first_name,
      lastName: user.last_name,
      portfolio,
      stocks,
    };
    return userData;
  }

  _getPortfolioData(userPortfolio) {
    const portfolio = {
      name: userPortfolio.name,
      id: userPortfolio.portfolio_id,
    };
    const stocks = userPortfolio.Stocks;

    return { portfolio, stocks };
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
