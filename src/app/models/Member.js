'use strict'
require('dotenv').config()

const { Model } = require('sequelize');
const sequelizePaginate = require('sequelize-paginate')
module.exports = (sequelize, DataTypes) => {
  class Member extends Model {
    static associate(models) {
      
    }
  };

  Member.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    acting: DataTypes.STRING,
    formation: DataTypes.STRING,
    links: DataTypes.TEXT,
    linknames: DataTypes.TEXT,
    profile64: DataTypes.TEXT('medium'),
  }, {
    sequelize,
    modelName: 'Member',
    underscored: true,
  });

  sequelizePaginate.paginate(Member)

  return Member
}
