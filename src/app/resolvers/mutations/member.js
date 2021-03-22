const { Member } = require('../../models')
const { Project } = require('../../models')
let mutations = {

  createMember: async (_, {name,email,acting,formation,links,linknames,profile64}) => {
    const member= await Member.create({name,email,acting,formation,links,linknames,profile64})
    return(member)
  },

  updateMember: async (_, {id,name,email,acting,formation,links,linknames,profile64}) => {
    const member= await Member.findByPk(id)
    member.update({name,email,acting,formation,links,linknames,profile64})
    return member
  },

  deleteMember: async (_, {id}) => {
    const member= await Member.findByPk(id)
    const projects=Project.findAll()
    projects.map(project=>{
      if(project.members.split(',').indexOf(id)!==-1){
        let members=project.members.split(',')
        if(members.length==1){
          project.destroy()
        }else{
          members.splice(project.members.split(',').indexOf(id),1)
          members=members.toString()
          project.update({...project,members})
        }
       
      }
    })
    member.destroy()
    return(true);
  },
}

module.exports =  mutations
