const { Project } = require('../../models')

let mutations = {

  createProject: async (_, {title,description,linknames,links,imagename,image64,members}) => {
    const project= await Project.create({title,description,linknames,links,imagename,image64,members})
    return(project)
  },

  updateProject: async (_, {id,title,description,linknames,links,imagename,image64,members}) => {
    const project= await Project.findByPk(id)
    project.update({title,description,linknames,links,imagename,image64,members})
    return project
  },

  deleteProject: async (_, {id}) => {
    const project= await Project.findByPk(id)
    project.destroy()
    return(true);
  },
}

module.exports =  mutations
