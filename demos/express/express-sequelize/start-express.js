const open = require('open');
const express = require('express');
const cors = require('cors');
const movieRouter = require('./movie-router');
const movieLoader = require('./load-movies');

const app = express();
const port = 3000;
movieLoader.setUpDatabase();

async function main() {
  app.use(cors());
  app.set('json spaces', 2);
  app.get('/', (req, res, next) => {
    res.send('Welcome to the movies RESTful server.');
  });

  app.use('/movies', movieRouter);

  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });

  await open(`http://localhost:${port}`);
}

main();
