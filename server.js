const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const syncDb = require('./db/sync');

app.get('/', (req, res) => {
  res.status(200).send('Hello World');
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
