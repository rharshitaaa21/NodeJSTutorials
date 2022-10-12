// core module = inbuilt modules 
// ex- console.log, fs , Buffer, HTTP

// 1. global module: need not to be imported 
// EX-  console.log(" dee "); // console.log can be used globally throughout the program 

// 2. non-global module : needs to be imported before use 
// Ex- filesystems ,

// const fs = require ( 'fs' );// imports a fs module 

// fs.writeFileSync("dee.txt", "Hii there its Dee here !!"); // with help of fs it creates dee.txt and write string in it 
// the data onject has to be a string 


const fs = require('fs');

console.log( __dirname, "----", __filename); // diname = directory name only , filename == entrire directory_file 
