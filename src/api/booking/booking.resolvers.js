var bookings = require('../../seed.js').seed



module.exports = {
  Query: {
    bookings() {
      return bookings()
    }
  }
}