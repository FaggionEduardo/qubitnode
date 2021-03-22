const { Book } = require("../../models")

let queries = {
    paginateBooks: async (_,{page,limit}) => {
        const options = {
            page, // Default 1
            paginate: limit, // Default 25
            
          }
        const book= await Book.paginate(options)
        return(book)
    },
    books: ()=> Book.findAll({order: [['id', 'DESC']]}),
    book: (_, {id}) => Book.findByPk(id),
}

module.exports = queries
