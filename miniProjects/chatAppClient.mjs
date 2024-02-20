import dns from 'dns';
import readline from 'readline';
import { createInterface } from 'readline/promises';

const readLine = createInterface({
    input: process.stdin,
    output: process.stdout
});

const userNameIn = new Promise(resolve =>{
    readLine.question("Enter a username: ",answer =>{
        resolve(answer);
    })
});

userNameIn.then((username) =>{
    const client = net.connect({port:5050}, function(){
        console.log("connected to server");
    })
    readLine.on('line', function(){
        client.write(username + ": " + data);
    });
    client.on('data',function(data){
        console.log(data.toString());
    })
})