'use strict'
require('dotenv').config()

const { Model } = require('sequelize');
const sequelizePaginate = require('sequelize-paginate')
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    static associate(models) {
      
    }
  };

  Book.init({
    title: DataTypes.STRING,
    link: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Book',
    underscored: true,
  });

  sequelizePaginate.paginate(Book)

  return Book
}
