"use strict";
module.exports = {
   async up(queryInterface, Sequelize) {
      await queryInterface.createTable("Portfolio_performance", {
         id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
         },
         ticker: {
            type: Sequelize.STRING,
            allowNull: false,
         },
         date: {
            type: Sequelize.DATE,
         },
         close_price: { type: Sequelize.FLOAT },
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
      await queryInterface.dropTable("Portfolio_performance");
   },
};
