const chalk = require('chalk');
const sqlite = require('sqlite3');
const User = require('./User');
const usersJSON = require('@speedingplanet/rest-server/data/generated/users.json');

async function bulkInsertUsers() {
  let users = usersJSON.map((user) => ({
    id: user.id,
    version: user.version,
    displayName: user.displayName,
    email: user.email,
    userType: user.userType,
    street: user.address.street,
    city: user.address.city,
    state: user.address.state,
    postalCode: user.address.postalCode,
  }));
  return await User.bulkCreate(users);
}

async function main() {
  try {
    await User.sync({ force: true });
    await bulkInsertUsers();

    // Print out how many users there are

    // Print the names of all people

    // Find Elijah Snow (id 209) and move him to Natick

    verifyElijah();
  } catch (err) {
    console.log('Error in main: ', err);
  }
}

function verifyElijah() {
  const dbFile = __dirname + '/users.db';
  const db = new sqlite.Database(dbFile);

  db.serialize(() => {
    db.each(
      `SELECT displayName, city, state, postalCode FROM Users where id=209`,
      (err, row) => {
        if (err) console.error(err);
        console.log(
          chalk.blueBright(
            `Mr. Snow lives in ${row.city}, ${row.state}  ${row.postalCode}`
          )
        );
      }
    );
  });

  db.close();
}

main();
