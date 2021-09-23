const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const syncDb = require('./db/sync');

const User = require('./db/models/User');

app.get('/', (req, res) => {
  res.status(200).send('Hello World');
});

app.get('/users', async (req, res) => {
  const users = await User.findAll();
  res.status(200).send(users);
});

const init = async () => {
  try {
    await syncDb();
    app.listen(port, () => {
      console.log(`App running on port: ${port}`);
    });
  } catch (error) {
    console.log('ERROR IN SERVER FILE, INIT:', error);
  }
};

init();
