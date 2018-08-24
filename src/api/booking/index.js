module.exports = {
  resolvers: require('./booking.resolvers'),
  typeDefs: require('../../utils/gqlLoader')('booking/booking.graphql'),
}