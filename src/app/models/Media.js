'use strict'
require('dotenv').config()

const { Model } = require('sequelize');
const sequelizePaginate = require('sequelize-paginate')
module.exports = (sequelize, DataTypes) => {
  class Media extends Model {
    static associate(models) {

    }
  };

  Media.init({
    title: DataTypes.TEXT,
    link: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Media',
    underscored: true,
  });

  sequelizePaginate.paginate(Media)

  return Media
}
