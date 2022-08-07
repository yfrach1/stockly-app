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
      Stock.hasMany(models.Portfolio_performance, { foreignKey: "ticker" });
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
      portfolio_id: DataTypes.INTEGER,
      ticker: DataTypes.STRING,
      name: DataTypes.STRING,
      price: DataTypes.FLOAT,
      buy_price: DataTypes.FLOAT,
      change_percent: DataTypes.FLOAT,
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
    },
    {
      indexes: [
        {
          unique: true,
          fields: ["stock_id"],
        },
        { unique: false, fields: ["ticker", "portfolio_id"] },
      ],
    }
  );
  return Stock;
};
