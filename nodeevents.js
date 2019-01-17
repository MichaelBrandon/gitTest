var events = require('events');
var eventEmitter = new events.EventEmitter();




//result of event 
var message = function() {
    console.log("You fired off an event!");
}

exports.nodeevents = function() {
    return message();
}

//event listener
eventEmitter.on("evnt", message);

//eventEmitter.emit('evnt');