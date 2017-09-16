'use strict';

const express = require('express')
const app = express()

const PORT = 3001;
const HOST = '0.0.0.0';

app.get('/', function (req, res) {
    res.send('Hello World!')
});

app.listen(PORT, function () {
    console.log('Running on http://${HOST}:${PORT}')
});
