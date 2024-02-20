// process handling
import process from 'process';

/*'beforExit' : good to catch situations where you want to save your work before an exit */
process.on('beforeExit', (code) => {
    console.log(code); // 0(status code) which means code is exited successfully
});

/*process modules can be used to handle various events like exit and signals */

// parsing arguments
console.log(process.argv) /*[
    'C:\\Program Files\\nodejs\\node.exe',  ---> shows where node is located
    'C:\\Users\\Bavneet Kaur\\Desktop\\NodeJS\\process.mjs' --- where I am currently working
  ]*/
  console.log(process.argv[4]) //bavneet
