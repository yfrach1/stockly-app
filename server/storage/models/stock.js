"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
   class Stock extends Model {
      /**
       * Helper method for defining associations.
       * This method is not a part of Sequelize lifecycle.
       * The `models/index` file will call this method automatically.
       */
      static associate(models) {
         // define association here
      }
   }
   Stock.init(
      {
         stock_id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
         },
         portfolio_Id: DataTypes.INTEGER,
         name: DataTypes.STRING,
         ticker: DataTypes.STRING,
         quantity: DataTypes.FLOAT,
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
         modelName: "Stock",
      }
   );
   return Stock;
};
