const { Book } = require('../../models')

let mutations = {

  createBook: async (_, {title,link}) => {
    const book= await Book.create({title,link})
    return(book)
  },

  updateBook: async (_, {id,title,link}) => {
    const book= await Book.findByPk(id)
    book.update({title,link})
    return book
  },

  deleteBook: async (_, {id}) => {
    const book= await Book.findByPk(id)
    book.destroy()
    return(true);
  },
}

module.exports =  mutations
