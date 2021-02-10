let stream = require('stream');
let assert = require('assert').strict;

/**
 * Reads all the text in a readable stream and returns it as a string,
 * via a Promise.
 * @param {stream.Readable} readable
 */
function readableToString(readable) {
  return new Promise((resolve, reject) => {
    let data = '';
    readable.on('data', function (chunk) {
      data += chunk;
    });
    readable.on('end', function () {
      resolve(data);
    });
    readable.on('error', function (err) {
      reject(err);
    });
  });
}

function* gen() {
  yield 'One line\n';
  yield 'Another line\n';
}

async function main() {
  const readableStream = stream.Readable.from(gen(), { encoding: 'utf8' });
  assert.equal(
    await readableToString(readableStream),
    'One line\nAnother line\n'
  );
}

main();
