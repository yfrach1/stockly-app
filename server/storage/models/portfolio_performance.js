"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
   class Portfolio_performance extends Model {
      /**
       * Helper method for defining associations.
       * This method is not a part of Sequelize lifecycle.
       * The `models/index` file will call this method automatically.
       */
      static associate(models) {
         // define association here
      }
   }
   Portfolio_performance.init(
      {
         id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
         },
         ticker: DataTypes.STRING,
         date: DataTypes.DATE,
         open: DataTypes.FLOAT,
         close: DataTypes.FLOAT,
         low: DataTypes.FLOAT,
         high: DataTypes.FLOAT,
         volume: DataTypes.FLOAT,
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
         modelName: "Portfolio_performance",
      },
      {
         indexes: [
            {
               unique: false,
               fields: ["ticker", "date"],
            },
         ],
      }
   );
   return Portfolio_performance;
};
