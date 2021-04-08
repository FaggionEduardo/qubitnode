const { Opening } = require("../../models")

let queries = {
    paginateOpenings: async (_,{page,limit}) => {
        const options = {
            page, // Default 1
            paginate: limit, // Default 25
            
          }
        const opening= await Opening.paginate(options)
        return(opening)
    },
    openings: ()=> Opening.findAll({order: [['id', 'DESC']]}),
    opening: (_, {id}) => Opening.findByPk(id),
}

module.exports = queries
