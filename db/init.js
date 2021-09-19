const Sequelize = require('sequelize');
const db = new Sequelize(
  process.env.DATABASE_URL || 'postgres://localhost/electron_finance'
);

module.exports = db;
