const EventEmitter = require('events');

class CustomEmitter extends EventEmitter {
  abc() {
    // process.nextTick(() => {
    this.emit('customEvent', 'Some custom message');
    // });
  }
}

let ce = new CustomEmitter();
ce.on('customEvent', () => {
  console.log('Attached before');
});

ce.abc();
ce.on('customEvent', () => {
  console.log('Attached after');
});
ce.abc();
