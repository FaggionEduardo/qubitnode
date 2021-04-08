const { Project } = require("../../models")

let queries = {
    paginateProjects: async (_,{page,limit}) => {
        const options = {
            page, // Default 1
            paginate: limit, // Default 25
            
          }
        const project= await Project.paginate(options)
        return(project)
    },
    projects: ()=> Project.findAll({order: [['id', 'DESC']]}),
    project: (_, {id}) => Project.findByPk(id),
}

module.exports = queries
