import net from 'net';

const server = net.createServer(function(socket){
    socket.write("Hello Client Bavneet!");

    socket.on('data', function(data){
        console.log("recieved: ",data.toString())
    })
    socket.on('error', function(err){
        console.error(err)
    })
    socket.on('close', function(){
        console.log("connection is closed!")
    })
});
server.listen(8080, function(){
    console.log("Server is listening...")
});