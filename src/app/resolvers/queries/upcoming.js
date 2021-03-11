const { Upcoming } = require("../../models")

let queries = {
    paginateUpcomings: async (_,{page,limit}) => {
        const options = {
            page, // Default 1
            paginate: limit, // Default 25
            
          }
        const upcoming= await Upcoming.paginate(options)
        return(upcoming)
    },
    upcomings: ()=> Upcoming.findAll({order: [['date', 'DESC']]}),
    upcoming: (_, {id}) => Upcoming.findByPk(id),
}

module.exports = queries
