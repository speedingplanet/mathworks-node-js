const open = require('open');
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

async function main() {
  // Generic middleware
  app.use((req, res, next) => {
    console.log('This middleware runs everytime anything happens');
    next();
  });

  // Specific middleware (allows working with hoppscotch.io)
  app.use(cors());

  // Ordering matters
  app.use((req, res, next) => {
    console.log('This runs first');
    next();
  });
  app.use((req, res, next) => {
    console.log('This runs second');
    next();
  });

  // Match any HTTP verb
  // Useful for setting up work to be done on all requests
  // e.g. app.all('*', ...someMiddleware)
  app.all('/all', (req, res, next) => {
    res.send('This answers any HTTP verb');
  });

  app.all('/', (req, res, next) => {
    res.send('Welcome!');
  });

  app.get('/get', (req, res, next) => {
    res.send('This answers only on HTTP GET requests');
  });

  app.post('/post', (req, res, next) => {
    res.send('This answers on HTTP POST requests');
  });

  app
    .route('/routed')
    .all((req, res, next) => {
      console.log('In /routed');
      next();
    })
    .get((req, res, next) => {
      res.send('/routed GET request');
    })
    .post((req, res, next) => {
      res.send('/routed POST request');
    });

  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });

  await open(`http://localhost:${port}`);
}

main();
