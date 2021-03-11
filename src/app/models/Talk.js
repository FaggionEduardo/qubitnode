'use strict'
require('dotenv').config()

const { Model } = require('sequelize');
const sequelizePaginate = require('sequelize-paginate')
module.exports = (sequelize, DataTypes) => {
  class Talk extends Model {
    static associate(models) {
      
    }
  };

  Talk.init({
    date: DataTypes.DATE,
    text: DataTypes.TEXT,
    link: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Talk',
    underscored: true,
  });

  sequelizePaginate.paginate(Talk)

  return Talk
}
