let http = require('http');
let EventEmitter = require('events');
let chalk = require('chalk');
let helpers = require('../common/helpers');

/*
 * Create a custom event emitter class
 * Instantiate it
 */
class RESTEmitter extends EventEmitter {}
const re = new RESTEmitter();

let port = 3000;

let server = http.createServer((request, response) => {
  if (request.method === 'GET') {
    if (request.url === '/success') {
      // Emit a 'goodRequest' event here, passing the url as an argument
      re.emit('goodRequest', request.url);
      response.end(helpers.wrapMessage('Success!'));
    } else if (request.url === '/error') {
      // Emit a 'badRequest' event here, passing the url as an argument
      re.emit('badRequest', request.url);
      response.statusCode = 500;
      response.end(helpers.wrapMessage('Error!', { color: 'red' }));
    } else {
      // Emit a 'unknownRequest' event here, passing the method and the url as an argument
      re.emit('unknownRequest', request.method, request.url);
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
re.on('goodRequest', (url) => {
  console.log(chalk.greenBright(`Good request sent to ${url}`));
});

re.on('badRequest', (url) => {
  console.log(chalk.redBright(`Bad request sent to ${url}`));
});

re.on('unknownRequest', (method, url) => {
  console.log(
    chalk.yellowBright(`I didn't understand the ${method} request to ${url}.`)
  );
});

server.listen(port);
