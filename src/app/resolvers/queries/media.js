const { Media } = require("../../models")

let queries = {
    paginateMedias: async (_, { page, limit }) => {
        const options = {
            page, // Default 1
            paginate: limit, // Default 25

        }
        const media = await Media.paginate(options)
        return (media)
    },
    medias: () => Media.findAll({ order: [['id', 'DESC']] }),
    media: (_, { id }) => Media.findByPk(id),
}

module.exports = queries
