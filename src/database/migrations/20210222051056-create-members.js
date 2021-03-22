'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('members', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      acting: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      formation: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      links: {
        allowNull: true,
        type: Sequelize.TEXT,
      },
      linknames: {
        allowNull: true,
        type: Sequelize.TEXT,
      },
      profile64: {
        allowNull: false,
        type: Sequelize.TEXT('medium'),
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
    return queryInterface.dropTable('members')
  }
};