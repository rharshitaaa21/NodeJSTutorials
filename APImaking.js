const http = require( 'http');
const data = require('./APIdatanode');
http.createServer((req, resp)=>{
    resp.writeHead(200, {'Content-Head': 'application\json'});
    resp.write(JSON.stringify(data));
    resp.end();
}


).listen(5500);