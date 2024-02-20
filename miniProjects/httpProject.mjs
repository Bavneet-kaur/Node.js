// HTTP server setup
import http from "http";
import url from "url";

http.createServer(function (req, res) {
    if (req.method === "POST") {
      let body = "";

      req.on("data", data => {
        body += data;
      });

      req.on("end", () => {
        body = JSON.parse(body);
        users[body.username] = body.password;
        console.log(users);
      });
    }
    res.end();
}).listen(80);