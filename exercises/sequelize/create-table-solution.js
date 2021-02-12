const { Sequelize, DataTypes, Model } = require('sequelize');
const sqlite = require('sqlite3');

const dbFile = __dirname + '/users.db';
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: dbFile,
});

class User extends Model {}

User.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    version: { type: DataTypes.INTEGER, defaultValue: 1 },
    displayName: { type: DataTypes.STRING },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
      },
    },
    userType: {
      type: DataTypes.STRING,
      validate: {
        isIn: [['person', 'corporation']],
      },
    },
    street: { type: DataTypes.STRING },
    city: { type: DataTypes.STRING },
    state: { type: DataTypes.STRING },
    postalCode: { type: DataTypes.STRING },
  },
  {
    sequelize,
    modelName: 'User',
  }
);

async function main() {
  try {
    await User.sync({ force: true });
    const firstUser = await User.create({
      displayName: 'John Paxton',
      email: 'pax@speedingplanet.com',
      userType: 'person',
      street: '32 Stanley Ave',
      city: 'Nutley',
      state: 'NJ',
      postalCode: '07110',
    });

    verify();
  } catch (err) {
    console.error('Create table problems: ', error);
  }
}

function verify() {
  const db = new sqlite.Database(dbFile);

  db.serialize(() => {
    db.each(`SELECT * FROM Users`, (err, data) => {
      if (err) console.error(err);
      console.log('Tables: ', data);
    });
  });

  db.close();
}

main();
