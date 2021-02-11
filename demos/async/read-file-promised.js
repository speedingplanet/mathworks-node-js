const fs = require('fs/promises');
const path = require('path');

let fileName = 'names.txt';
let pathToFile = path.join(__dirname, fileName);

console.log('before readFile');

let p1 = fs.readFile(pathToFile, 'utf8');

let p2 = p1.then(
  (data) => {
    console.log('Data: ', data);
    return data[0];
  },
  (error) => {
    console.error(error);
    process.exit(1);
  }
);

p2.then((firstRecord) => {
  console.log('The first name is ', firstRecord.getName());
});

p1.then((data) => {
  console.log('I am also interested in this data');
});

function handleError(err) {
  console.error(err);
  process.exit(1);
}

function outerData(data) {
  for (line of data.split('\n')) {
    fs.readFile(/* path to sub-file*/ line, /* encoding ,*/ 'utf8').then(
      innerData,
      handleError
    );

    // Later: Promise.all
  }
}

function innerData(data) {
  // Do something with data here
}

let otherp1 = fs.readFile(pathToFile, 'utf8');
otherp1.then(outerData, handleError);

console.log('after readFile');
