const { Sequelize } = require('sequelize');

const dbFile = __dirname + '/users.db';
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: dbFile,
});

module.exports = sequelize;
