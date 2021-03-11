const { Publication } = require('../../models')

let mutations = {

  createPublication: async (_, {title,description,linknames,links,imagename,image64}) => {
    const publication= await Publication.create({title,description,linknames,links,imagename,image64})
    return(publication)
  },

  updatePublication: async (_, {id,title,description,linknames,links,imagename,image64}) => {
    const publication= await Publication.findByPk(id)
    publication.update({title,description,linknames,links,imagename,image64})
    return publication
  },

  deletePublication: async (_, {id}) => {
    const publication= await Publication.findByPk(id)
    publication.destroy()
    return(true);
  },
}

module.exports =  mutations
