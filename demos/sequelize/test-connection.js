const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './users.db',
});

try {
  await sequelize.authenticate();
  console.log('Successful connection.');
} catch (error) {
  console.error('Could not connect to database');
}
