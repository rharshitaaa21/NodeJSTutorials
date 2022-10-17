// ways to create mutiple files at a time 

//1st way ----
// const fs = require('fs');
// fs.writeFileSync(filename, content );

// //2nd path 
/**/ 
// const fs = require('fs');
// const path = require('path');
// const dirPath =path.join(__dirname, 'files');
// console.warn(dirPath);

//3rd -- using loops 
const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname,  'files');
 //console.warn( dirPath );
 fs.writeFileSync('hello.txt', "Simple File ")
// for(  i=0;i< 5 ;i++)
// {
 
//     fs.writeFileSync(  `hello${i}.txt`, " A simple File ");

// }

fs.readdir(dirPath, (error, files)=>
{
    files.forEach((item)=>{
        console.log( item);
    })
})
