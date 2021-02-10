const EventEmitter = require('events');

class MyEmitter extends EventEmitter {
  initialized = false;

  initialize() {
    this.initialized = true;
  }

  emitFirst() {
    this.initialized && emitter.emit('someEvent', 'alpha', 'beta', 'gamma');
  }

  emitSecond() {
    this.initialized &&
      emitter.emit('someEvent', 'apple', 'banana', 'cauliflower');
  }
}

let emitter = new MyEmitter();

emitter.emitFirst();

emitter.on('someEvent', function (a, b, c) {
  // Do something here.
});

emitter.initialize();
emitter.emitFirst();
