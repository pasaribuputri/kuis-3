import http from 'http';

http.createServer((req,res)=>{
    res.writeHead(200,{
        'Content-Type' : 'text/plain'
    })
    if(req.url === "/tampil" && req.method === "GET"){
        res.write("Belajar create server node js")
    }
    res.end("")
}).listen(3000);
