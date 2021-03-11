'use strict'
require('dotenv').config()

const { Model } = require('sequelize');
const sequelizePaginate = require('sequelize-paginate')
module.exports = (sequelize, DataTypes) => {
  class Project extends Model {
    static associate(models) {
      
    }
  };

  Project.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    linknames: DataTypes.TEXT,
    links: DataTypes.TEXT,
    imagename: DataTypes.STRING,
    image64:DataTypes.TEXT('medium'),
    members: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Project',
    underscored: true,
  });

  sequelizePaginate.paginate(Project)

  return Project
}
