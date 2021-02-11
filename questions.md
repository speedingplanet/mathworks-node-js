# Pending questions

- Other examples of APIs with synchronous methods?

  - child_process
  - Zlib
  - cypto

- How should I organize modules (and how can I do stuff like lodash)?

  - [What is require?](https://nodejs.org/en/knowledge/getting-started/what-is-require/)
  - [Requiring modules in Node.js](https://www.freecodecamp.org/news/requiring-modules-in-node-js-everything-you-need-to-know-e7fbd119be8/)
  - Short versions: `require('./foo')`
    - `./foo.js`
    - `./foo/package.json:main` points to the file with the code
    - `./foo/index.js` has the code
  - [Deeper dive in the CommonJS Modules docs](https://nodejs.org/api/modules.html)

- How can I ensure that I set up event handlers before events are emitted?
  - If you're designing the EventEmitter, consider using the `newListener` event to ensure that no events are emitted until listeners are attached.
  - If you're the consumer, sometimes EventEmitter subclasses are smart enough to use `process.nextTick()` before they emit events. If you attach event handlers **immediately** after creating an object, you may be safe. Check the docs.
  - There isn't an all-cases rule. Read the docs, hope for some detail about the constructor or a `main()` or `initialize()` style method, or an indication that `process.nextTick()` or `setImmediate()` is used.
