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

rl.question('What is your name? ', async (name) => {
  console.log(`Greetings, ${name}. Adding you to the list...`);
  rl.close();

  try {
    await fs.appendFile(filename, name);
    console.log('Wrote to file, getting contents....');
    let contents = await fs.readFile(filename);
    console.log(`Here's the list of names: ${contents}.`);
  } catch (err) {
    console.error('There was an error: ', err);
  }
});
