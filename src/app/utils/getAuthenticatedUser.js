require('dotenv').config()
const { ApolloError } = require('apollo-server-express')

const { User } = require('../models')
const jwt = require('jsonwebtoken')


const getAuthenticatedUser = async (authorization) => {
  try {
    const token = authorization

    if (!token) return null

    const { id } = await jwt.verify(token, process.env.AUTH_SECRET)

    const user = await User.findOne({ where: { id } })

    return user
  } catch (e) {
    throw new ApolloError(e.message, 'JWT')
  }
}

module.exports = { getAuthenticatedUser }
