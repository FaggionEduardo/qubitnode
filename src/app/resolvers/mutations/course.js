const { Course } = require('../../models')

let mutations = {

  createCourse: async (_, {title,cod,description,period}) => {
    const course= await Course.create({title,cod,description,period})
    return(course)
  },

  updateCourse: async (_, {id,title,cod,description,period}) => {
    const course= await Course.findByPk(id)
    course.update({title,cod,description,period})
    return course
  },

  deleteCourse: async (_, {id}) => {
    const course= await Course.findByPk(id)
    course.destroy()
    return(true);
  },
}

module.exports =  mutations
