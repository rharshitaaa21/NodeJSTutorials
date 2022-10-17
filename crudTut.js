const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, 'crud');
console.warn(dirPath);

//C- creating file 
const filePath = `${dirPath}/song.txt`;
fs.writeFileSync(filePath, "Jo mile usme kaat lenge hum");
//R-reading file 
fs.readFile(filePath,'utf8', (error, item)=>{ //utf8 helps reading actual values 
    console.log(item);
})

// fs.readFile(filePath, (error, item)=>{ //without utf8 it read the buffer values 
//     console.log(item);
// })

// // 
// U-update files 
fs.appendFile(filePath,  " thodi khusiyaan thode aansu baant lenge hum  ",(err)=>
{
    if(!err) console.log("file is up to date")
});

// renaming a file 
fs.rename(filePath, `${dirPath}/update.txt`, (err) =>
{
    if(!err) console.log("File is updated");
}) // after this step file named song is renamed to a file named update 

//D- deleting a file 
fs/fs.unlinkSync(`${dirPath}/update.txt`);