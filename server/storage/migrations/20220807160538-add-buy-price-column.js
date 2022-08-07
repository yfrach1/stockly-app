"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("Stocks", "buy_price", {
      type: Sequelize.FLOAT,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("Stocks", "buy_price", {
      type: Sequelize.FLOAT,
    });
  },
};
