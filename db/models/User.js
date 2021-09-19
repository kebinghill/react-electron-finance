const { DataTypes, Model } = require('sequelize');
const db = require('../init');

class User extends Model {}

User.init(
  {
    firstName: {
      type: DataTypes.STRING,
    },
  },
  { sequelize: db, modelName: 'user' }
);
