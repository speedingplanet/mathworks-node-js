function* createGenerator() {
  console.log('Initial code.');
  console.log('About to yield');
  yield;
  console.log('After first yield, before second yield');
  yield;
  console.log('Finished');
}

let generatorObject = createGenerator();
console.log('First next: ');
generatorObject.next();
console.log('Second next: ');
generatorObject.next();
console.log('Third next: ');
generatorObject.next();
console.log('Fourth next: ');
generatorObject.next();
console.log('Done? ', generatorObject.next().done);
