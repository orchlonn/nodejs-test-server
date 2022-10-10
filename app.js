const express = require('express');

const app = express();

app.use('/', (req, res, next) => {
    console.log("this always runs");
    next();
})


// add middleware function
app.use('/add-product', (req, res, next) => {
    console.log("in the another middleware");
    res.send("<h1>hello from express add product page</h1>")
});

// add middleware function
app.use('/', (req, res, next) => {
    console.log("in the another middleware");
    res.send("<h1>hello from express</h1>")
});

app.listen(3000);