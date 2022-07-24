const { User, Portfolio, Stock } = require("../../storage/models");
const bcrypt = require("bcrypt");

class UserManager {
   async createUser(user) {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      user.password = hashedPassword;

      if (await this._userExist(user.email)) {
         return null;
      } else {
         return await User.create(user);
      }
   }

   async getUser(userId) {
      // will get all portfolios and stocks
      const response = await User.findByPk(userId, {
         include: { model: Portfolio, include: Stock },
      });

      console.log(response.dataValues.Portfolio.Stocks);

      return response;
   }

   async _userExist(email) {
      const response = await User.findOne({ where: { email: email } });

      return response ? true : false;
   }
}

module.exports = new UserManager();

// const userMock = {
//    email: "liortal@gmail.com",
//    password: "123456",
//    name: "Lior",
//    last_name: "Tal",
// };
