const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('GET /things');
});

router.post('/', (req, res) => {
    res.send('POST /things');
});

module.exports = router;