'use strict'
require('dotenv').config()

const { Model } = require('sequelize');
const sequelizePaginate = require('sequelize-paginate')
module.exports = (sequelize, DataTypes) => {
  class These extends Model {
    static associate(models) {
      
    }
  };

  These.init({
    title: DataTypes.TEXT,
    link: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'These',
    underscored: true,
  });

  sequelizePaginate.paginate(These)

  return These
}
