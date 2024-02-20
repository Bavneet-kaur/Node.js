// to start cli in a shell with a code

import repl from 'repl';
repl.start();

// creating basic i/o with readline
import readline from 'readline';
let r1 = readline.createInterface(process.stdin,process.stdout) //creating interface
r1.question("What is your name: ",(name) =>{
    // console.log(name);
    r1.write(name);
    r1.close();
});

// handling command line signals -SIGINT, SIGCONT, SIGSTP
let r2 = readline.createInterface(process.stdin,process.stdout);
r2.on("SIGINT", () => {
    r2.question('Exit (y or n)?', (input) => {
        if(input === 'y'){
            r2.pause();
        }
    });
});