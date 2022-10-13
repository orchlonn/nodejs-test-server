const path = require('path');

const express = require('express');

const router = express.Router();

//  /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
    res.sendFile(__dirname, '../');
});

//  /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
    res.redirect('/');
});


module.exports = router; 