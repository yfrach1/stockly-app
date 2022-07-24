const { User, Portfolio, Stock } = require("../../storage/models");

class UserManager {
  async createUser(user) {
    console.log("user: ", user);
    const response = await User.create(user);

    return response;
  }

  async getUser(userId) {
    // will get all portfolios and stocks
    const response = await User.findByPk(userId, {
      include: { model: Portfolio, include: Stock },
    });
    // console.log(response);
    console.log(response.dataValues.Portfolio.Stocks);

    return response;
  }
}

module.exports = new UserManager();

// const userMock = {
//    email: "liortal@gmail.com",
//    password: "123456",
//    name: "Lior",
//    last_name: "Tal",
// };
