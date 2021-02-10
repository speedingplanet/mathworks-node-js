let http = require('http');
let chalk = require('chalk');
let helpers = require('../common/helpers');

/*
 * Create a custom event emitter class
 * Instantiate it
 */

let port = 3000;

let server = http.createServer((request, response) => {
  if (request.method === 'GET') {
    if (request.url === '/success') {
      // Emit a 'goodRequest' event here, passing the url as an argument

      response.end(helpers.wrapMessage('Success!'));
    } else if (request.url === '/error') {
      // Emit a 'badRequest' event here, passing the url as an argument

      response.statusCode = 500;
      response.end(helpers.wrapMessage('Error!', { color: 'red' }));
    } else {
      // Emit a 'unknownRequest' event here, passing the method and the url as an argument

      response.statusCode = 404;
      response.end();
    }
  }
});

server.on('listening', () => {
  console.log(`Server listening on port ${port}.`);
});

server.on('request', (request, response) => {
  let { method, url } = request;
  console.log(`Request came in to ${method} ${url}.`);

  response.on('finish', () => {
    console.log(
      `Sent a response with a response code of  ${response.statusCode}`
    );
  });
});

/*
 * Add event listeners for goodRequest, badRequest, and unknownRequest
 * The listeners don't have to do more than log to the console that they fired
 * Experiment with Chalk (https://github.com/chalk/chalk) to add color
 * to the messages
 */

server.listen(port);
