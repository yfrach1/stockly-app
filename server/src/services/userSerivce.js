const { User } = require("../../storage/models/user");

class UserManager {
   async createUser(user) {
      const response = await User.create(user);

      return response;
   }
}

module.exports = new UserManager();
