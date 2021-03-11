const { Opening } = require('../../models')

let mutations = {

  createOpening: async (_, {title,description,link,minqualifications,prefqualifications}) => {
    const opening= await Opening.create({title,description,link,minqualifications,prefqualifications})
    return(opening)
  },

  updateOpening: async (_, {id,title,description,link,minqualifications,prefqualifications}) => {
    const opening= await Opening.findByPk(id)
    opening.update({title,description,link,minqualifications,prefqualifications})
    return opening
  },

  deleteOpening: async (_, {id}) => {
    const opening= await Opening.findByPk(id)
    opening.destroy()
    return(true);
  },
}

module.exports =  mutations
