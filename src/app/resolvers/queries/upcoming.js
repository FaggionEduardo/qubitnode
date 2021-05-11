const { Upcoming } = require("../../models")

let queries = {
    paginateUpcomings: async (_, { page, limit }) => {
        const options = {
            page, // Default 1
            paginate: limit, // Default 25
            order: [['year', 'DESC'], ['id', 'DESC']]

        }
        const upcoming = await Upcoming.paginate(options)
        return (upcoming)
    },
    upcomings: () => Upcoming.findAll({ order: [['year', 'DESC'], ['id', 'DESC']] }),
    upcoming: (_, { id }) => Upcoming.findByPk(id),
}

module.exports = queries
