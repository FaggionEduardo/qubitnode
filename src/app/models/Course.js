'use strict'
require('dotenv').config()

const { Model } = require('sequelize');
const sequelizePaginate = require('sequelize-paginate')
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    static associate(models) {
      
    }
  };

  Course.init({
    title: DataTypes.STRING,
    cod: DataTypes.STRING,
    description: DataTypes.TEXT,
    period: DataTypes.STRING,
    link: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Course',
    underscored: true,
  });

  sequelizePaginate.paginate(Course)

  return Course
}
