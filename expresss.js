// nodejs framework 
const express = require('express');
const app = express(); // made it executable 

//sending get request 
app.get('', (req, res)=>
{
  
    res.send(`
    <h1>Heya Dee, this is home page</h1>
    <a href='/about'>Go to About</a>
    `);
    //a href for adding link to another page 
    //input tage for adding input text 
    //button for submitting req
});

app.get("/about", (req, res)=>
{ //for creating form  and taking inputs in node 
    res.send(`                                                    
   <input type = "text" placeholder="User Name" /> 
   <button>Click ME</button>
   <a href ='/'> Go to Home</a>
    `);
});
app.get("/help", (req, res)=>
{
    res.send( [
        {
            name: 'Harshita',
            email: 'harshita@gmail.com'
        },
        {
            name: 'Sam',
            email: 'sam@gmail.com'
        }
    ]);     
});
app.listen(5000);