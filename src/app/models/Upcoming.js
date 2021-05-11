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
    year: DataTypes.INTEGER,
    location: DataTypes.STRING,
    text: DataTypes.TEXT,
    link: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Upcoming',
    underscored: true,
  });

  sequelizePaginate.paginate(Upcoming)

  return Upcoming
}
