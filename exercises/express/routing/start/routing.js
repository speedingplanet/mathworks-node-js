const open = require('open');
const express = require('express');
const cors = require('cors');
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
  app.get('/users', (req, res, next) => {
    res.send('This will retrieve a list of users.');
  });
  app.get('/users/:id', (req, res, next) => {
    res.send(`This will retrieve the user with the id ${req.params.id}`);
  });
  app.post('/users/:id', (req, res, next) => {
    res.send(`This will update the user with the id ${req.params.id}`);
  });
  app.post('/users/', (req, res, next) => {
    res.send('This will add a new user');
  });
  app.put('/users', (req, res, next) => {
    res.send('This will add a new user');
  });
  app.delete('/users/:id', (req, res, next) => {
    res.send(`This will delete the user with the id ${req.params.id}`);
  });

  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });

  await open(`http://localhost:${port}`);
}

main();
