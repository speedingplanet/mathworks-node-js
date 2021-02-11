const fs = require('fs');
const path = require('path');

let fileName = 'names.txt';
let pathToFile = path.join(__dirname, fileName);
let pathWithSeparator = __dirname + path.sep + fileName;

console.log('before readFile');
fs.readFile(pathToFile, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log('Data: ', data);
  for (line of data.split('\n')) {
    fs.readFile(
      /* path to sub-file,*/ /* encoding ,*/ (err, data) => {
        // Yet another callback
      }
    );
  }
});

function handleError(err) {
  console.error(err);
  process.exit(1);
}

function outerData(err, data) {
  if (err) handleError(err);
  for (line of data.split('\n')) {
    fs.readFile(/* path to sub-file*/ line, /* encoding ,*/ 'utf8', innerData);
  }
}

function innerData(err, data) {
  if (err) handleError(err);
  // Do something with data here
}

fs.readFile(pathToFile, 'utf8', outerData);

console.log('after readFile');
