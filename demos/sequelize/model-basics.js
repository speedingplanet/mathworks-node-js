// Define a Model
const { Sequelize, DataTypes, Model } = require('sequelize');
const sqlite = require('sqlite3');

const dbFile = __dirname + '/users.db';
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: dbFile,
});

const User1 = sequelize.define('User1', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
  },
});

class User2 extends Model {}

User2.init(
  {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: 'User2',
  }
);

async function main() {
  await User1.sync();
  const user1 = await User1.create({ firstName: 'John', lastName: 'Paxton' });

  await User2.sync();
  const user2 = await User2.create({
    firstName: 'Andreina',
    lastName: 'Castillo',
  });

  const db = new sqlite.Database(dbFile);

  db.serialize(() => {
    db.each(`SELECT * FROM User1s`, (err, data) => {
      if (err) console.error(err);
      console.log('Tables: ', data);
    });
  });

  db.close();
}

main();
