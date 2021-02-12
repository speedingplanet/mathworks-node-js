const { Sequelize, DataTypes, Model } = require('sequelize');
const sqlite = require('sqlite3');

const dbFile = __dirname + '/users.db';
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: dbFile,
});

/*
 *
 * Create a User model with the following properties
 * id, integer, primary key, auto increments,
 * version, integer, default value of 1, can't be null
 * displayName, string, can't be null
 * email, string
 * userType, string
 * street, city, state, postalCode, all strings
 *
 * In main() create the table, and insert a model into it.
 * The verify() call will display the data you have inserted
 *
 */

async function main() {
  verify();
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
