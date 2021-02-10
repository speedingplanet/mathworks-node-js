const readline = require('readline');
const fs = require('fs/promises');

const filename = __dirname + '/names.txt';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/*
Convert the code from the previous exercise to use async/await
 */

rl.question('What is your name? ', (name) => {
  console.log(`Greetings, ${name}. Adding you to the list...`);
  rl.close();

  fs.appendFile(filename, name)
    .then(() => {
      console.log('Wrote to file, getting contents....');
      return fs.readFile(filename);
    })
    .then((contents) => console.log(`Here's the list of names: ${contents}.`))
    .catch((err) => {
      console.error('There was an error: ', err);
    });
});
