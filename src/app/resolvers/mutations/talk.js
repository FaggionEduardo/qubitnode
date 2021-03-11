const { Talk } = require('../../models')

let mutations = {

  createTalk: async (_, {date,text,link}) => {
    const talk= await Talk.create({date,text,link})
    return(talk)
  },

  updateTalk: async (_, {id,date,text,link}) => {
    const talk= await Talk.findByPk(id)
    talk.update({date,text,link})
    return talk
  },

  deleteTalk: async (_, {id}) => {
    const talk= await Talk.findByPk(id)
    talk.destroy()
    return(true);
  },
}

module.exports =  mutations
