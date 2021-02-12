const open = require('open');
const express = require('express');
const app = express();
const port = 3000;

async function main() {
  app.get('/', (req, res) => {
    res.send('Hello World!');
  });

  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });

  await open(`http://localhost:${port}`);
}

main();
