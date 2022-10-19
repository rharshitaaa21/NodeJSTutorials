const express = require('express');
const app = express();
const reqFilter = (req, resp, next) => {
    if (!req.query.age) {
        resp.send("Please provide your age")
    }
    else if (req.query.age<18) {
        resp.send("You are under age")
    }
    else {
        next();
    }
}

app.use(reqFilter);

app.get('/', (res, resp) => {
    resp.send('Welcome to Home page')
});

app.get('/users', (res, resp) => {
    resp.send('Welcome to Users page')
});
app.listen(5000)

//middleware----
// used when same conditions are to be used at multiple places and for app pages 
// ex- 18+ restriction