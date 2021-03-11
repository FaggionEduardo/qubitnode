const { User } = require("../../models")

let queries = {
    paginateUsers: async (_,{page,limit}) => {
        const options = {
            page, // Default 1
            paginate: limit, // Default 25
            
          }
        const user= await User.paginate(options)
        return(user)
    },
    users: ()=> User.findAll(),
    user: (_, {id}) => User.findByPk(id),
}

module.exports = queries
