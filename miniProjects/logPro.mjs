/**use methods such as writeFile(), readFile(), and appendFile() asynchronously. */
import * as filefs from './loggingPro.mjs';

/*The append method adds the content to the end of the file, whereas
the write method overwrites the content every time. */

//reading log.txt file--> This is a log file ....(logggingPro.mjs)
console.log(filefs.readLogFile('log.txt')); 
//writing into log.txt file-->Hi! I am Bavneet Kaur writing into log file. 
console.log(filefs.writeLogLine('log.txt',"Hi! I am Bavneet Kaur writing into log file.\n"))
console.log(filefs.readLogFile('log.txt')); 
// appending into 'log.txt' file --> 
console.log(filefs.appendLogLine('log.txt',"'log.txt' is a test file for logging program"))
console.log(filefs.readLogFile('log.txt')); 


/** other way of performing log processing
 * import {appendLogLine, readLogFile, writeLogLine } from "./loggingPro.mjs";
 * writeLogLine("log.txt", "test line\n");
 * readLogFile("log.txt");
 * appendLogLine("log.txt", "second line\n");
 * readLogFile("log.txt");
 */