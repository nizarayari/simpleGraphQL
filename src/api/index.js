const booking = require('./booking')
const merge = require('lodash/merge')

module.exports = {
  typeDefs: [
    booking.typeDefs,
  ].join(' '),
  resolvers: merge({}, booking.resolvers)
}