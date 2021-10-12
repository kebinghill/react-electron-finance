const jwt = require('jsonwebtoken');
const express = require('express');
const app = express();
app.use(express.json());
require('dotenv').config();
const port = process.env.PORT || 3001;

//DATABASE MODELS AND SYNCING
const syncDb = require('./db/sync');
const User = require('./db/models/User');

//AUTHENTICATING USER

User.authenticate = async ({ email, password }) => {
  const user = await User.findOne({ where: { email, password } });
  if (user) {
    console.log(user);
    return jwt.sign({ id: user.id }, process.env.JWT_TOKEN);
  }
};

app.post('/auth', async (req, res, next) => {
  try {
    res.send({ token: await User.authenticate(req.body) });
  } catch (error) {
    next('ERROR IN POST AUTH ROUTE:', error);
  }
});

app.get('/auth', async (req, res, next) => {
  try {
    res.send(await User.byToken(req.headers.authorization));
  } catch (error) {
    next('ERROR IN GET AUTH ROUTE:', error);
  }
});

//END OF AUTHENTICATION

// app.get('/', (req, res) => {
//   res.status(200).send('Hello World');
// });

// app.get('/users', async (req, res) => {
//   const users = await User.findAll();
//   res.status(200).send(users);
// });

//ERROR HANDLING
app.use((err, req, res, next) => {
  res.status(err.status || 500).send({ error: err.message });
});

//RUN APP
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
