const express = require('express');

const app = express();

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