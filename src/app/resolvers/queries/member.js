const { Member } = require("../../models")

let queries = {
    paginateMembers: async (_,{page,limit}) => {
        const options = {
            page, // Default 1
            paginate: limit, // Default 25
            
          }
        const member= await Member.paginate(options)
        return(member)
    },
    members: ()=> Member.findAll({order: [['name', 'ASC']]}),
    member: (_, {id}) => Member.findByPk(id),
}

module.exports = queries
