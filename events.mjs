// event drievn programming
// emits event >> goes into event loop >> event handler(callback functions)
// callback functions enables you to handle asynchronous events
import { EventEmitter } from "events";
import { resolve } from "path";

const myEvent =  new EventEmitter;

function notifyConnection(ip){
    console.log(ip + " connected to server")
}
myEvent.on('connection', notifyConnection);
myEvent.emit('connection','127.0.0.1');

//synchronous events
async function process(ip){ //waiting for 2 seconds ---> async event
    await new Promise(resolve => setTimeout(resolve,2000))
    console.log(ip +" has connected");
}
myEvent.on('connection', process);
myEvent.emit('connection','128.0.0.1');
myEvent.emit('connection','129.0.0.1');

/*evnet driven programming is a publisher-subscriber model publisher creates events 
and subscriber process the event/handles the event(like a client-server model)*/

