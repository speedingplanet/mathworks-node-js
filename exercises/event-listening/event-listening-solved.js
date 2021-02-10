let http = require('http');
let helpers = require('../common/helpers');

let port = 3000;

let server = http.createServer((request, response) => {
  if (request.method === 'GET') {
    if (request.url === '/success') {
      response.end(helpers.wrapMessage('Success!'));
    } else if (request.url === '/error') {
      response.statusCode = 500;
      response.end(helpers.wrapMessage('Error!', { color: 'red' }));
    } else {
      response.statusCode = 404;
      response.end();
    }
  }
});

/*
 * Add the following listeners:
 * Listen for the 'listening' event on the server. Log to the console when the
 * server is listening, and what port it is listening on
 *
 * Listen for a 'request' event, log that a request came in, include the
 * method and the url in the message
 *
 * Listen for an event when a response has completed (check the docs?)
 * Log the the response was sent and what the status code was
 *
 */

/*
server.on('listening', () => {
  console.log(`Server listening on port ${this.address().port}.`);
});
*/

server.on('listening', function () {
  console.log(`Server listening on port ${this.address().port}.`);
});

server.on('customRequest', (message) => {
  console.log('Custom request worked!', message);
});

server.on('request', (request, response) => {
  server.emit('customRequest', 'test');
  let { method, url } = request;

  console.log(`Request came in to ${method} ${url}.`);

  response.once('finish', betterListener);
});

function betterListener(response) {
  console.log(
    `Sent a response with a response code of  ${response.statusCode}`
  );
}

server.listen(port);
