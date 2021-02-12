const { Sequelize, DataTypes, Model, Op } = require('sequelize');
const usersJSON = require('@speedingplanet/rest-server/data/generated/users.json');

const dbFile = __dirname + '/users.db';
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: dbFile,
});

class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
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

// Validates each user
async function createIndividually() {
  let userCreation = [];

  for (let userJSON of usersJSON) {
    if (userJSON.userType === 'person') {
      const [firstName, lastName] = userJSON.displayName.split(' ');
      // Pushes the promise for User creation onto an array
      userCreation.push(User.create({ firstName, lastName }));
    }
  }

  // Meta-promise of all User inserts
  return Promise.all(userCreation);
}

// No validation
async function createInBulk() {
  let users = usersJSON
    .map((userJSON) => {
      if (userJSON.userType === 'person') {
        const [firstName, lastName] = userJSON.displayName.split(' ');
        return {
          firstName,
          lastName,
          version: userJSON.version,
          id: userJSON.id,
        };
      }
    })
    .filter((user) => user != undefined);

  console.log('Users: ', users);
  // Adding validate: true will slow things down
  return User.bulkCreate(users /* {validate: true} */);
}

async function main() {
  try {
    await User.sync({ force: true });

    // await createIndividually();
    await createInBulk();

    // Also User.count()
    const usersDb = await User.findAll();

    console.log(`There are ${usersDb.length} users.`);

    let usersWithA = await User.findAll({
      where: {
        lastName: {
          // Also [Op.substring]
          [Op.like]: '%a%',
        },
      },
    });

    for (let user of usersWithA) {
      console.log(user.firstName + ' ' + user.lastName);
    }

    let foundUser = await User.findByPk('201');
    console.log(
      `Found user ${foundUser.id} / ${foundUser.firstName} ${foundUser.lastName}`
    );

    let unfoundUser = await User.findByPk('10000');
    console.log(`Could not find user ${unfoundUser}`);
  } catch (err) {
    console.error('Error in main: ', err);
  }
}

main();
