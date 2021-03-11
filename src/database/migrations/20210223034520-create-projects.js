'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('projects', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      description: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      linknames: {
        allowNull: true,
        type: Sequelize.TEXT,
      },
      links: {
        allowNull: true,
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
      members: {
        allowNull: false,
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
    return queryInterface.dropTable('projects')
  }
};