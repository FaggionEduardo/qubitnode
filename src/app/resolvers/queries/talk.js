const { Talk } = require("../../models")

let queries = {
    paginateTalks: async (_, { page, limit }) => {
        const options = {
            page, // Default 1
            paginate: limit, // Default 25
            order: [['year', 'DESC'], ['id', 'DESC']]

        }
        const talk = await Talk.paginate(options)
        if (talk.year < 10) {
            talk.year = "0" + talk.year
        }
        return (talk)
    },
    talks: () => Talk.findAll({ order: [['year', 'DESC'], ['id', 'DESC']] }),
    talk: (_, { id }) => Talk.findByPk(id),
}

module.exports = queries
