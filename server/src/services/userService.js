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
      const { accessToken, user } = await this._createAccessToken(dbUserData);

      return { accessToken, user, portfolio };
   }

   async loginUser(loginUserData) {
      let accessToken = null;
      const dbUserData = await this._getUser(loginUserData.email);

      if (dbUserData && (await bcrypt.compare(loginUserData.password, dbUserData.password))) {
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

   async _createAccessToken(dbUserData) {
      const user = {
         id: dbUserData.user_id,
         first_name: dbUserData.first_name,
         last_name: dbUserData.last_name,
      };
      const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
         expiresIn: "12h",
      });

      return { accessToken, user };
   }

   async _getUser(email) {
      const response = await User.findOne({ where: { email: email } });

      return response ? response : null;
   }
}

module.exports = new UserManager();
