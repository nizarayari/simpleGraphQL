require('dotenv').config()
const { GraphQLServer } = require('graphql-yoga')
const gqlServerConfig = require('./api')

const serverOptions = {
  port: process.env.port || 5000,
  endpoint: '/graphql',
  playground: '/docs',
  tracing: true,
  debug: true
}

const server = new GraphQLServer(gqlServerConfig)
server.start(serverOptions, ({port}) => console.log(`Server on port ${port}`))