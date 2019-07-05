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

app.get('/:id', (req, res) => {
    res.send(`Requested GET /${req.params.id}`);
});

app.get('/things/:id([0-9]{5})', (req, res) => {
    res.send(`Called 5 digit /things/${req.params.id}`);
});

app.get('/:name/:id', (req, res) => {
    res.send(`Requested name: ${req.params.name} and id: ${req.params.id}`);
});

app.get('*', (req, res) => {
    res.send(`Sorry, this is an invalid URL`);
});

module.exports = app;