'use strict'
require('dotenv').config()

const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const { Model } = require('sequelize');
const sequelizePaginate = require('sequelize-paginate')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      
    }
  };

  User.init({
    name: DataTypes.STRING,
    login: DataTypes.STRING,
    password: DataTypes.VIRTUAL(DataTypes.STRING),
    passwordHash: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
    underscored: true,
  });

  User.beforeSave(async (user) => {
    if (user.password) {
      user.passwordHash = await bcrypt.hash(user.password, 8)
    }
  })

  User.prototype.verifyPassword = function (pwd) {
    return bcrypt.compare(pwd, this.passwordHash)
  }

  User.generateToken = function ({ id, role }) {
    const SECONDS_IN_A_DAY = 24 * 60 * 60
    return jwt.sign({ id, role }, process.env.AUTH_SECRET, {
      expiresIn: SECONDS_IN_A_DAY,
    })
  }

  sequelizePaginate.paginate(User)
  
  return User
}
