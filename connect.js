// const express =require('express');
// const path = require('path');


// const app = express();

// const publicPath = path.join(__dirname,'public');
// //console.log(publicPath);

// app.use(express.static(publicPath)); // for accessing static files inside a folder connecting html pages and express 

// app.listen(5000);
const express = require('express');
const path = require('path');

const app = express();
const publicPath=path.join(__dirname,'public')

app.use(express.static(publicPath));

app.listen(5000);