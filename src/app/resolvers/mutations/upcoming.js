const { Upcoming } = require('../../models')

let mutations = {

  createUpcoming: async (_, { year, location, text, link }) => {
    year = +year
    const upcoming = await Upcoming.create({ year, location, text, link })
    return (upcoming)
  },

  updateUpcoming: async (_, { id, year, location, text, link }) => {
    const upcoming = await Upcoming.findByPk(id)
    year = +year
    upcoming.update({ year, location, text, link })
    return upcoming
  },

  deleteUpcoming: async (_, { id }) => {
    const upcoming = await Upcoming.findByPk(id)
    upcoming.destroy()
    return (true);
  },
}

module.exports = mutations
