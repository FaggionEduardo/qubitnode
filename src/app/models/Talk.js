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
    year: DataTypes.INTEGER,
    location: DataTypes.STRING,
    text: DataTypes.TEXT,
    link: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Talk',
    underscored: true,
  });

  sequelizePaginate.paginate(Talk)

  return Talk
}
