const $events = require('events');
const emiter = new $events.EventEmitter();

emiter.on('onkeypress', showMessage);

function showMessage() {
    console.log('You clicked button !');
}
emiter.emit('onkeypress');
