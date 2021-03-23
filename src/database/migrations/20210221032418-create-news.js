'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('news', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      date: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      text: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      urlname: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      url: {
        allowNull: true,
        type: Sequelize.TEXT,
      },
      imagename: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      image64: {
        allowNull: true,
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
    return queryInterface.dropTable('news')
  }
};
