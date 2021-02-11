const { Sequelize, DataTypes, Model } = require('sequelize');

const dbFile = __dirname + '/users.db';
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: dbFile,
});

class User extends Model {}

User.init(
  {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    version: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
  },
  {
    sequelize,
    modelName: 'User',
  }
);

async function main() {
  await User.sync({ force: true });

  // Two-step
  const user1 = User.build({ firstName: 'Jenny', lastName: 'Sparks' });
  await user1.save();

  // One-step
  const user2 = await User.create({ firstName: 'Angela', lastName: 'Cortez' });

  // Log them
  console.log('user1: ', user1.toJSON());
  console.log('user2: ', user2.toJSON());

  // Update
  user1.lastName = 'Quantum';
  await user1.save();

  // Get changes from the DB
  await user1.reload();

  // Update numeric value, minimize concurrency issues
  const incrementResult = await user1.increment('version' /* {by: 5} */);
}

main();
