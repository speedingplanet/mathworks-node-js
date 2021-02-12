const open = require('open');
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

async function main() {
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.all('/', (req, res, next) => {
    res.send('Welcome!');
  });

  app.post('/json', (req, res, next) => {
    console.log('Body: ', req.body);
    res.json(req.body);
  });

  app.get('/queryParams', (req, res, next) => {
    console.log('Query Params: ', req.query);
    res.json(req.query);
  });

  app.get('/routeParams/:id/:message', (req, res, next) => {
    console.log(`id: ${req.params.id} / message: ${req.params.message}`);
    res.json(req.params);
  });

  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });

  await open(`http://localhost:${port}`);
}

main();
