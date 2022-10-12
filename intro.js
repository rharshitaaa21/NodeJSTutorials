// serverside env
// similar to JS
// can connect with database
// free and opensource 
// chrome V8 engine is used to run Node JS
// used for API 
// made for using websites




// client ------> (req)  server
// server ------> (response) client 

// node js fumdamentals 
var x = 10 ;
var y = 20 ;
const z = 400 ;
console.log( x+y+z);

const app = require('./app');
console.log( app);
console.log(app.x);
console.log( app.z(66)); // syntax 


//arrays 
const arr = [1,2,3,4,5,3,7,8,9,3,10];
arr.filter((it)=> {
console.log(it);
let ans = ( it===3);
console.log( ans);

})