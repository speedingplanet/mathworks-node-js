const readline = require('readline');
const fs = require('fs/promises');

const filename = __dirname + '/names.txt';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/*
Call the readline.question method. Pass it a question "What is your name? "
and a callback. The callback will receive the name as an argument.

Invoke rl.close() to close the input for the readline interface.
Append the newly-acquired name to filename using fs.appendFile
Then log that you have written the name to the file, and that you 
are going to fetch the file's contents. 

Read the file's contents with readfile.
Then print out the list of names.

Finally, catch any errors and log them with console.error. 

Under Node v15.x, you could util.promisify this.
 */

let p = new Promise((resolve) => {
  rl.question('What is your name? ', resolve);
});

p.then((name) => {
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
