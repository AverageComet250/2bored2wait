var express = require('express');

function sendFile(path, res) {

    if (__dirname )

    res.sendFile(path, { root: "./" })
};

var router = express.Router();

router.get('/', (req, res) => {
    sendFile('new-webserver/index.html', res);
});

router.get('/index', (req, res) => {
    sendFile('new-webserver/index.html', res);
});

router.get('/index.html', (req, res) => {
    sendFile('new-webserver/index.html', res);
});

router.get('/index.css', (req, res) => {
    sendFile('new-webserver/index.css', res);
});

router.get('/particles.js', (req, res) => {
    sendFile('node_modules/particles.js/particles.js', res);
});

router.get('/app.js', (req, res) => {
    sendFile('node_modules/particles.js/demo/js/app.js', res);
});

module.exports = router;