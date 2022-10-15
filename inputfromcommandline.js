
//console.log(process);
//a very high data file 
console.log(process.argv);
 /*
  'C:\\Program Files\\nodejs\\node.exe',
  'D:\\Development\\NodeJsTutorials\\inputfromcommandline.js'   
  add items in command lines after and you'll be able to print everything one by one 
  priniting one by one would be ---->
    console.log(process.argv[1]);
      console.log(process.argv[1]);
        console.log(process.argv[1]);
          console.log(process.argv[1]);
 */

  const fs = require('fs');
  const input = process.argv;
  if( input[2] == 'add'){
  fs.writeFileSync(input[3], input[4]);
  }
  else if(input[2]== 'remove')
  {
    fs.unlinkSync(input[3]);
  }
  else 
  {
    console.log( "Invalid Input ");
  }
