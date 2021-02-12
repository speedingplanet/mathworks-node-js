const open = require('open');
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

async function main() {
  app.use(cors());

  // Add a generic greeting for when someone requests '/'
  app.get('/', (req, res, next) => {
    res.send('Welcome to the users RESTful server.');
  });

  /*
   *
   * Add the following routes, with messages indicating what they will do:
   * GET /users => retrieves a list of users
   * GET /users/5 => retrieves the user with the id 5
   * POST /users/5 => updates the user with the id 5
   * POST /users => Creates a new user
   * PUT /users => Creates a new user
   * DELETE /users/5 => deletes the user with the id 5
   *
   * Test the routes in the browser and with hoppscotch.io
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

  // Listen on port, log that the express app is up and running
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });

  // Auto-open a browser window, if you want.
  await open(`http://localhost:${port}`);
}

main();
