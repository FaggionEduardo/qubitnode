'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('upcomings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      year: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      location: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      text: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      link: {
        allowNull: true,
        type: Sequelize.TEXT,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('upcomings')
  }
};
