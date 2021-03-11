const { Member } = require('../../models')

let mutations = {

  createMember: async (_, {name,email,acting,profile64}) => {
    const member= await Member.create({name,email,acting,profile64})
    return(member)
  },

  updateMember: async (_, {id,name,email,acting,profile64}) => {
    const member= await Member.findByPk(id)
    member.update({name,email,acting,profile64})
    return member
  },

  deleteMember: async (_, {id}) => {
    const member= await Member.findByPk(id)
    member.destroy()
    return(true);
  },
}

module.exports =  mutations
