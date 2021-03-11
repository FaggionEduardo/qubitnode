const { Upcoming } = require('../../models')

let mutations = {

  createUpcoming: async (_, {date,text,link}) => {
    const upcoming= await Upcoming.create({date,text,link})
    return(upcoming)
  },

  updateUpcoming: async (_, {id,date,text,link}) => {
    const upcoming= await Upcoming.findByPk(id)
    upcoming.update({date,text,link})
    return upcoming
  },

  deleteUpcoming: async (_, {id}) => {
    const upcoming= await Upcoming.findByPk(id)
    upcoming.destroy()
    return(true);
  },
}

module.exports =  mutations
