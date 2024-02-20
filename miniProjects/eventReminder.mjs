import { EventEmitter } from "events";
import { eventNames } from "process";
const myEventR =  new EventEmitter;

export class Publisher{
    constructor(){

    }
    publishReminder(eventNames,message){
        myEventR.emit(eventNames,message)
    }
}

export class Subcriber{
    constructor(reminder){
        myEventR.on(reminder,(message) => {
            console.log(message)
        })
    }
}