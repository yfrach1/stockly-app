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
         User.hasOne(models.Portfolio, { foreignKey: "user_id" });
      }
   }
   User.init(
      {
         // Check with mentors if this is the right way of validations:
         user_id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
         },
         email: DataTypes.STRING,
         password: DataTypes.STRING,
         first_name: DataTypes.STRING,
         last_name: DataTypes.STRING,
         createdAt: {
            allowNull: false,
            type: DataTypes.DATE,
         },
         updatedAt: {
            allowNull: false,
            type: DataTypes.DATE,
         },
      },
      {
         sequelize,
         modelName: "User",
      }
   );
   return User;
};
