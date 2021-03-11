const { News } = require('../../models')

let mutations = {

  createNews: async (_, {date,text,urlname,url,imagename,image64}) => {
    const news= await News.create({date,text,urlname,url,imagename,image64})
    return(news)
  },

  updateNews: async (_, {id, date,text,urlname,url,imagename,image64}) => {
    const news= await News.findByPk(id)
    news.update({date,text,urlname,url,imagename,image64})
    return news
  },

  deleteNews: async (_, {id}) => {
    const news= await News.findByPk(id)
    news.destroy()
    return(true);
  },
}

module.exports =  mutations
