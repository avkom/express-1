const express = require('express');

const app = express();
app.set('view engine', 'pug');
app.set('views', './views');

app.get('/first_template', (req, res) => {
    res.render('first_view');
});

app.get('/dynamic_template', (req, res) => {
    const options = {
        name: 'GitHub',
        url: 'http://github.com/'
    };
    res.render('dynamic', options);
});

module.exports = app;