/**----------Step Debugging------*/
/** 
  * step debugging if a certain piece of code is working or not
  * by adding break points using VScode
  ** breakpoints are adding by right click on the line state >> add breakoint
*/
import http from "http";

const server = http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello Step debugging --- Bavneet Kaur");
});
server.listen(80);
/**----------Using Jest---------- */