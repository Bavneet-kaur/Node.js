import { createServer } from 'http';
import http2 from 'http2';

const server = createServer();
server.on('error',(err) =>{
    console.error(err);
});

server.on('stream',(stream,headers) =>{
    stream.respond({
        ':status' : 200
    });
    stream.write("Hello! Bawa");
    stream.end();

})
server.listen(8000);