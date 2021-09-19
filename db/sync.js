const db = require('./init');

const syncDb = async () => {
  try {
    await db.sync({ force: true });
  } catch (error) {
    console.log('ERROR IN SYNC FILE:', error);
  }
};

module.exports = syncDb;
