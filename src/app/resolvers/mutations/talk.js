const { Talk } = require('../../models')

let mutations = {

  createTalk: async (_, { year, location, text, link }) => {
    year = +year
    const talk = await Talk.create({ year, location, text, link })
    return (talk)
  },

  updateTalk: async (_, { id, year, location, text, link }) => {
    const talk = await Talk.findByPk(id)
    year = +year
    talk.update({ year, location, text, link })
    return talk
  },

  deleteTalk: async (_, { id }) => {
    const talk = await Talk.findByPk(id)
    talk.destroy()
    return (true);
  },
}

module.exports = mutations
