"use strict";
module.exports = {
   async up(queryInterface, Sequelize) {
      await queryInterface.createTable("Stocks", {
         stock_id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
         },
         portfolio_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
         },
         name: {
            type: Sequelize.STRING,
            allowNull: false,
         },
         ticker: {
            type: Sequelize.STRING,
            allowNull: false,
         },
         quantity: {
            type: Sequelize.FLOAT,
            allowNull: false,
         },
         createdAt: {
            allowNull: false,
            type: Sequelize.DATE,
         },
         updatedAt: {
            allowNull: false,
            type: Sequelize.DATE,
         },
      });
   },
   async down(queryInterface, Sequelize) {
      await queryInterface.dropTable("Stocks");
   },
};
