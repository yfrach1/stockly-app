const { User, Portfolio, Stock } = require("../../storage/models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { use } = require("bcrypt/promises");

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
      firstName: dbUserData.first_name,
      lastName: dbUserData.last_name,
      portfolio: {
        name: portfolio.name,
        id: portfolio.portfolio_id,
      },
    };
    const accessToken = await this._createAccessToken(dbUserData.user_id);
    console.log("userData: ", userData);
    console.log("accessToken: ", accessToken);
    return { accessToken, userData };
  }

  async loginUser(loginUserData) {
    let accessToken = null;
    let userData = null;

    const userId = await this._isUserValid(loginUserData);
    console.log("userId: ", userId);
    if (userId) {
      accessToken = await this._createAccessToken(userId);
      userData = await this.getUserData(userId);
    }
    return { accessToken, userData };
  }

  async getUserData(userId) {
    const user = await User.findByPk(userId, {
      include: { model: Portfolio, include: Stock },
    });
    const { portfolio, stocks } = this._getPortfolioData(user.Portfolio);
    const userData = {
      firstName: user.first_name,
      lastName: user.last_name,
      portfolio,
      stocks,
    };
    console.log("userData: ", userData);
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
    return await User.findOne({ where: { email } });
  }

  async _isUserValid({ email, password }) {
    const user = await this._getUser(email);
    console.log();
    if (!user) return false;
    if (!(await bcrypt.compare(password, user.password))) return false;
    return user.user_id;
  }
}

module.exports = new UserManager();
