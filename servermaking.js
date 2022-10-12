
// two methods for server creation

const http = require('http');

//1. declaring fxn and then passing it as parameter
function data( req, res)
{
res.write(" <h1>B.tech is not just a degree</h1> ");
res.end();
}
http.createServer(data).listen(4500);


//2. passing parameters directly as arrow functions 
// http.createServer( (req, res)=>
// {
//     res.write("Hii there dee here ");
//     res.end();
// }).listen(4500); 


//arrow fxn syntax

// function test( a){
//     return a*10;

// }
// const test = (a) => a*10;
