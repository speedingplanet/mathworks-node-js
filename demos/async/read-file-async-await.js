const fs = require('fs/promises');
const path = require('path');

let fileName = 'names.txt';
let pathToFile = path.join(__dirname, fileName);

console.log('before readFile');

function boo() {
  return {
    then() {
      // whatever
    },
  };
}

async function foo() {
  try {
    // let data = /* wait until data comes back */
    let data = await fs.readFile(pathToFile, 'utf8');
    console.log('Data: ', data);
  } catch (err) {
    console.error('Something went wrong: ', err);
  }
}

foo();
console.log('after main');

/*
fs.readFile(pathToFile, 'utf8').then(
  (data) => {
    console.log('Data: ', data);
  },
  (error) => {
    console.error(error);
    process.exit(1);
  }
);
*/
