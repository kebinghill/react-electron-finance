const { DataTypes, Model } = require('sequelize');
const db = require('../init');

class Note extends Model {}

Note.init(
  {
    financialNote: {
      type: DataTypes.STRING,
    },
    todoNote: {
      type: DataTypes.STRING,
    },
  },
  { sequelize: db, modelName: 'note' }
);

module.exports = Note;
