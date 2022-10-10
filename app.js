const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: false}));

// add middleware function
app.use('/add-product', (req, res, next) => {
    console.log("in the another middleware");
    res.send(`<form action="/product" method="POST"><input type="text" name="title"><button type="submit"> Add product</button></form>`);
});

app.use('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

// add middleware function
app.use('/', (req, res, next) => {
    console.log("in the another middleware");
    res.send("<h1>hello from express</h1>");
});

app.listen(3000);