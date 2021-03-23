'use strict'
require('dotenv').config()

const { Model } = require('sequelize');
const sequelizePaginate = require('sequelize-paginate')
module.exports = (sequelize, DataTypes) => {
  class News extends Model {
    static associate(models) {
      
    }
  };

  News.init({
    date: DataTypes.DATE,
    text: DataTypes.TEXT,
    urlname: DataTypes.STRING,
    url: DataTypes.TEXT,
    imagename: DataTypes.STRING,
    image64: DataTypes.TEXT('medium')
  }, {
    sequelize,
    modelName: 'News',
    underscored: true,
  });

  sequelizePaginate.paginate(News)

  return News
}
