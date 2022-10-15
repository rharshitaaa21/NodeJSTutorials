const http = require( 'http');
const data = require('./APIdata');
http.createServer((req, resp)=>{
    resp.writeHead(200, {'Content-Head': 'application\json'});
    resp.write(JSON.stringify(data));
    resp.end();
}


).listen(5500);