const sqlite = require('sqlite3');
const users = require('@speedingplanet/rest-server/data/generated/users.json');

const db = new sqlite.Database(__dirname + '/users.db');

db.serialize(() => {
  db.run(
    `CREATE TABLE users (id TEXT PRIMARY KEY, 
        version INTEGER, 
        displayName TEXT, 
        city TEXT, 
        state TEXT, 
        postalCode TEXT)`
  );

  const statement = db.prepare('INSERT INTO users VALUES (?, ?, ?, ?, ?, ?)');
  for (let user of users) {
    statement.run(
      user.id,
      user.version,
      user.displayName,
      user.address.city,
      user.address.state,
      user.address.postalCode
    );
  }

  statement.finalize();

  db.each('SELECT COUNT(*) FROM users', (err, row) => {
    if (err) console.err(err);

    console.log('Row: ', row);
  });
});

db.close();
