const express = require('express');
const things = require('./things');

const app = express();

app.use('/things', things);

app.get('/hello', (req, res) => {
    res.send('Hello, World!');
});

app.post('/hello', (req, res) => {
    res.send('You just called POST /hello');
});

app.all('/test', (req, res) => {
    res.send(`${req.method} /test`);
});

module.exports = app;