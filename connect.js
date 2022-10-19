const express = require('express');
const path = require('path');

const app = express();
const publicPath=path.join(__dirname,'public')

app.set('view engine', 'ejs');

app.get('', (req, res)=>
{
    res.sendFile(`${publicPath}/index.html`);
})

app.get('/about', (req, res)=>
{
    res.sendFile(`${publicPath}/about.html`);
});
app.get('/help', (req, res)=>
{
   res.sendFile(`${publicPath}/help.html`)
});

app.get('/login', (req, res)=>
{
  res.render('login');
});
app.get('/profile',(_,resp)=>{
    const user={
        name:'harshita',
        email:'harshita@gmail.com',
        city:'gzb'
    }
   resp.render('profile',{user})
});

app.get('*', (req, res)=>
{
   res.sendFile(`${publicPath}/404.html`)
});


app.listen(5000);