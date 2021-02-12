const open = require('open');
const express = require('express');
const cors = require('cors');
const movieRouter = require('./movie-router');

const app = express();
const port = 3000;

async function main() {
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.set('json spaces', 2); // Nicely formatted JSON

  app.all('/', (req, res, next) => {
    res.send(`
    <!doctype html>
    <html>
    <body>
    <h1>Welcome!</h1>
    <p>You probably want to try one of these links:</p>
    <ul>
    <li><a href="/movies">/movies</a></li>
    <li><a href="/movies/1">/movies/1</a> (found movie)</li>
    <li><a href="/movies/100">/movies/100</a> (movie not found)</li>
    </ul>
    </body>
    </html>
    `);
  });

  app.use('/movies', movieRouter);

  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });

  await open(`http://localhost:${port}`);
}

main();
