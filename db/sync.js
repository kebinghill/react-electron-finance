const db = require('./init');
const User = require('./models/User');

const syncDb = async () => {
  try {
    await db.sync({ force: true });
    //MODEL TESTING
    User.create({
      firstName: 'Kevin',
      lastName: 'Gil',
      email: '93kevingil@gmail.com',
      password: 'password',
    });
    User.create({
      firstName: 'User',
      lastName: 'Two',
      email: 'kevin@gmail.com',
      password: 'password2',
    });
  } catch (error) {
    console.log('ERROR IN SYNC FILE:', error);
  }
};

module.exports = syncDb;
