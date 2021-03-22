'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('publications', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      description: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      linknames: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      links: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      imagename: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      image64: {
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
    return queryInterface.dropTable('publications')
  }
};