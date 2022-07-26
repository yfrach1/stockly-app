"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
   class Portfolio extends Model {
      /**
       * Helper method for defining associations.
       * This method is not a part of Sequelize lifecycle.
       * The `models/index` file will call this method automatically.
       */
      static associate(models) {
         Portfolio.hasMany(models.Stock, { foreignKey: "portfolio_id" });
      }
   }
   Portfolio.init(
      {
         portfolio_id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
         },
         user_id: DataTypes.INTEGER,
         name: DataTypes.STRING,
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
         modelName: "Portfolio",
      }
   );
   return Portfolio;
};
