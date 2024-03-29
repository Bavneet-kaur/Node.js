import cluster from "cluster";
import http from "http";

const numCpus = 4; //number of processes
if (cluster.isPrimary) {
  for (let i = 0; i < numCpus; i++) {
    cluster.fork();
  }
} else {
  http.createServer(function (req, res) {
      res.writeHead(200);
      res.end("Process + process.pid + says hello!");
    }).listen(8000);
}
