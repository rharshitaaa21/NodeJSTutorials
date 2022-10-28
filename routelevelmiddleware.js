const express = require('express');
const app = express();
const route = express.Router(); //required to be xported only when large no of filters to be applued 100-150

const reqFilter = (req,res,next)=>
{
    if( !req.query.age)
    {
        res.send("Please provide age");
    }
   else if( req.query.age < 18)
    {
        res.send("18+ restrictions");
    }
    else{
        res.send("Welcome Geek")
        next();
    }
}
app.get('/', (res, resp) => {
    resp.send('Welcome to Home page')
});

route.get('/users',  (res, resp) => { // use route instance wherever you need to apply middleware
    resp.send('Welcome to Users page')
});

app.get('/contact',  (res, resp) => {
     resp.send('Welcome to conract page');
});

route.get('/coins',  (res, resp) => {
    resp.send('Welcome to coins page')
});

app.get('/accoutn',  (res, resp) => {
    resp.send('Welcome to account page')
});

app.use('/', route); // important to instancing 

app.listen(5000 );
