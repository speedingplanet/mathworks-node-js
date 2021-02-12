const open = require('open');
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

async function main() {
  app.use(cors());

  // Add a generic greeting for when someone requests '/'

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

  // Listen on port, log that the express app is up and running

  // Auto-open a browser window, if you want.
}

main();
