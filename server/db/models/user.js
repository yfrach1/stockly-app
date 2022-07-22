"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
   class User extends Model {
      /**
       * Helper method for defining associations.
       * This method is not a part of Sequelize lifecycle.
       * The `models/index` file will call this method automatically.
       */
      static associate(models) {
         // define association here
      }
   }
   User.init(
      {
         email: DataTypes.STRING,
         hashPassword: DataTypes.STRING,
         name: DataTypes.STRING,
         lastName: DataTypes.STRING,
         // should we add      updatedAt/createdAt and validations here?
      },
      {
         sequelize,
         modelName: "User",
      }
   );
   return User;
};
