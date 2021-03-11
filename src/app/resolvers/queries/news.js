const { News } = require("../../models")

let queries = {
    paginateNews: async (_,{page,limit}) => {
        const options = {
            page, // Default 1
            paginate: limit, // Default 25
            
          }
        const news= await News.paginate(options)
        return(news)
    },
    news: ()=> News.findAll({order: [['date', 'DESC']]}),
    oneNews: (_, {id}) => News.findByPk(id),
}

module.exports = queries
