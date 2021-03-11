'use strict'
require('dotenv').config()

const { Model } = require('sequelize');
const sequelizePaginate = require('sequelize-paginate')
module.exports = (sequelize, DataTypes) => {
  class Upcoming extends Model {
    static associate(models) {
      
    }
  };

  Upcoming.init({
    date: DataTypes.DATE,
    text: DataTypes.TEXT,
    link: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Upcoming',
    underscored: true,
  });

  sequelizePaginate.paginate(Upcoming)

  return Upcoming
}
