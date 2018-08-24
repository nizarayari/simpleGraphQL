var faker = require('faker')

module.exports.seed = () => {
  var soon = (refDate, days) => {
    var date = new Date(refDate);
    var range = {
      min: 1000,
      max: (days || 1) * 24 * 3600 * 1000
    };
  
    var future = date.getTime();
    future += faker.random.number(range); // some time from now to N days later, in milliseconds
    date.setTime(future);
  
    return date;
  };
  
  const bookings = Array.from({ length: 10 }).map(() => {
    let startDate = faker.date.between(new Date(2016, 1, 1), new Date(2020, 1, 1))

    return {
      id: faker.random.uuid(),
      status: faker.random.arrayElement(['CANCELLED', 'RESERVED', 'HOLD']),
      startDate: startDate,
      endDate: soon(startDate, 15),
      guest: {
        id: faker.random.uuid(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        address: {
          streetAddress: faker.address.streetAddress(),
          city: faker.address.city(),
          state: faker.address.state(),
          zipCode: faker.address.zipCode(),
          country: faker.address.country()
        }
      },
      source: faker.random.arrayElement([
        'Booking.com',
        'Expedia',
        'MrBnb',
        'EventBrite',
        'CWT',
        'American Express',
        'Agoda',
        'Hotels.com'
      ]),
      bookingPrice: {
        value: faker.finance.amount(90, 2600, 2),
        currency: faker.finance.currencyCode()
      }
    }

  })

  return bookings
}