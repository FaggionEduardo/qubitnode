const { Course } = require("../../models")

let queries = {
    paginateCourses: async (_,{page,limit}) => {
        const options = {
            page, // Default 1
            paginate: limit, // Default 25
            
          }
        const course= await Course.paginate(options)
        return(course)
    },
    courses: ()=> Course.findAll(),
    course: (_, {id}) => Course.findByPk(id),
}

module.exports = queries
