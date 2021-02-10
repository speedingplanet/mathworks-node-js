function* createGenerator() {
  console.log('Initial code.');
  console.log('About to yield');
  yield 10;
  console.log('After first yield, before second yield');
  yield 20;
  console.log('Finished');
  return 30;
}

let generatorObject = createGenerator();
console.log('First next: ', generatorObject.next().value);
console.log('Second next: ', generatorObject.next().value);
console.log('Third next: ', generatorObject.next().value);
console.log('Fourth next: ', generatorObject.next().value);
console.log('Done? ', generatorObject.next().done);
