# Node.js Outline

## Introduction to Node.js

- What is Node.js and why is it different
- Versions
  - Long-term support
  - Development
  - Numbering system
  - Using different versions (nvm, n, other tools)
- Node's basis and features?
  - Basis: Google's JavaScript engine (V8)
  - The event loop
  - Asynchronous code
  - Input/Output vs CPU tasks and APIs
- Running Node.js applications
  - The interactive shell
  - **Exercise**: experimenting with the interactive shell
  - The command line

## Node.js projects

- Creating a project with NPM
  - **Exercise** Creating a project with NPM
- Project structure
  - package.json
  - node_modules
  - .npmrc (Windows equivalent, relevant below)
  - Other files
- Dependencies
  - Installing dependencies
    - Semantic versioning
    - Tilde vs carat
  - Runtime dependencies
  - Development dependencies
  - Peer dependencies
  - Fetching dependencies from MathWorks vs the Internet
    - Other ways to install dependencies (GitHub, locally, etc.)
  - **Exercise** Installing a series of dependencies

## Writing code for Node.js (1 hour)

- Running code in Node.js
  - The REPL (Read-Eval-Print-Loop)
  - The command line
    - Command line switches
    - Executing 1-liners?
  - Files
    - `npm start`
    - What about npx?
  - **Exercise** Running code with Node.js
- Modules and libraries
  - Loading code from another file
    - require
    - import is available
  - Creating your own modules
  - CommonJS modules vs ECMAScript modules
  - **Exercise** Writing and using a module

## Events and Node.js

- The event loop in detail
  - What is the event loop?
  - What happens in/on the event loop?
  - How does the event loop interact with (the rest of) Node
- Capturing events
  - Listening for events
  - Reacting to events
  - **Exercise** Working with events

## Asynchronous code (2 hours)

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
