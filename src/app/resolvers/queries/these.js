const { These } = require("../../models")

let queries = {
    paginateTheses: async (_,{page,limit}) => {
        const options = {
            page, // Default 1
            paginate: limit, // Default 25
            
          }
        const these= await These.paginate(options)
        return(these)
    },
    theses: ()=> These.findAll(),
    these: (_, {id}) => These.findByPk(id),
}

module.exports = queries
