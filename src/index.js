const express = require('express')
const cors = require('cors')
const { ApolloServer } = require('apollo-server-express')
const typeDefs = require('./app/schema')
const resolvers = require('./app/resolvers')
const directives = require('./app/directives')
const { getAuthenticatedUser } = require('./app/utils/getAuthenticatedUser')

const server = new ApolloServer({
  typeDefs,
  resolvers,
  uploads: {
    maxFileSize: 1 * 1024 * 1024, // 1000 KB
    maxFiles: 20,
  },
  schemaDirectives: directives,
  context: async ({ req }) => {
    if (!req || !req.headers) return null

    const authorization = req.headers.authorization || ''

    const authenticatedUser = await getAuthenticatedUser(authorization)
    if (!authenticatedUser) return null

    return { authenticatedUser }
  },
  introspection: true,
  playground: process.env.NODE_ENV !== 'production',
  debug: false,
  formatError: (error) => {
    // const e = JSON.stringify(error)
    if (process.env.NODE_ENV === 'production') {
      // const mailtext = e
      if (!error.message.match(/jwt expired/)) {
        // const mailMessage = {
        //   from: 'maisbento.suporte@gmail.com',
        //   to: 'maisbento.suporte@gmail.com',
        //   subject: 'Erro!',
        //   text: mailtext
        // }
        // sendNodeMail(mailMessage);
      }
    } else {
      console.log(error)
    }
   
    return { message: error.message }
  },
})

const app = express()

app.use(cors())
app.use (express.json ({limit: '16mb', extended: true}))
app.use (express.urlencoded ({limit: '16mb', extended: true}))
app.get('/', (_, res) => {
  res.send('QUBIT API')
})
server.applyMiddleware({ app })

const port = process.env.PORT || 4000

app.listen({ port }, () =>
  console.log(
    `🚀 Server ready at http://localhost:${port}${server.graphqlPath}`
  )
)
