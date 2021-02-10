let http = require('http');
let helpers = require('../common/helpers');

let port = 3000;

let server = http.createServer((request, response) => {
  // let server = http.createServer(function (request, response) {
  if (request.method === 'GET') {
    console.log('Received GET request');
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

server.listen(port);
