const Sequelize = require('sequelize')
const config = require('../../config/database')

const sequelize = new Sequelize(config)

const models = {}

const modules = [
  require('./User'),
  require('./News'),
  require('./Opening'),
  require('./Course'),
  require('./Talk'),
  require('./Book'),
  require('./These'),
  require('./Publication'),
  require('./Member'),
  require('./Upcoming'),
  require('./Project'),
  require('./Media'),
]

modules.forEach((module) => {
  const model = module(sequelize, Sequelize.DataTypes)
  models[model.name] = model
})

Object.keys(models).forEach((modelName) => {
  if (models[modelName].associate) models[modelName].associate(models)
})

models.sequelize = sequelize
models.Sequelize = Sequelize
module.exports = models
