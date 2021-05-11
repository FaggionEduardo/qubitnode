const { User } = require('../../models')

let mutations = {

  createUser: async (_, { name, login, password }) => {
    const existing = await User.findOne({ where: { login } })
    if (existing) throw new Error("Login já cadastrado");
    const user = await User.create({ name, login, password })
    return (user)


  },

  updateUser: async (_, { id, name, login, password }) => {
    const user = await User.findByPk(id)
    if (password == "" || password == null) {
      user.update({ name, login })
    } else {
      user.update({ name, login, password })
    }

    return user
  },

  deleteUser: async (_, { id }) => {
    const user = await User.findByPk(id)
    user.destroy()
    return (true);
  },
}

module.exports = mutations
