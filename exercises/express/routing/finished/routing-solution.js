const open = require('open');
const express = require('express');
const cors = require('cors');
const usersRouter = require('./users-routes-solution');

const app = express();
const port = 3000;

async function main() {
  app.use(cors());

  app.get('/', (req, res, next) => {
    res.send('Welcome to the users RESTful server.');
  });

  /*
   *
   * Move all this routing code into users-routes.js
   * Then update this file to use that router
   *
   */
  app.use('/users', usersRouter);

  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });

  await open(`http://localhost:${port}`);
}

main();
