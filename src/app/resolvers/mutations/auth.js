const { UserInputError } = require('apollo-server-express')
const { User } = require('../../models')

const login = async (_, { login, password }) => {
  const user = await User.findOne({ where: { login } })
  if (!user) throw new UserInputError('Usuário não encontrado!')
  if (!(await user.verifyPassword(password))) {
    throw new UserInputError('Senha inválida!')
  }
  user.passwordHash = undefined

  return {
    token: User.generateToken({ id: user.id }),
    user:user
  }
}

module.exports = { login }
