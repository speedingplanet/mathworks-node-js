function* createGenerator() {
  yield 10;
  yield 20;
  return 30;
}

let generatorObject = createGenerator();

for (let value of generatorObject) {
  console.log(`Value: ${value}`);
}

console.log('Done');

async function* asyncGenerator() {
  yield 10;
  yield 20;
  return 30;
}

async function main() {
  let asyncObject = asyncGenerator();
  for await (let value of asyncObject) {
    console.log(`Async value: ${value}`);
  }
  console.log('Done, asynchronously');
}

main();
