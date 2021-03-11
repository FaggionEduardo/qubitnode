const { Talk } = require("../../models")

let queries = {
    paginateTalks: async (_,{page,limit}) => {
        const options = {
            page, // Default 1
            paginate: limit, // Default 25
            
          }
        const talk= await Talk.paginate(options)
        return(talk)
    },
    talks: ()=> Talk.findAll({order: [['date', 'DESC']]}),
    talk: (_, {id}) => Talk.findByPk(id),
}

module.exports = queries
