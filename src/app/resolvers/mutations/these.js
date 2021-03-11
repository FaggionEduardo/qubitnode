const { These } = require('../../models')

let mutations = {

  createThese: async (_, {title,link}) => {
    const these= await These.create({title,link})
    return(these)
  },

  updateThese: async (_, {id,title,link}) => {
    const these= await These.findByPk(id)
    these.update({title,link})
    return these
  },

  deleteThese: async (_, {id}) => {
    const these= await These.findByPk(id)
    these.destroy()
    return(true);
  },
}

module.exports =  mutations
