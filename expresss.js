
// nodejs framework 
const express = require('express');
const app = express(); // made it executable 

//sending get request 
app.get('', (req, res)=>
{
    console.log("data sent by browser =>", req.query.name);
    res.send('Heya Dee, this is home page');
});

app.get('/about', (req, res)=>
{
    res.send('Heya Hii, This is about page');
});

app.get('/home', (req,res)=>
{
    res.get('routing made easier');
});
app.listen(5000);
