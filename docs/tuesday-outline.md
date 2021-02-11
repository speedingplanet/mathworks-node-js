# Tuesday's outline

## Leftover event handling

## Asynchronous code

- How does asynchronous code work in Node?
- Processing asynchronous code with callbacks
- Processing asynchronous code with Promises
  - Promises
  - Error handling
  - Chaining
  - util.promisify
  - **Exercise** Promises
  - async/await
- Generators

## Error handling in Node.js

- Managing errors
- Old error handling patterns
- Modern Node error handling
  - Promises
  - async/await
  - The special 'error' event https://nodejs.org/dist/latest-v14.x/docs/api/events.html#events_error_events
  - **Exercise** Error handling

## Working with databases

- Review of database setup
  - Using ORM system instead of low-level SQL
  - Introduce Sequelize, wrapped around sqlite for simplicity
- Configuration and schemas
  - **Exercise** Setting up a configuration with Sequelize
- Models and instances
  - **Exercise** Doing typical data stuff (searching, inserting, updating) with Sequelize
- Associations
  - **Exercise** Cross-table shenanigans

## Important Node.js APIs

- Globals
- Console
- OS
- Path
- Process
- Buffers
- Stream

## Unit testing with Node.js

- Unit testing with Jest
- Basic tests: assertions and expectations
- Mocking data
  - **Exercise** Unit testing
- Difficult issues (private functions, async?)
