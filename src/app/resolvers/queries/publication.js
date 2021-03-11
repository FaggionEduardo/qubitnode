const { Publication } = require("../../models")

let queries = {
    paginatePublications: async (_,{page,limit}) => {
        const options = {
            page, // Default 1
            paginate: limit, // Default 25
            
          }
        const publication= await Publication.paginate(options)
        return(publication)
    },
    publications: ()=> Publication.findAll(),
    publication: (_, {id}) => Publication.findByPk(id),
}

module.exports = queries
