import { Publisher,Subcriber } from "./eventReminder.mjs";
import { eventNames } from "process";

const pub =  new Publisher();
const sub1 =  new Subcriber('event1');
const sub2 =  new Subcriber('event2');

pub.publishReminder('event1','gaming event is starting soon');
pub.publishReminder('event2','football event is being delayed');