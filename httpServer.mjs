// HTTP server setup
import http from'http';
import url from 'url';

http.createServer(function(req,res){
    const q = url.parse(req.url,true);
    console.log(q.query);
    res.writeHead(200,{"Content-Type":"text/html"})
    res.write("Hi! Bavneet......."); //text
    

    if (req.method === 'GET'){
        res.write("GET request recieved")
    }else if(req.method === 'POST'){
        res.write("POST request recieved")
        let body = "";
        req.on('data', data =>{
            body += data;
        });
        req.on("end",()=>{
            body = JSON.parse(body);
            console.log(body); //[Object: null prototype] {} { username: 'BAWA', password: 'Love' }
            console.log(body.username); //BAWA
        })
    }
    res.end();
//localhost will remove the number 80 when open in browser because port 80 is default http port
}).listen(80); 