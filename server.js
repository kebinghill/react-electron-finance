const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 3001;

//DATABASE MODELS AND SYNCING
const syncDb = require('./db/sync');
const User = require('./db/models/User');

//INITIAL CALL TO MERGE API - https://www.merge.dev/docs/linking-flow/get-started

const prodKey = process.env.MERGE_API_KEY;

const MergeHrisApi = require('@mergeapi/merge_hris_api');
let defaultClient = MergeHrisApi.ApiClient.instance;

defaultClient.authentications['tokenAuth'] = {
  type: 'bearer',
  accessToken: prodKey,
};

const apiInstance = new MergeHrisApi.LinkTokenApi();
const endUserDetails = {
  end_user_organization_name: 'Mnmt',
  end_user_email_address: '93kevingil@gmail.com',
  end_user_origin_id: '123456',
  categories: ['hris'],
  // identifier of desired integration
  integration: 'justworks',
};

apiInstance.linkTokenCreate(endUserDetails, (error, data) => {
  if (error) {
    console.error('ERROR IN API INSTANCE:', error);
  } else {
    console.log('DATA TOKEN SUCCESS:', data.link_token);
  }
});

//END OF MERGE API CALL TEST

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
