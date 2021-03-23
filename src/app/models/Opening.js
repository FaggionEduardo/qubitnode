'use strict'
require('dotenv').config()

const { Model } = require('sequelize');
const sequelizePaginate = require('sequelize-paginate')
module.exports = (sequelize, DataTypes) => {
  class Opening extends Model {
    static associate(models) {
      
    }
  };

  Opening.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    link: DataTypes.TEXT,
    minqualifications: DataTypes.TEXT,
    prefqualifications: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Opening',
    underscored: true,
  });

  sequelizePaginate.paginate(Opening)

  return Opening
}
