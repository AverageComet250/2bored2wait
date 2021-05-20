var express = require('express');

function sendFile(path, res) {
    res.sendFile(path, { root: __dirname })
};

var router = express.Router();

router.get('/', (req, res) => {
    sendFile('index.html', res);
});

router.get('/index', (req, res) => {
    sendFile('index.html', res);
});

router.get('/index.html', (req, res) => {
    sendFile('index.html', res);
});

router.get('/index.css', (req, res) => {
    sendFile('index.css', res);
});

router.get('/particles.js', (req, res) => {
    sendFile('node_modules/particles.js/particles.js', res);
});

module.exports = router;