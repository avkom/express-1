const express = require('express');
const things = require('./things');

const app = express();

app.use('/', (req, res, next) => {
    console.log('Before 1');
    next();
    console.log('After 1');
});

app.get('/', (req, res, next) => {
    res.send('2');
    next();
});

app.use('/', (req, res) => {
    console.log('3');
});

module.exports = app;