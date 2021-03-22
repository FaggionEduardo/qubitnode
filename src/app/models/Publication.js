'use strict'
require('dotenv').config()

const { Model } = require('sequelize');
const sequelizePaginate = require('sequelize-paginate')
module.exports = (sequelize, DataTypes) => {
  class Publication extends Model {
    static associate(models) {
      
    }
  };

  Publication.init({
    title: DataTypes.TEXT,
    description: DataTypes.TEXT,
    linknames: DataTypes.TEXT,
    links: DataTypes.TEXT,
    imagename: DataTypes.STRING,
    image64:DataTypes.TEXT('medium')
  }, {
    sequelize,
    modelName: 'Publication',
    underscored: true,
  });

  sequelizePaginate.paginate(Publication)

  return Publication
}
