// IPC means ---> InterprocessCommunication
/**
 ** The general goal of Interprocess Communication (IPC) is to
 ** allow child and parent processes to communicate with each other.
 */

import cluster from "cluster";
import http from "http";


if (cluster.isPrimary) {
    const worker = cluster.fork();
    worker.send("Hello");
    worker.on("message",(msg) => {
        console.log(`${msg} with id: ${worker.id}`)
    })
}else {
    process.on('message',(msg) => {
        process.send(msg);
    });
    process.send("Message from worker")
}
/**pm2 ---> process management for node applications
 *? to install it's all dependcies we use 'npm i --global pm2' command in the terminal
 ** after installation we use command 'pm2 start .\workerIPC.mjs'
 */