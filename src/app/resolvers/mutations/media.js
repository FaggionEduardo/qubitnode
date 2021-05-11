const { Media } = require('../../models')

let mutations = {

  createMedia: async (_, { title, link }) => {
    const media = await Media.create({ title, link })
    return (media)
  },

  updateMedia: async (_, { id, title, link }) => {
    const media = await Media.findByPk(id)
    media.update({ title, link })
    return media
  },

  deleteMedia: async (_, { id }) => {
    const media = await Media.findByPk(id)
    media.destroy()
    return (true);
  },
}

module.exports = mutations
