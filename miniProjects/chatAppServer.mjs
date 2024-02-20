import net from 'net';
const sockets =[];

function broadcast(data) {
    sockets.forEach(socket => {
        socket.write(data);
    })
};

const server = net.createServer(function(socket){
    sockets.push();
    
    socket.on('data', function(data){
        broadcast(data);
    });
    socket.on('error', function(err){
        console.error(err);
    });
    
});

server.listen(5050, function(){
    console.log("Server(5050) is listening...")
});